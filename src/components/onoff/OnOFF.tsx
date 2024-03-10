import React, {useState} from 'react';

type OnOffProps = {
    // on: boolean
}

export const OnOff = (props: OnOffProps) => {
    console.log("OnOff rendered")

    const [on, setOn] = useState(false) //hook useState with initial value "false"

    console.log("on: ", on);

    const wrapperStyle = {
        display: "flex",
        width: "150px",
        alignItems: "center",
        justifyContent: "space-between",
    }
    const onStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: on ? "green" : "red"
    };

    return (
        <div style={wrapperStyle}>
            <div style={onStyle} onClick={() => {setOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};