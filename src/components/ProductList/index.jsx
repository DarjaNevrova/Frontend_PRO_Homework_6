import React from 'react'
import ProductItem from '../ProductItem'
import style from './style.module.css'

export default function ProductList({products}){
  return (
    <div className={style.productContainer}>
      {
      products.map((product) => (<ProductItem key={product.id} product={product} />))
      }
    </div>
  );
}