import React from "react";

type AccordionTitlePropsType = {
    title: string
}
export const AccordionTitle = ({title}: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <h3>{title}</h3>
    );
}