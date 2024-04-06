import {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'input',
};

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    return (
        <>
            <input onChange={onChange}/> - {value}
        </>
    )
}

export const GetValueOfUncontrolledInputByBtnPressThroughGetElement = () => {
    const [value, setValue] = useState("")
    const onClick = () => {
        const el = document.getElementById("inputId") as HTMLInputElement;
        setValue(el.value);
    }

    return (
        <>
            <input id={"inputId"}/>
            <button onClick={onClick}>Save
            </button>
            - actual value: {value}
        </>
    )
}

export const GetValueOfUncontrolledInputByBtnPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onSave = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={onSave}>Save</button>
            - actual value: {value}
        </>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>

export const ControlledInput = () => {
    const [value, setValue] = useState("")

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return (
        <>
            <input value={value}
                   onChange={onChangeHandler}/>
        </>
    )
}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState(true);
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.checked)
    }

    return (
        <>
            <input type="checkbox"
                   checked={value}
                   onChange={onChangeHandler}/>
        </>
    )
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.currentTarget.value)
    }

    return (
        <>
            <select value={value}
                    onChange={onChangeHandler}>
                <option>None</option>
                <option value={"1"}>Moscow</option>
                <option value={"2"}>Minsk</option>
                <option value={"3"}>Kiev</option>
            </select>
        </>
    )
}