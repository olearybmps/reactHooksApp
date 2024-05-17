// CounterReducer.jsx
import React, { useReducer, useEffect, useContext } from 'react';
import './Counter.css';
import CounterDisplayReducer from './CounterDisplayReducer';
import { ThemeContext } from './ThemeContext';

const initialState = {
    count: localStorage.getItem('countReducer')
        ? parseInt(localStorage.getItem('countReducer'))
        : 0,
    resetCount: 0,
    incrementValue: 1,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + state.incrementValue };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'INCREMENT_BY_FIVE':
            return { ...state, count: state.count + 5 };
        case 'DECREMENT_BY_FIVE':
            return { ...state, count: state.count - 5 };
        case 'RESET':
            return { ...state, count: 0, resetCount: state.resetCount + 1 };
        case 'SET_INCREMENT_VALUE':
            return { ...state, incrementValue: action.payload };
        default:
            return state;
    }
};

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        localStorage.setItem('countReducer', state.count);
    }, [state.count]);

    return (
        <div className={`counter ${theme}`}>
            <h2>useReducer Counter</h2>
            <CounterDisplayReducer
                count={state.count}
                resetCount={state.resetCount}
                incrementValue={state.incrementValue}
                setIncrementValue={(value) =>
                    dispatch({ type: 'SET_INCREMENT_VALUE', payload: value })
                }
            />
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: 'INCREMENT_BY_FIVE' })}>
                +5
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT_BY_FIVE' })}>
                -5
            </button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default CounterReducer;
