import React, {useState, useEffect} from 'react'
import { Joke } from './Joke';

export const RandomJoke = () => {
    const [joke, setJoke] = useState({});
    useEffect(()=>{
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then((response) => response.json())
            .then((data) =>{ setJoke(data)
            console.log(data)});
            
    },[])
    return (
        <div>
            <Joke joke={joke}/>
        </div>
    )
}
