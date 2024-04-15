import React, {useState} from "react";

export default {
    title: "React.memo demo",
}

type NewMessageCounterProps = {
    count: number
}
const NewMessageCounter = (props: NewMessageCounterProps) => {
    return <div>{props.count}</div>
}

type UsersProps = {
    users: Array<string>
}
const UsersSecret = (props: UsersProps) => {
    console.log("USERS")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(UsersSecret);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["A", "S", "D", "F",]);

    const addUser = () => {
        setUsers( [
            ...users, "Sveta" + new Date().getTime()
        ])
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}

//todo: обернуть все компоненты в React.memo