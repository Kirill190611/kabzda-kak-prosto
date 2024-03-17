import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    accordionTitle: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}
export const Accordion = ({
                              accordionTitle,
                              collapsed,
                              onClick
                          }: AccordionPropsType) => {
    console.log("UncontrolledAccordion rendered")
    return (
        <div>
            <AccordionTitle title={accordionTitle}
                            onClick={onClick}
                            collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

