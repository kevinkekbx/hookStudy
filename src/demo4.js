import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log('useEffect 。 index')
        // 解绑生命周期
        return () => {
            console.log(' 88 index')
        }
    }, [])
    return <h3>Hello hook</h3>
}

function List() {
    useEffect(() => {
        console.log('useEffect List')
    })
    return <h2>List</h2>
}

function Demo4() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`useEffect...You clicked ${count} times`)
        return () => {
            console.log('==================')
        }
    }, [count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list/" component={List}></Route>
            </Router>
        </div>
    )
}

export default Demo4