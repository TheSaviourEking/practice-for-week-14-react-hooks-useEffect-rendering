import { useEffect, useState } from "react"

export default function Main() {
    const [toggleOne, setToggleOne] = useState(false);
    const [toggleTwo, setToggleTwo] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('UseEffect1 Ran');
    }, []);

    useEffect(() => {
        console.log('UseEffect2 Ran');
        if (toggleTwo) {
            console.log('toggleTwo is set to true so this code runs')
        };
    }, [toggleTwo]);

    useEffect(() => {
        const myInterval = setInterval(() => {
            console.log(`UseEffect3 with interval number ${count} is running`);
        }, 10000);

        return () => {
            console.log(`UserEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`);
            clearInterval(myInterval);
        }
    }, [count]);

    return (
        <div>
            {console.log('rendered or re-rendered')}
            <h1>Main Component</h1>
            <button onClick={() => setToggleOne(() => toggleOne === false ? true : false)}>ToggleOne</button>
            <button onClick={() => setToggleTwo(() => toggleTwo === false ? true : false)}>ToggleTwo</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Count</button>
        </div>
    )
}
