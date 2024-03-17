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

    const onCollapsedHandler = () => {
        onClick(!collapsed)
    }

    return (
        <h3 onClick={onCollapsedHandler}>{title}</h3>
    );
}