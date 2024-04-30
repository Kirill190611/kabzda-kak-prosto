import React, {useCallback, useMemo, useState} from "react";
import {BooksProps, UsersProps} from "./ReactMemo.stories";

export default {
    title: "useMemo",
}

export const DifficultCounting = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return (
        <>
            <input value={a}
                   onChange={(event) => setA(Number(event.currentTarget.value))}/>
            <input value={b}
                   onChange={(event) => setB(+event.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>

        </>
    )
}

const UsersSecret = (props: UsersProps) => {
    console.log("USERS SECRET")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya",]);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addNewUser = () => {
        setUsers([
            ...users, "Sveta " + new Date().getTime()
        ])
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addNewUser()}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "TS", "JS", "CSS",]);

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [books])

    /*const memoizedAddBook = useMemo(() => {
        return () => {
            setBooks([
                ...books, "Angular " + new Date().getTime()
            ])
        }
    }, [books]);*/

    const memoizedAddBook2 = useCallback(() => {
            setBooks([
                ...books, "Angular " + new Date().getTime()
            ])
    }, [books]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books books={newArray}
                   AddBook={memoizedAddBook2}/>
        </>
    )
}

const BooksSecret = (props: BooksProps) => {
    console.log("BOOKS SECRET")
    return <div>
        <button onClick={() => props.AddBook()}>add book</button>
        {
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }
    </div>
}

const Books = React.memo(BooksSecret);