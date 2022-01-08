import React, { useContext } from 'react';
import { categoryContext } from '../../App'; 

const Shipment = (props) => {
    const {count} =props
    const[category,setCategory]=useContext(categoryContext)
    return (
        <div>
            <h3>This is ship: {count} </h3>
            <h5>This is Category: {category} </h5>
            <button onClick={()=>setCategory(category-2)}>Set Ship</button>
        </div>
    );
};

export default Shipment;