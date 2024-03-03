import React from "react";
import {Star} from "./Star";

type RatingPropsType = {
    value: number
}
export const Rating = ({value}: RatingPropsType) => {
    console.log("Rating rendered")

    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    );
}
