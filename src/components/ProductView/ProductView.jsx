import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { MyContext } from '../../context/modalContext';
import { addProductToModal } from '../../features/modal/modalSlice';

import s from './product.view.module.css';

export default function ProductView() { 


    const { id } = useParams();
    const prods = useSelector(state => state.productReducer.products);
    const [prodDetails, setProdDetails] = useState(null);
    const dispatch = useDispatch();

    const { modalChange, setModalChange, setModal} = useContext(MyContext);

    useEffect(() => {
        const item = prods.find(product => +product.id === +id);
        setProdDetails(item);
    }, [prods, id]);

  return (
    <div className={s.productViewItem}>
            <button onClick={() => {
            
                setModalChange(true);
                setModal(true);
                dispatch(addProductToModal(prodDetails));

            }}>EDIT</button>
            {prodDetails && 
                <div>
                    <div>{prodDetails.name}</div>
                    <div>count {prodDetails.count}</div>
                    <div>{prodDetails.weight}</div>
                    
                    <div>
                        Comments:
                        {prodDetails.comments.map(comment => <div key={comment.id}>{comment.description}</div>)}
                    </div>
                </div>
            
            }


    </div>
  )
}
