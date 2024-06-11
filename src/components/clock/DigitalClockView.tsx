import React from "react";
import {ClockViewPropsType, getToDigitsString} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <>
            <span>{getToDigitsString(date.getHours())}</span>
            :
            <span>{getToDigitsString(date.getMinutes())}</span>
            :
            <span>{getToDigitsString(date.getSeconds())}</span>
        </>
    );
}