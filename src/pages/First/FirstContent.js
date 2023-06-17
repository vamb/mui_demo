import React, { createContext, useReducer } from 'react'
import FirstConstant from "./FirstConstant";

export const FirstContext = createContext({})

const initData = {

}

const reducer = (state, action) => {
  switch (action?.type) {
    case FirstConstant.UPDATE_DATA:
      return {...state, ...action.data}
    default:
      return state
  }
}

export const FirstContent = props => {
  const [ firstData, firstDispatch ] = useReducer(reducer, initData)
  return (
    <FirstContext.Provider value={{firstData, firstDispatch}}>
      {props.children}
    </FirstContext.Provider>
  )
}
