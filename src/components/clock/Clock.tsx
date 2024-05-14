import React, {useEffect, useState} from "react";

type ClockProps = {}

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

    const getToDigitsString = (num: number) => num < 10 ? "0" + num : num

    return (
        <div>
            <span>{getToDigitsString(date.getHours())}</span>
            :
            <span>{getToDigitsString(date.getMinutes())}</span>
            :
            <span>{getToDigitsString(date.getSeconds())}</span>
        </div>
    )
}