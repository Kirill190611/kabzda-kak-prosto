import React, {useState} from 'react';

type OnOffProps = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = ({
                                      onChange,
                                      defaultOn
                                  }: OnOffProps) => {
    console.log("UncontrolledOnOff rendered")

    const [on, setOn] = useState(defaultOn ? defaultOn : false) //hook useState with initial value "false"

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

    const onClicked = () => {
        setOn(true)
        onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        onChange(false)
    }

    return (
        <div style={wrapperStyle}>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};