import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './product.item.module.css'

export default function ProductItem({product,setConfirm}) {


  return (

    <div className={s.productItem}  >
           
            <div className={s.imgItem}>
            {product.imageUrl ? <img src={product.imageUrl} alt="" /> :
            <div>No photo</div>
            }
            </div>
            <NavLink to={`/product/${product.id}`}>show details</NavLink>
        <div>{product.name}</div>
        <div className={s.wrapperBtns}>
            <button onClick={() => setConfirm({id: product.id, show: true})} >Delete</button>
        </div>
    </div>
  
  )
  
}
