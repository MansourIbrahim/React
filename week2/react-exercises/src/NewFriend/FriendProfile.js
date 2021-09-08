import React from 'react'

export const FriendProfile = ({friend}) => {
    return (
        <ul>
           <li>The first name: {friend[0].name.first} </li> 
           <li>The last name: {friend[0].name.last}</li>
           <li>The address: {friend[0].location.street.number} {friend[0].location.street.name} {friend[0].location.state} {friend[0].location.country}</li>
           <li>The country: {friend[0].location.country}</li>
           <li>The email address: {friend[0].email}</li>
           <li>The phone number: {friend[0].phone}</li>  
        </ul>
    )
}
