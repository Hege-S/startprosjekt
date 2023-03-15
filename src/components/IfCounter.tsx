import { useState } from "react";

export const IfCounter = () => {

    const initialCount = 0
    const [count, setCount] = useState<number>(initialCount);

   /*  const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }; */

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 2);
    };

    const renderMessage = () => {
        if (count > 10 && count < 20){
            return <p>Stop! 🐯 {count} is a high number...</p>
        } else if (count >= 20 && count < 30){
            return <p>Please stop! 🙈</p>
        } else if (count >= 30 && count < 50){
            return <p>Please stop now at least?! 🙉 {count} is too high!</p>
        } else if (count >= 50){
            return <p>I don't care anymore... 🦎 </p>
        }else if( count< 0){
            return <p>Sure, just keep going in minus.... 🐸 </p>
        } else {
            return <p> 🐝 </p>;
        }
    }
    const low = (count < 0)? count : '-'
    const high =(count>=0)? count : '+'

    return (
        <div>
            <h2> Counter: {count}</h2>
            {/* two different ways of setting the onClick event */}
             <button onClick={handleDecrement}> less ({low})  </button>
             <button onClick={()=> setCount(prevCount => prevCount + 1)}> more  ({high}) </button>
                {renderMessage()}
                <button onClick= {() => setCount(initialCount)}>reset</button>
        </div>
    )
}