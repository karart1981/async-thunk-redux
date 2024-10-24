import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './pages/Layout/index.jsx'
import { UserList } from './pages/UserList/index.jsx'
import { AddUser } from './pages/AddUser/index.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <UserList/>
      },
      {
        path: '/add-user',
        element: <AddUser/>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}> 
        <RouterProvider router={router}/>
     </Provider> 
  </StrictMode>,
)
