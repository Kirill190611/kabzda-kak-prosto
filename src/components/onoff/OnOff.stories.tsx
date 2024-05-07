import {OnOff} from "./OnOff";
import {useCallback, useState} from "react";
import {action} from "@storybook/addon-actions";

export default  {
    title: "OnOff",
    component: OnOff,
};

const callback = action("on or off were clicked");

export const OnMode = () => {
    return (
        <OnOff on={true}
               onClick={callback}/>
    )
};

export const OffMode = () => {
    return (
        <OnOff on={false}
               onClick={callback}/>
    )
};

export const ModeChanging = () => {
    const [on, setOn] = useState(false)

    return (
        <OnOff on={on}
               onClick={setOn}/>
    )
};