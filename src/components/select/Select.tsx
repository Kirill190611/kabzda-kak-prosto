// @flow
import * as React from 'react';
import {useState} from "react";

type ItemsSelectProps = {
    title: string
    value: any
}

type SelectProps = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemsSelectProps>
};

export const Select = ({
                           value,
                           onChange,
                           items
                       }: SelectProps) => {
    const [value, setValue] = useState("")


    return (
        <div>
            <div>{value}</div>

            {
                items.map((item, index) => <div key={index}>{item.title}</div>)
            }

        </div>
    );
};