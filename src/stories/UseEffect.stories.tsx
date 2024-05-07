import {useEffect, useState} from "react";

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

        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString();
        }, 1000)

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

        setInterval(() => {
            console.log("setInterval");
            setCounter((state: number) => state + 1);
        }, 1000)

    }, []);

    return (
        <>
            Hello, counter: {counter}
        </>
    );
}

//Todo: необходимо сделать часы