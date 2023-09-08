import axios from 'axios';
import { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';
import "./PhotoList.css"
function PhotoList() {

    // photoList state variable to  stores data fetched from API as Array
    const [photoList, setPhotoList] = useState([]);

    // just to confirm data loaded or not
    const [isLoading, setIsLoading] = useState(true);

    // offset state variable to store offset 
    const [offset, setOffset] = useState(20);
    console.log(offset)

    // totalPhotos state variable to store total number of photos
    const [totalPhotos, setTotalPhotos] = useState(0);

    // It gallaryUrl state variable to store api url
    const [gallaryUrl,setGallaryUrl]= useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20`)


    async function downloadPhotos() {

        setIsLoading(true);  
            // fetching data from api
        const response = await axios.get(gallaryUrl)
        
        console.log(response.data);

       // setting totalPhtos value 
        setTotalPhotos(response.data.total_photos)

        // Storing data of photos from response 
        // It gives data of 20 photos in Array 
        const photoResult = response.data.photos;


        // iterating on photoResult Array using map to get id and image url in a photoListResult array
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

        // setting  photoList array to photoListResult array data
        setPhotoList(photoListResult)

        // data is loaded then set loading is false
        setIsLoading(false);
    }

    // useEffect hook refresh whole page if any change occurs in gallaryUrl value
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


                // only basic logic just if offset >=20 then reduce it by (offset - 20) 

                if(offset==(totalPhotos - (totalPhotos%20)))
                {setOffset(offset-20); setGallaryUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=100&limit=20`)}
                else{(offset>=20) && setOffset(offset-20)};
                setGallaryUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`)} }
                >Prev</button>

            <button  className='next-btn' onClick={() => {

           // if offset is less than or equal to (totalPhotos - (totalPhotos%20)) then increase it by  (offset + 20)

                if(offset<=(totalPhotos - (totalPhotos%20)))
                {setOffset(offset+20)}; setGallaryUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`)}}>Next</button>

         </div>}
       </div>
    )

}

export default PhotoList;