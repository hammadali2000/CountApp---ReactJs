import React , {useState} from 'react';
import Message from './Message';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  
  let [count, setCount] =useState(0)
  // increment = () => {
  //   setCount(1);

  // }
  if(count < 0){
    alert("Count can't be less than 0");
    count = 0;
  }
  return (
    <div className="App">
      <div className="heading"><h2>Counter Application</h2></div>
      <div className="content">
        <Message counter={count}/>
          <div className="content2">
            <button className="increment" onClick={()=> setCount(count + 1)}>Increment</button>
            <button className="decrement" onClick={()=> setCount(count - 1)}>Decrement</button>
            <button className="reset" onClick={()=> setCount(0)}>Reset</button>
          </div>
      </div>
    </div>
  );
}

export default App;
