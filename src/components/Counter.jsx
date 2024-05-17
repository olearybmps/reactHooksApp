import React, { useState, useEffect, useContext } from 'react';
import './Counter.css';
import CounterDisplay from './CounterDisplay';
import { ThemeContext } from './ThemeContext';

const Counter = () => {
    const initialCount = localStorage.getItem('count')
        ? parseInt(localStorage.getItem('count'))
        : 0;
    const [count, setCount] = useState(initialCount);
    const [resetCount, setResetCount] = useState(0);
    const [incrementValue, setIncrementValue] = useState(1);
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    const increment = () => {
        setCount(count + incrementValue);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const incrementByFive = () => {
        setCount(count + 5);
    };

    const decrementByFive = () => {
        setCount(count - 5);
    };

    const reset = () => {
        setCount(0);
        setResetCount((prevResetCount) => prevResetCount + 1);
    };

    return (
        <div className={`counter ${theme}`}>
            <h2>useState Counter</h2>
            <CounterDisplay
                count={count}
                resetCount={resetCount}
                incrementValue={incrementValue}
                setIncrementValue={setIncrementValue}
            />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementByFive}>+5</button>
            <button onClick={decrementByFive}>-5</button>
            <button onClick={reset}>Reset</button>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default Counter;
