import React, { useState, createContext, useContext } from 'react'

// 创建上下文
const CountContext = createContext()

function Counter() {
    // 获取上下文
    let count = useContext(CountContext)
    return (
    <h2>{count}</h2>
    )
}

function Demo05() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>
            <CountContext.Provider value={count}>
                <Counter></Counter>
            </CountContext.Provider>
        </div>
    )

}

export default Demo05;