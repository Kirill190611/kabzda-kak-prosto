import React from "react";

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
export const AccordionTitle = ({title, setCollapsed, collapsed}: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => {setCollapsed(!collapsed)}}>{title}</h3>
    );
}