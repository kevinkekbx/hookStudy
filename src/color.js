import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext({})
export const UPDATE_COLOR = 'UPDATE_COLOR'

const reduct = (state, action) => {
    switch(action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = props => {
    const [color, dispatch] = useReducer(reduct, 'blue')
    return (
        <ColorContext.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}