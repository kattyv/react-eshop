import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useStoreContext } from '../../context/StoreContext';
import { formatPrice } from '../../utils/formatPrice';

export const ItemDetails: FC = () => {
  const { id } = useParams() as { id: string };
  //const [product, setProduct] = useState({} as Product);
  const { getItem } = useStoreContext();
  const { product, isLoading, isError } = getItem(+id);


  return (
    <>
      {isLoading && 
        'Loading data for product...'
      }
      {isError && 
        'Error: Problem loading data'
      }
      <h1>{ product?.title }</h1>
      <img src={ product?.image } alt="" style={{ width: '200px' }} />
      <small>{ product?.category }</small>
      <p>{ product?.description }</p>
      <p>Price: { formatPrice(product?.price) }</p>
      <p>Rating: { product?.rating.rate } / { product?.rating.count }</p>
    </>
  )
}

