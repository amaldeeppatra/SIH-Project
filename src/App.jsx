import './App.css'
import './index.css'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import Dashboard from './pages/dashboard/Dashboard'


const App=()=>{
  return(
      <>
      <Outlet />
      </>
     
  )
}

const appRouter=createBrowserRouter(
  [
      {
          path:"/",
          element:<App />,
          children:[
              {
                path:"/",
                element:[<Login/>]
              },
              {
                path:"/signup",
                element:[<Signup/>]
              },
              {
                path:"/dashboard",
                element:[<Dashboard/>]
              }
          ]
      }
  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);