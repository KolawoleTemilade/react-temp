import { useState } from 'react';

const useCustomCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const setValue = (value) => {
    setCount(value);
  };

  return { count, increment, decrement, reset, setValue };
};

export default useCustomCounter;
