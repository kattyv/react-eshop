import React, { FC, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Item } from './Item'
import { useStoreContext } from '../../context/StoreContext';

export const ItemsList: FC = () => {
  //const [products, setProducts] = useState<Product[]>([]);
  const { getItems } = useStoreContext();
  const { products, isLoading, isError } = getItems()

  return (
    <>
      {isLoading && 
        'Loading data...'
      }
      {isError && 
        'Error: Problem loading data'
      }
      { products?.map(item => (
        <Item key={ item.id } {...item} />
      ))}

      

      <div>Pagination maybe...</div>
    </>
  )
}
