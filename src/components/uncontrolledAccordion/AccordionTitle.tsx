import React from "react";

type AccordionTitlePropsType = {
    title: string
    setCollapsed?: (collapsed: boolean) => void
    onClick: () => void
}
export const AccordionTitle = ({
                                   title,
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