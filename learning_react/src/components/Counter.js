import React, { useState } from 'react';
// import './Counter.css';
import styles from './Counter.module.css';

// the code is better than CounterClass, it's functional component.
const Counter = (props) => {
    const [count, changeCount] = useState(0); // value by default to init the count will be 0.

    const increase = (numberTo) => changeCount(count + numberTo)

    const decrease = (numberTo) => changeCount(count - numberTo)

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => increase(props.numberToIncrease)} className={styles.button}>Increase</button>
            <button onClick={() => decrease(3)} className={styles.button}>Decrease</button>
        </div>
    )

}

export default Counter;