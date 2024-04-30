import React, {memo} from 'react';
import {RatingValueType} from "./Rating";

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}
export const Star = memo(({
                              selected,
                              onClick,
                              value
                          }: StarPropsType) => {
    console.log("Star rendered")

    const onClicked = () => {
        onClick(value)
    }

    return <span onClick={onClicked}>{selected ? <b>Star </b> : "Star "}</span>

})
