import React from "react";
import {Star} from "./Star";

export const Rating = () => {
    console.log("Rating rendered")
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
}
