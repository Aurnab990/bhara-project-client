
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Pages/Routes/Routes.jsx'
import Authprovider from './AuthProvider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <Authprovider>
    <RouterProvider router={router}></RouterProvider>
  </Authprovider>
)
