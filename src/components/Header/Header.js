import React, { useContext, useState } from 'react';
import { categoryContext } from '../../App';
import Category from '../Home/Category/Category';
const Header = (props) => {
    const {count,setCount}= props
    const [category,setCategory]=useContext(categoryContext)
    const handelCount=()=>{
            setCount(count+1);
    }
    return (
        <div>
            <h1>This is Header:  {count}</h1>
            <h1>This is Header Category:  {category}</h1>
            <button onClick={handelCount}>Increases</button>
            <button onClick={ ()=> setCategory('Laptop')}>Laptop</button>
            <button onClick={ ()=> setCategory('Mobile')}>Mobile</button>
            <button onClick={ ()=> setCategory('Camera')}>Camera</button> 
        </div>
    );
};

export default Header;