import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { MyContext } from '../../context/modalContext';
import { addProductToModal } from '../../features/modal/modalSlice';

import s from './header.module.css';

export default function Header({setModal}) {

   const {modalChange, setModalChange} = useContext(MyContext);
   const dispatch = useDispatch();

  return (
    <header className={s.header}>
        <button className={s.btnHeader} onClick={() => {
            setModal(true);
            setModalChange(false);
            dispatch(addProductToModal({
                    id: 0,
                    imageUrl: "none",
                    name: "name",
                    count: 0,
                    size: {
                      width: 200,
                      height: 200,
                    },
                    weight: "200g",
                    comments: []
                  
            }))
            
        }}>Add product</button>
    </header>
  )
}
