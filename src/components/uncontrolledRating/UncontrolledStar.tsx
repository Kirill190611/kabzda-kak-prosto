import React from 'react';

type UncontrolledStarPropsType = {
    selected: boolean
}

export const UncontrolledStar = ({selected}: UncontrolledStarPropsType) => {
    console.log("UncontrolledStar rendered")

    return selected ? <span><b>Star </b></span> : <span>Star </span>
};