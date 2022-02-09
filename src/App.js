import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Actor from './Components/Actor/Actor';
import Cart from './Components/Cart/Cart';

function App() {
  const [actors,setActors] = useState([]);
  useEffect(()=>{
    fetch('./actor.JSON', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res => res.json())
    .then(data => setActors(data))
  },[])

  return (
    <div id='wrapper' className='row text-white'>
      <div className='col-8 mt-5'>
        <Actor></Actor>
      </div>
      <div className='col-4 mt-5'>
        <Cart></Cart>
      </div>
     
    </div>
  );
}

export default App;
