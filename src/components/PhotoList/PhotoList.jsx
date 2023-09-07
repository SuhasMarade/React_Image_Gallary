import axios from 'axios';
import { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';
import "./PhotoList.css"
function PhotoList() {

    const [photoList, setPhotoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function downloadPhotos() {

        setIsLoading(true);      
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20')
        
        console.log(response.data);

        const photoResult = response.data.photos;


        const photoListResult = photoResult.map((photo) => { 
            return {
                id: photo.id,
                image: photo.url
            }
        });
        console.log(photoListResult)
        setPhotoList(photoListResult)
        setIsLoading(false);
    }

    useEffect(() => {
        downloadPhotos();
    },[])
    return (
       <div className='photo-list-wrapper'>
         <div className='photo-wrapper'>
            {(isLoading) ? 'Loading...' : photoList.map((p) => <Photo key={p.id} id={p.id} image={p.image}/>)}
         </div>
       </div>
    )

}

export default PhotoList;