import { Routes,Route } from "react-router-dom";
import Gallary from "../Gallary/Gallary";
import PhotoDetails from "../PhotoDetails/PhotoDetails";

// CustomRoutes component helps to link component so you can travel from one link to another
// It gives Link element which is <a> tag but it helps in building single page
function CustomRoutes () {
    return (
        <Routes>
            <Route path='/' element={<Gallary/>}/>
            <Route path='photo/:id' element={<PhotoDetails/>}/>
        </Routes>
    );
}

// making CustomRoutes accessible
export default CustomRoutes;