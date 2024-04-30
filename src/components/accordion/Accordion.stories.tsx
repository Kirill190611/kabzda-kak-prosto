import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import {useCallback, useState} from "react";

export default {
    title: "Accordion",
    component: Accordion,
};

const onChangeHandler = useCallback(() => action('onChange'), [])
const onClickCallBack = useCallback(() => action('some item were clicked'), [])

export const CollapsedAccordion = () => {
    return (
        <Accordion accordionTitle="Collapsed Accordion"
                   collapsed={true}
                   onClick={onChangeHandler}
                   items={[]}
                   onClickHandler={onClickCallBack}/>
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion accordionTitle="Opened Accordion"
                   collapsed={false}
                   onClick={() => {
                   }}
                   items={[{title: "Kirill", value: 1,}, {title: "Asya", value: 2,}, {title: "Nastya", value: 3,},]}
                   onClickHandler={onClickCallBack}/>
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Accordion accordionTitle="Accordion Demo"
                   collapsed={collapsed}
                   onClick={() => {
                       setCollapsed(!collapsed)
                   }}
                   items={[
                       {title: "Kirill", value: 1,},
                       {title: "Asya", value: 2,},
                       {title: "Nastya", value: 3,},
                   ]}
                   onClickHandler={(id) => alert(`User with ID ${id} should be happy!`)}/>
    )
}