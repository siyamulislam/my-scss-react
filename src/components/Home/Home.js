import React, { useContext } from 'react';
import { categoryContext } from '../../App';
import Category from './Category/Category';

const Home = (props) => {
    const {count}= props
    const [category,setCategory]= useContext(categoryContext);
    return (
        <div style={ {border: '1px solid red', margin:'20px 200px'}}>
            <h1>This is Home: {count} </h1>
            <h1>This is Home Category: {category} </h1>
            <Category count={count}></Category>
            <button onClick={()=>setCategory(category+1)}>SetCategory</button>
        </div>
    );
};

export default Home;