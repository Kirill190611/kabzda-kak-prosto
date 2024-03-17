import React from 'react';
import {RatingValueType} from "./Rating";

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}
export const Star = ({
                         selected,
                         onClick,
                         value
                     }: StarPropsType) => {
    console.log("Star rendered")

    return <span onClick={() => onClick(value)}>{selected ? <b>Star </b> : "Star "}</span>

}
