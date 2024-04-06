import React from "react";
import {ItemProps} from "./Accordion";

type AccordionBodyProps = {
    items: ItemProps[]
    onClickHandler: (value: any) => void
}
export const AccordionBody = ({
                                  items,
                                  onClickHandler
                              }: AccordionBodyProps) => {
    console.log("UncontrolledAccordionBody rendering")
    return (
        <ul>

            {
                items.map((item, index) => <li key={index} onClick={() => {
                    onClickHandler(item.value)
                }}>{item.title}</li>)
            }

        </ul>
    );
}