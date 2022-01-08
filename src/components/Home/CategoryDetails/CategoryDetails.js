import React, { useContext } from 'react';
import { categoryContext } from '../../../App'; 

const CategoryDetails = (props) => {
    const {count} =props;
    const [category]= useContext(categoryContext);
    return (
        <div>
            <h3>This is Category Details: {count} </h3>
            <h4>This is from Category context: {category}</h4>
        </div>
    );
};

export default CategoryDetails;