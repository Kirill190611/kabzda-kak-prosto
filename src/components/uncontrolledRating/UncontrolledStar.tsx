import React from 'react';

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

export const UncontrolledStar = ({selected, setValue}: StarPropsType) => {
    console.log("Star rendered")

    const onSetValue = () => {
        setValue()
    }

    return <span onClick={onSetValue}>{selected ? <b>Star </b> : "Star "}</span>

}
