import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
const Category = (props) => {
    const {count}= props
    const [products,setProduct]=useState([]);
    const[category]=useContext(categoryContext)
    useEffect(()=>{
        const allProducts = [
            {name:'Lenovo',category:'Laptop'},{name:'HP',category:'Laptop'},{name:'Dell',category:'Laptop'},
            {name:'Xiaomi',category:'Mobile'},{name:'Symphony',category:'Mobile'},{name:'Apple',category:'Mobile'},
            {name:'Sony',category:'Camera'},{name:'Nikon',category:'Camera'},{name:'Cannon',category:'Camera'},];
            const matchProduct=allProducts.filter(pd=>pd.category.toLowerCase() ===category.toLowerCase())
            setProduct(matchProduct);
            console.log(matchProduct);
    },[category])
    return (
        <div>
            <p>This is Category: {count}</p>
            {
                products.map((pd,index)=><CategoryDetails key={index} product={pd}></CategoryDetails>)
            }  
        </div>
    );
};

export default Category;