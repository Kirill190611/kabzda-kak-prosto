import {Select} from "./Select";
import {useState} from "react";

export default  {
    title: "Select",
    component: Select,
};

export const SelectWithValue= () => {
    const [value, setValue] = useState('2')

    /*const onChangeHandler = (value: any) => {
        setValue(value)
    }*/

    return (
        <>
            <Select value={value}
                    onChange={setValue}
                    items={[
                        {value: "1", title: "Moscow",},
                        {value: "2", title: "Minsk",},
                        {value: "3", title: "Kaluga",},
                    ]}/>
        </>

    )
}

export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <>
            <Select onChange={setValue}
                    value={null}
                    items={[
                        {value: "1", title: "Moscow",},
                        {value: "2", title: "Minsk",},
                        {value: "3", title: "Kaluga",},
                    ]}/>
        </>

    )
}