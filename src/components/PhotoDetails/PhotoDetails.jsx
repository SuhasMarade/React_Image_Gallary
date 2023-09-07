import { useEffect, useState } from 'react';
import './PhotoDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios';
function PhotoDetails () {
    const {id} = useParams();
    const [photo, setPhoto] = useState({});

    async function downloadPhoto() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log(response.data);

        setPhoto({
            id: response.data.photo.id,
            title: response.data.photo.title,
            info: response.data.photo.description,
            image: response.data.photo.url
        })
       
    }
    console.log(photo);

    useEffect(() => {
        downloadPhoto()
    },[])
    return (
        <div className='photo-datails-wrapper'>
            <div className='photo-details-image-wrapper'>
                <img src={photo.image} />
            </div>
            <div className='image-info-wrapper'>
                <h1 className='image-heading'>{photo.title}</h1>
                <p className='image-info'>{photo.info}</p>
            </div>
        </div>
    );
}

export default PhotoDetails;