import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { Product } from '../../models/Product';
import { formatPrice } from '../../utils/formatPrice';

export const Item: FC<Product> = (props: Product) => {
  const { id, title, description, category, image, price, rating } = props;
  return (
    <>
      <Link to={`/store/${id}`}>
        <img src={ image } alt="" style={{ width: '200px' }} />
      </Link>
      <h3>{title}</h3>
      <small>{ category }</small>
      <p>{ description }</p>
      <p>Price: { formatPrice(price) }</p>
      <p>Rating: { rating.rate } / { rating.count }</p>
    </> 
  )
}
