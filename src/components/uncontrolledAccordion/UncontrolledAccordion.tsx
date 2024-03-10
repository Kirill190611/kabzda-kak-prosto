import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

type AccordionPropsType = {
    accordionTitle: string
}
export const UncontrolledAccordion = ({accordionTitle}: AccordionPropsType) => {
    console.log("UncontrolledAccordion rendered")

    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle title={accordionTitle}/>
            <button onClick={() => {setCollapsed(false)}}>Open</button>
            <button onClick={() => {setCollapsed(true);}}>Close</button>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    );
}

