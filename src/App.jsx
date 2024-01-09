import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import appRouter from './Routes/Routes';


function App() {

  const path = window.location.pathname

  return (
    <div className={`${path === "/contact" ? "bg-gradient-to-r from-rose-100 to-teal-100" : "bg-black"} mx-auto container pt-4 `} >
      <RouterProvider router={appRouter} />
    </div >
  )
}

export default App
