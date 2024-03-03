import React from 'react';
import {SwitcherOn} from "./SwitcherOn";
import {SwitcherOff} from "./SwitcherOff";

type OnOffProps = {
    switcher: boolean
}
export const OnOff = ({switcher}: OnOffProps) => {
    return (
        <div>
            { switcher ? <SwitcherOn/> : <SwitcherOff/> }
        </div>
    );
};