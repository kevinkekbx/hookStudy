import React, { useEffect, useRef, useState } from 'react';

function Demo9() {
    const inputEle = useRef(null)

    const onButtonClick = () => {
        inputEle.current.value = 'hello world'
        console.log(inputEle)
    }

    const [text, setText] = useState('Test')
    const textRef = useRef();
    useEffect(() => {
        textRef.current = text
        console.log('textRef.current', textRef.current)
    })
    
    return (
        <>
        <input ref={inputEle} type="text"></input>
        <button onClick={onButtonClick}>show text</button>
        <input value={text} onChange={(e) => {setText(e.target.value)}}></input>
        </>
    )
}

export default Demo9