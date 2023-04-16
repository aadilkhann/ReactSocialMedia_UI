import { useContext } from "react"
import "./Login.scss"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin=()=>{
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, recusandae amet odio adipisci consectetur corrupti ea repellat magnam facere illum, similique excepturi aperiam placeat enim velit error aliquid obcaecati animi!</p>
          <span>Don't Have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form >
            <input type="text" placeholder="Unsrname"/>
            <input type="password" placeholder="Password"/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
