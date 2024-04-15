import React, {useReducer} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";

type AccordionPropsType = {
    accordionTitle: string
}

export const UncontrolledAccordion = ({accordionTitle}: AccordionPropsType) => {
    console.log("UncontrolledAccordion rendered")

    // const [collapsed, setCollapsed] = useState(false);
    const [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            {/*<AccordionTitle title={accordionTitle}
                            setCollapsed={setCollapsed}
                            collapsed={collapsed}/>*/}
            <AccordionTitle title={accordionTitle}
                            onClick={() => {
                                dispatch({type: TOGGLE_CONSTANT})
                            }}/>
            {!state.collapsed && <UncontrolledAccordionBody/>}
        </div>
    );
}
