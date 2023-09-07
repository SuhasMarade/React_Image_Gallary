
import { Link } from 'react-router-dom'
import './App.css'
import CustomRoutes from './components/routes/CustomRoutes'

function App() {

  return (
    <div className='outer-gallary'>
      <h1 className='gallary-heading'>
        <Link to='/'>Gallary</Link>  
      </h1>
      <CustomRoutes/>
    </div>
  )
}

export default App
