import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ClockProps = {
    mode?: 'digital' | 'analog'
}

export type ClockViewPropsType = {
    date: Date
}

export const getToDigitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<ClockProps> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>{view}</div>
    )
}