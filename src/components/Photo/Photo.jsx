import { Link } from 'react-router-dom';
import './Photo.css'
function Photo ({image, id}) {
    return (
        <div className='photo'>
            <Link to={`photo/${id}`}>
                <img id="photo-image" src={image} />
            </Link>
            
        </div>
            
    );
}

export default Photo;