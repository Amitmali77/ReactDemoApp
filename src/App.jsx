
import { RouterProvider } from 'react-router-dom';
import routes from './route'
import './App.css'

function App() {

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
