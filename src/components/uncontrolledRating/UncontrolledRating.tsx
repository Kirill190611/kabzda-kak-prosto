import React, {useState} from 'react';
import {Star} from "../rating/Star";
import {UncontrolledStar} from "./UncontrolledStar";


export const UncontrolledRating = () => {
    console.log("UncontrolledRating rendered")

    const [value, setValue] = useState(0);

    return (
        <div>
            <UncontrolledStar selected={value > 0}/>
            <button onClick={() => (setValue(1))}>1</button>
            <UncontrolledStar selected={value > 1}/>
            <button onClick={() => (setValue(2))}>2</button>
            <UncontrolledStar selected={value > 2}/>
            <button onClick={() => (setValue(3))}>3</button>
            <UncontrolledStar selected={value > 3}/>
            <button onClick={() => (setValue(4))}>4</button>
            <UncontrolledStar selected={value > 4}/>
            <button onClick={() => (setValue(5))}>5</button>
        </div>
    );
};