import React, { useState, useEffect, useCallback } from 'react';

// 自定义hook函数, 必须以use开头
function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    // useCallback 缓存方法
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return size
}

// 使用上面自定义的函数
function Demo9() {
    const size = useWinSize()

    return (
        <div>
            页面SIZE: {size.width} * {size.height}
        </div>
    )
}

export default Demo9