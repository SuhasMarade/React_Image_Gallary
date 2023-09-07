import { Routes,Route } from "react-router-dom";
import Gallary from "../Gallary/Gallary";
import PhotoDetails from "../PhotoDetails/PhotoDetails";

function CustomRoutes () {
    return (
        <Routes>
            <Route path='/' element={<Gallary/>}/>
            <Route path='photo/:id' element={<PhotoDetails/>}/>
        </Routes>
    );
}

export default CustomRoutes;