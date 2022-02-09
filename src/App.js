import './App.css';
import { useEffect, useState } from 'react';
import Actor from './Components/Actor/Actor';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import { CardGroup, Row } from 'react-bootstrap';

function App() {
  const [actors,setActors] = useState([]);
  const [budget,setBudget] = useState(0);
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
  const handleAddToMovie = (money)=>{
    setBudget(budget+money);
  }

  return (
   <div id='wrapper'>
   <Header></Header>
   <div  className='row text-white'>
   <div className='col-9 mt-5'>
   <Row xs={1} md={2} className="g-4">
     {
       actors.map(actor => <Actor 
        actor = {actor}
        handleAddToMovie = {handleAddToMovie}
        ></Actor>)
     }
    </Row>
   </div>
   <div className='col-3 mt-5'>
     <Cart
      budget = {budget}
     ></Cart>
   </div>
  
 </div>
   </div>
  );
}

export default App;
