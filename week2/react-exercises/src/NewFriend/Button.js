import React from 'react'
//import { getFriend } from './Friend'

export const Button = ({getFriend}) => {
    return (
        <div>
        <button onClick={getFriend}>Get a friend!</button>
        </div>
    )
}
