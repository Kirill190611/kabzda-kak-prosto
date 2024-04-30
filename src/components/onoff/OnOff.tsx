import React, {memo} from 'react';

type OnOffProps = {
    on: boolean
    onClick: (on: boolean) => void
}

export const OnOff = memo(({
                               on,
                               onClick
                           }: OnOffProps) => {
    console.log("UncontrolledOnOff rendered")

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

    const onClicked = () => {
        onClick(true)
    }

    const offClicked = () => {
        onClick(false)
    }

    return (
        <div style={wrapperStyle}>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
});