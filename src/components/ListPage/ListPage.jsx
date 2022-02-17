import React, { useState } from 'react'

import { useMemo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { useOutletContext } from 'react-router-dom';

import { fetchProducts } from '../../features/products/productsSlice';
import ProductItem from '../ProductItem/ProductItem';


import s from './list.page.module.css';

export default function ListPage() {

    const dispatch = useDispatch();
    const [_, setConfirm] = useOutletContext();

    const listOfProducts = useSelector(state => state.productReducer.products);

    const [sort, setSort] = useState({word: true, count: false});
    
    const modifiedList = useMemo(() => {
        let copyiedArr = [...listOfProducts];

        if (sort.word) {
            copyiedArr = copyiedArr.sort((a, b) => a.name.localeCompare(b.name))
        }

        if (sort.count) {
            copyiedArr = copyiedArr.sort(function (a, b)
            {
                 return a.count - b.count; 
            });

        }

        return copyiedArr;
    }, [sort, listOfProducts])


    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const changeSort = (value) => {
        if (value === "word") {
            setSort({word: true, count: false})
        }
        if(value === "count") {
            setSort({word: false, count: true})
        }
    }


  return (
    <div className={s.listPageWrapper}>
        

        <div>
            <select   onChange={(event) => changeSort(event.target.value)} value={sort.word ? "word": "count"}>
                    <option value="word">word</option>
                    <option value="count">count</option>
            </select>
        </div>

        {modifiedList.map(product => {
            return <ProductItem setConfirm={setConfirm} product={product} />
        })}
        
        </div>
  )
}
