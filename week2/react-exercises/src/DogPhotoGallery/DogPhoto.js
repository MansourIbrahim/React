import React from 'react'

export const DogPhoto = ({ dogPhoto }) => {
    return (
        <div>
            <img src={dogPhoto.message} alt="dog-photo" />
        </div>
    )
}
