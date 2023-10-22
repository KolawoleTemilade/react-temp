import React from 'react';
import useCustomCounter from '../UseCustomCounter';
import { Link } from 'react-router-dom';
import './home.css'

const CustomHookPage = () => {
  const { count, increment, decrement, reset, setValue } = useCustomCounter();

  return (
    <>
      <div className='errorbtn1'>
        <Link to="*">
          <button>
            About
          </button>
        </Link>
        <h1>Custom Hook Page</h1>
        
          <Link to="/triggererror" className='errorbtn'> 
          <p>Test Error Boundary</p>
          </Link>
      </div>
      <div className='homepage'>
        <p className='count'>Count: {count}</p>
        <div className='home'>
          <button className='btn' onClick={increment}>Increment +1</button>
          <button className='btn3' onClick={() => setValue(10)}>Set to 10</button>
          <button className='btn' onClick={decrement}>Decrement -1</button>
          <button className='btn2' onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default CustomHookPage;
