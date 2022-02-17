import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { MyContext } from '../../context/modalContext';

import { ConfirmWindow } from '../ConfirmWrapper/ConfirmWrapper';
import Header from '../Header/Header'
import Modal from '../Modal/Modal';

export default function Layout() {

    const [modal, setModal] = useState();
    const [confirm, setConfirm] = useState({id: 0, show: false});
    const [modalChange, setModalChange] = useState(false);

  return (
    <div>

        <MyContext.Provider value={{modalChange, setModalChange, setModal}}>

    <Header setModal={setModal}/>
    <Outlet context={[confirm, setConfirm]}/>

    {modal &&  <Modal setModal={setModal} />}

    {confirm.show &&  <ConfirmWindow confirm={confirm} setConfirm={setConfirm}/>}

    </MyContext.Provider>


    </div>
  )
}







