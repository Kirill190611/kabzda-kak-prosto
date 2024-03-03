import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    accordionTitle: string
    collapsed: boolean
}
export const Accordion = ({accordionTitle, collapsed}: AccordionPropsType) => {
    console.log("Accordion rendered")
    return (
        <div>
            <AccordionTitle title={accordionTitle}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

