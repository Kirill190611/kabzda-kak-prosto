import {useEffect, useState} from "react";
import {clearTimeout} from "node:timers";

export default {
    title: "useEffect demo",
}

export const Example1 = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log("Simple Example");

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString();
        //side effects:
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = "User "
    })

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)");
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter]);

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
    );
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log("SetTimeoutExample");

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString();
        }, 1000)

        return () => {
            clearTimeout(timeoutId);
        }

    }, [counter]);

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
    );
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("SetIntervalExample");

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log("setInterval");
            setCounter((state: number) => state + 1);
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }

    }, []);

    return (
        <>
            Hello, counter: {counter}
        </>
    );
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("Component rendered with " + counter);

    useEffect(() => {

        console.log("Effect completed: " + counter)

        return () => {
            console.log("RESET EFFECT " + counter)
        }

    }, [counter]);

    const onIncrease = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            Hello, counter: {counter}
            <button onClick={onIncrease}>+</button>
        </>
    );
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("");

    console.log("Component rendered with " + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key);
        }

        window.addEventListener('keypress', handler);

        return () => {
            window.removeEventListener('keypress', handler);
        }

    }, [text]);

    return (
        <>
            Typed text: {text}
        </>
    );
}

export const SetTimeoutExample1 = () => {
    const [text, setText] = useState("");

    console.log("Component rendered with " + text);

    useEffect(() => {

        const setTimeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed');
        }, 3000)

        return () => {
            clearTimeout(setTimeoutId);
        }

    }, [text]);

    return (
        <>
            Typed text: {text}
        </>
    );
}