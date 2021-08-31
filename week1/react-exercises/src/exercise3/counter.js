import React, { useState } from 'react';
import Count from './count';
import Button from './button';



const Counter = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <Count count={count} />
            <Button setCount={setCount} />
        </div>
    )
}

export default Counter;