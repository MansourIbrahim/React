import React, {useState} from 'react'
import { FriendProfile } from './FriendProfile'
import { Button } from './Button'

export const Friend =  () => {
    const [friend, setFriend] =  useState({});
    function getFriend(){
        fetch('https://www.randomuser.me/api?results=1')
            .then((response) => response.json())
            .then((data) => {setFriend(data.results)
                console.log(data);})
            .catch(console.error())

    }
   
    
        return (
        <div>
            <Button getFriend={getFriend} />
            {Object.keys(friend).length !== 0 && <FriendProfile friend={friend}/>}
        </div>
        )
 
}
