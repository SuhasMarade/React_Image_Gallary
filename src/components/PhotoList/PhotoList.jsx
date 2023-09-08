import axios from 'axios';
import { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';
import "./PhotoList.css"
function PhotoList() {

    const [photoList, setPhotoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [offset, setOffset] = useState(20);
    console.log(offset)
    const [totalPhotos, setTotalPhotos] = useState(0);
    const [gallaryUrl,setGallaryUrl]= useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20`)

    async function downloadPhotos() {

        setIsLoading(true);      
        const response = await axios.get(gallaryUrl)
        
        console.log(response.data);

        setTotalPhotos(response.data.total_photos)

        const photoResult = response.data.photos;


        const photoListResult = photoResult.map((photo) => { 
            return {
                id: photo.id,
                image: photo.url
            }
        });
        if(offset>120){
            setOffset(120)
            setGallaryUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=120&limit=20`);
        }
        console.log(photoListResult)
        setPhotoList(photoListResult)
        setIsLoading(false);
    }

    useEffect(() => {
        downloadPhotos();
    },[gallaryUrl])
    
    
    return (
       <div className='photo-list-wrapper'>
         <div className='photo-wrapper'>
            {(isLoading) ? 'Loading...' : photoList.map((p) => <Photo key={p.id} id={p.id} image={p.image}/>)}
         </div>
         {(!isLoading) && <div className='controls' >
            <button  className='previous-btn' onClick={() =>{
                
                if(offset==(totalPhotos - (totalPhotos%20)))
                {setOffset(offset-20); setGallaryUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=100&limit=20`)}
                else{(offset>=20) && setOffset(offset-20)};
                setGallaryUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`)} }
                >Prev</button>

            <button  className='next-btn' onClick={() => {
                if(offset<=(totalPhotos - (totalPhotos%20)))
                {setOffset(offset+20)}; setGallaryUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`)}}>Next</button>

         </div>}
       </div>
    )

}

export default PhotoList;