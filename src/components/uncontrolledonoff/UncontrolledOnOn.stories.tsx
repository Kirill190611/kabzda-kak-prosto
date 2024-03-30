import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default  {
    title: "Uncontrolled OnOff",
    component: UncontrolledOnOff,
}

const callback = action("on or off were clicked")

export const OnMode = () => {
    return (
        <UncontrolledOnOff defaultOn={true}
                           onChange={callback}/>
    )
}

export const OffMode = () => {
    return (
        <UncontrolledOnOff defaultOn={false}
                           onChange={callback}/>
    )
}

export const DefaultInputValue = () => {
    return (
        <input defaultValue={"yo"}/>
    )
}