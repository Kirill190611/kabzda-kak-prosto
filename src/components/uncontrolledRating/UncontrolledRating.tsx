import React, {useState} from 'react';
import {UncontrolledStar} from "./UncontrolledStar";
import {RatingValueType} from "../rating/Rating";

type UncontrolledRatingProps = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UncontrolledRating = ({
                                       defaultValue,
                                       onChange
                                   }: UncontrolledRatingProps) => {
    console.log("UncontrolledRating rendered")

    const [value, setValue] = useState(defaultValue ? defaultValue : 0);

    return (
        <div>
            <UncontrolledStar selected={value > 0}
                              setValue={() => {
                                  setValue(1); onChange(1);
                              }}/>
            <UncontrolledStar selected={value > 1}
                              setValue={() => {
                                  setValue(2); onChange(2);
                              }}/>
            <UncontrolledStar selected={value > 2}
                              setValue={() => {
                                  setValue(3); onChange(3);
                              }}/>
            <UncontrolledStar selected={value > 3}
                              setValue={() => {
                                  setValue(4); onChange(4);
                              }}/>
            <UncontrolledStar selected={value > 4}
                              setValue={() => {
                                  setValue(5); onChange(5);
                              }}/>
        </div>
    );
};