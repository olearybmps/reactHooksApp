import React, { useRef, useEffect } from 'react';

const CounterDisplay = ({
    count,
    resetCount,
    incrementValue,
    setIncrementValue,
}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleIncrementValueChange = (e) => {
        setIncrementValue(parseInt(e.target.value));
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <h1>Reset Counter: {resetCount}</h1>
            <input
                type="number"
                ref={inputRef}
                value={incrementValue}
                onChange={handleIncrementValueChange}
            />
        </div>
    );
};

export default CounterDisplay;
