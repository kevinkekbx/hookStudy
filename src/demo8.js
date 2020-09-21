import React, { useState, useMemo } from 'react';

function Demo8() {
    const [studentA, setStudentA] = useState('学生A在学习状态')
    const [StudentB, setStudentB] = useState('学生B在学习状态')

    return (
        <div>
            <button onClick={() => { setStudentA(new Date().getTime()) }}>学生A</button>
            <button onClick={() => { setStudentB(new Date().getTime() + '学生B向我们走来') }}>学生B</button>
            <ChildComponent name={studentA}>{StudentB}</ChildComponent>
        </div>
    )
}

function ChildComponent({name, children}) {
    function changeStudentA() {
        console.log('他来了')
        return name+',学生A向我们走来'
    }

    // useMemo 解决反复执行的问题，name发生变化才执行, useEffect一样
    const actionStudentA = useMemo(() => changeStudentA(name), [name]);
    return (
        <>
            <div>{actionStudentA}</div>
            <div>{children}</div>
        </>
    )
}

export default Demo8