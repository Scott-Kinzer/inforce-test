import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { MyContext } from '../../context/modalContext';
import { addProduct, changeProductData } from '../../features/products/productsSlice';

import s from './modal.module.css';

export default function Modal({ setModal }) {

    const dataOfModal = useSelector(state => state.modalReducer.modal);

    const [id] = useState(dataOfModal.id);

    const [image, setImage] = useState(dataOfModal.imageUrl);
    const [name, setName] = useState(dataOfModal.name);
    const [count, setCount] = useState(dataOfModal.count);
    const [weight, setWeight] = useState(dataOfModal.weight);

    const [comment, setComment] = useState("");

    const [comments, setComments] = useState(dataOfModal.comments);


    const dispatch = useDispatch();

    const {modalChange, _} = useContext(MyContext);

    
    const addItem = () => {
        
        const objProduct = {
            imageUrl: image,
            name: name,
            weight: `${weight}g`,
        }

        for (let item in objProduct) {
            if (objProduct[item].length === 0) {
                return;
            }
        }



        dispatch(addProduct({...objProduct,
            comments: [...comments],
            id: Math.floor(Math.random() * 1000),
            count: +count,
        }));
    }

    const setupCommentStructure = (title) => {
        return {
            id: comments.length,
            description: title,
            date: new Date().toString()
        }
    }

    return (
        <div className={s.modalWrapper}>

            <div className={s.leftSideModal}>
                <input placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} type="text" />
                <input placeholder='Enter url' value={image} onChange={(e) => setImage(e.target.value)} type="text" />
                <input placeholder='Enter count' value={count} onChange={(e) => setCount(e.target.value)} type="text" />
                <input placeholder='Enter weight' value={weight} onChange={(e) => setWeight(e.target.value)} type="text" />

                <div className={s.btnWrapper}>
                    {modalChange ? 
                        <>
                            <button onClick={() => {
                                dispatch(changeProductData(
                                    {
                                        imageUrl: image,
                                        name: name,
                                        weight: `${weight}g`,
                                        id: id,
                                        count,
                                        comments,
                                        size: {
                                            width: 200,
                                            height: 200
                                        }
    
                                    }
                                ))

                                setModal(false);
                            }} >Change the product</button>
                            <button onClick={() => setModal(false)}>Cancel changing</button>

                        </>
                            :
                        <>
                        <button onClick={() => addItem()}  >Add product</button>
                         <button onClick={() => setModal(false)}>Cancel</button>
                        </>
                }
                </div>
            </div>

            <div className={s.rightSideModal}>
                <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" />
                <button onClick={() => {
                    setComments([...comments, setupCommentStructure(comment)]);
                    setComment("");
                }}>Add comment</button>

                {comments.map(comment => <div  key={Math.floor(Math.random() * 1000)}>{comment.description}</div>)}
            </div>

        </div>
    )
}


