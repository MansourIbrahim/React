import React, {useState} from 'react'
import { Button } from './Button';
import { DogPhoto } from './DogPhoto';

export const DogGallery = () => {
    const [dogPhotos, setDogPhotos] = useState([]);
    function getDogPhoto(){
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                setDogPhotos([...dogPhotos, data]);
                console.log(dogPhotos);
            })
            .catch(console.error())

    }
    return (
        <div>
             {dogPhotos.length === 0 ? (<div>Get your first dog by clicking the button!</div>) : 
             (dogPhotos.map((dogPhoto, index) => {
                return <DogPhoto key={index} dogPhoto={dogPhoto} />;
                })
             )}
            <Button getDogPhoto={getDogPhoto} />
        </div>
    )
}
