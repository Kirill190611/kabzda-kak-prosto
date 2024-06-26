import {useState} from "react";

export default {
    title: 'useState demo',
}

function generateData() {
    //difficult couting
    return 213213211244;
}

export const Example1 = () => {
    console.log("Example1");

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </>
    )
}

export const Example2 = () => {
    console.log("Example2");

    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => state + 1;

    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </>
    )
}