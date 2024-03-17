import React from 'react';

type StarPropsType = {
    selected: boolean
    setValue: () => void
}
export const UncontrolledStar = ({selected, setValue}: StarPropsType) => {
    console.log("Star rendered")

    return <span onClick={() => {setValue()}}>{selected ? <b>Star </b> : "Star "}</span>

}
