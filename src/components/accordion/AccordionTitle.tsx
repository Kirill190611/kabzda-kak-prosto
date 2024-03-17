import React from "react";

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}
export const AccordionTitle = ({
                                   title,
                                   onClick,
                                   collapsed
                               }: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => {onClick(!collapsed)}}>{title}</h3>
    );
}