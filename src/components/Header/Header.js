import React, { useState } from 'react';
const Header = (props) => {
    const {count,setCount}= props
    const handelCount=()=>{
            setCount(count+1);
    }
    return (
        <div>
            <h1>This is Header:  {count}</h1>
            <button onClick={handelCount}>Increases</button>
        </div>
    );
};

export default Header;