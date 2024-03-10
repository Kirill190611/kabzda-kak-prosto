import React from 'react';

type UncontrolledStarPropsType = {
    selected: boolean
}

export const UncontrolledStar = ({selected}: UncontrolledStarPropsType) => {
    console.log("UncontrolledStar rendered")

    if (selected) {
        return (
            <span><b>Star </b></span>
        );
    } else {
        return (
            <span>Star </span>
        );
    }
};