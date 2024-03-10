import React from 'react';

type StarPropsType = {
    selected: boolean
}
export const Star = ({selected}: StarPropsType) => {
    console.log("Star rendered")

    return selected ? <span><b>Star </b></span> : <span>Star </span>

    // if (selected) {
    //     return (
    //         <span><b>Star </b></span>
    //     );
    // } else {
    //     return (
    //         <span>Star </span>
    //     );
    // }
}
