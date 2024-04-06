import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type ItemProps = {
    title: string
    value: any
}

type AccordionPropsType = {
    accordionTitle: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
    items: Array<ItemProps>
    onClickHandler: (value: any) => void
}

export const Accordion = ({
                              accordionTitle,
                              collapsed,
                              onClick,
                              items,
                              onClickHandler
                          }: AccordionPropsType) => {
    console.log("UncontrolledAccordion rendered")

    return (
        <div>
            <AccordionTitle title={accordionTitle}
                            onClick={onClick}
                            collapsed={collapsed}/>
            {!collapsed && <AccordionBody items={items} onClickHandler={onClickHandler}/>}
        </div>
    );
}

