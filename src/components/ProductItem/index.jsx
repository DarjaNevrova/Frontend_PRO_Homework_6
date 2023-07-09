import React from 'react'
import style from './style.module.css'

export default function ProductItem({ product }){
  return (
    <div>
      <div className={style.product}>
        <p className={style.productTitle}>{product.title}</p>
        <p className={style.productPrice}>{product.price}</p>
      </div>
    </div>
  );
}
