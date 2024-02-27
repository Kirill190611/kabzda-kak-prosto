import React from 'react';

type StarPropsType = {
    selected: boolean
}
export const Star = ({selected}: StarPropsType) => {
    console.log("Star rendered")

    if (selected) {
        return (
            <span><b>Star </b></span>
        );
    } else {
        return (
            <span>Star </span>
        );
    }
}
