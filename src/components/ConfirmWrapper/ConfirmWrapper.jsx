import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../features/products/productsSlice';

import s from './confirm.module.css';

export function ConfirmWindow({confirm, setConfirm}) {
    const dispatch = useDispatch();
    return (
        <div className={s.confirmWrapper}>
            <div>Do you want to delete product?</div>
            <button onClick={() => {
                dispatch(deleteProduct(confirm.id));
                setConfirm({show: false});
            } }>Yes</button>
            <button onClick={() => setConfirm({show: false})}>No</button>
        </div>
    )
}