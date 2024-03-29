import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import {useState} from "react";

export default  {
    title: "Accordion",
    component: Accordion,
};

/*type Story = StoryObj<typeof Accordion>

export const FirstStory: Story = {
    args: {
        accordionTitle: "hello",
        collapsed: true,
    },
}*/

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return (
        <Accordion accordionTitle="Collapsed Accordion"
                   collapsed={true}
                   onClick={onChangeHandler}/>
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion accordionTitle="Opened Accordion"
                   collapsed={false}
                   onClick={() => {}}/>
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Accordion accordionTitle="Accordion Demo"
                   collapsed={collapsed}
                   onClick={() => {
                       setCollapsed(!collapsed)
                   }}/>
    )
}