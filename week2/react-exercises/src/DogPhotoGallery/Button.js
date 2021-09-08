import React from 'react'

export const Button = ({getDogPhoto}) => {
    return (
        <div>
            <button onClick={getDogPhoto}>Get a dog!</button>
        </div>
    )
}
