import React from "react";

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed?: (collapsed: boolean) => void
    onClick: () => void
}
export const AccordionTitle = ({
                                   title,
                                   setCollapsed,
                                   collapsed,
                                   onClick
                               }: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")

    /*const onCollapsed = () => {
        setCollapsed(!collapsed)
    }*/

    return (
        <h3 onClick={onClick}>{title}</h3>
    );
}