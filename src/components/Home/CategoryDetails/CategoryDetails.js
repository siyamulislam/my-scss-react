import React, { useContext } from 'react';
import { categoryContext } from '../../../App'; 

const CategoryDetails = (props) => {
    const {name} =props.product;
    const [category]= useContext(categoryContext);
    return (
        <div style={{border:('2px solid blue'),margin:'20px'}}>
            <h3>This  product is : {name} </h3>
            <h4>Category : {category}</h4>
        </div>
    );
};

export default CategoryDetails;