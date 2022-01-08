import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
 
export const categoryContext = createContext();

function App() {
  const [count,setCount]= useState(100);
  const [category,setCategory]= useState(10);
  return (
    <categoryContext.Provider value={[category, setCategory]}>
    <div className="App"> 
    <h5>Root lvl :{count}</h5>
    <Header count ={count} setCount={setCount}></Header>
    <Home count ={count} setCount={setCount}></Home>
    <Shipment  count ={count} setCount={setCount}></Shipment>
    </div>
    </categoryContext.Provider>
  );
}

export default App;
