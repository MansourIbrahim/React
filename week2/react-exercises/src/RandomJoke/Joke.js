import React from 'react'

export const Joke = ({joke}) => {
    return (
      <>
        <p>{joke.punchline}</p>
        <p>{joke.setup}</p>
      </>
    )
}
