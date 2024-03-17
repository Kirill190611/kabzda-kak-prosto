import React from "react";

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
export const AccordionTitle = ({
                                   title,
                                   setCollapsed,
                                   collapsed
                               }: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")

    const onCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <h3 onClick={onCollapsed}>{title}</h3>
    );
}