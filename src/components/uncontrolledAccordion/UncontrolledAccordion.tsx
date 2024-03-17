import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

type AccordionPropsType = {
    accordionTitle: string
}
export const UncontrolledAccordion = ({accordionTitle}: AccordionPropsType) => {
    console.log("UncontrolledAccordion rendered")

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={accordionTitle}
                            setCollapsed={setCollapsed}
                            collapsed={collapsed}/>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    );
}

