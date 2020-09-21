import React, {useState} from 'react'

function Demo2() {
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('男')
    const [wrok, setWork] = useState('架构师')
    return (
        <div>
            <p>aaa 今年: {age} 岁</p>
            <p>性别 {sex} </p>
            <p>职业: {wrok} </p>
        </div>
    )
}
 
export default Demo2;