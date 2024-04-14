import React, {useReducer, useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

type AccordionPropsType = {
    accordionTitle: string
}

type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state;
        default:
            throw new Error("Incorrect action type")
    }
    /*if (action.type === TOGGLE_CONSTANT) {
        return !state
    }
    return state;*/
}
export const UncontrolledAccordion = ({accordionTitle}: AccordionPropsType) => {
    console.log("UncontrolledAccordion rendered")

    // const [collapsed, setCollapsed] = useState(false);
    const [collapsed, dispatch] = useReducer(reducer, false);

    return (
        <div>
            {/*<AccordionTitle title={accordionTitle}
                            setCollapsed={setCollapsed}
                            collapsed={collapsed}/>*/}
            <AccordionTitle title={accordionTitle}
                            onClick={() => {
                                dispatch({type: TOGGLE_CONSTANT})
                            }}
                            collapsed={collapsed}/>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    );
}

//todo: start 16v from 28:10

