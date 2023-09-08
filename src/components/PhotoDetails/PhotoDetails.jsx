import { useEffect, useState } from 'react';
import './PhotoDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios';
function PhotoDetails () {
    const {id} = useParams();
    // photo state variable to store data of image from in object
    const [photo, setPhoto] = useState({});

    async function downloadPhoto() {

        // get id from useParams() to fetch data of single image
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log(response.data);

        // set object of image data to photo state variable
        setPhoto({
            id: response.data.photo.id,
            title: response.data.photo.title,
            info: response.data.photo.description,
            image: response.data.photo.url
        })
       
    }
    console.log(photo);
// Independent useEffect() it takes dowloadPhoto() function to fetch data of single image
    useEffect(() => {
        downloadPhoto()
    },[])
    // Result that PhotoDetails return
    return (
        <div className='photo-datails-wrapper'>
            <div className='photo-details-image-wrapper'>
                <img id='detail-img' src={photo.image} />
            </div>
            <div className='image-info-wrapper'>
                <h1 className='image-heading'>{photo.title}</h1>
                <p className='image-info'>{photo.info}</p>
            </div>
        </div>
    );
}

// making photoDetails component to accessible
export default PhotoDetails;