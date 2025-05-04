import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import General from './components/General';
import Users from './components/Users';
import Settings from './components/Settings';
import LogOut from './components/LogOut';

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "General", element: <General /> },
          { path: "Users", element: <Users /> },
          { path: "Settings", element: <Settings /> },
          { path: "LogOut", element: <LogOut /> },
        ],
      },
    ],
    {
      basename: "/task2-react", 
    }
  );
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
