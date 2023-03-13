import { useState } from "react";

export const IfCounter = () => {
    const [count, setCount] = useState<number>(2);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const renderMessage = () => {
        if (count > 10 && count < 20){
            return <p>Stop!</p>
        } else if (count >= 20 && count < 30){
            return <p>Please stop!</p>
        } else if (count >= 30 && count < 50){
            return <p>Please stop now at least?!</p>
        } else if (count >= 50){
            return <p>I don't care anymore...</p>
        }else if( count< 0){
            return <p>Sure, just keep going in minus....</p>
        } else {
            return <p> :D </p>;
        }
    }

    return (
        <div>
            <h2> Counter: {count}</h2>
            {renderMessage()}
             <button onClick={handleDecrement}>- here</button>
             <button onClick={handleIncrement}>+ here</button>
           
        </div>
    )
}