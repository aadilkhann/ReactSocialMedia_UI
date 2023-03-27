import Login from './pages/login/Login';
import './App.css';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/Register",
      element: <Register/>,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

// 23:37

export default App;
