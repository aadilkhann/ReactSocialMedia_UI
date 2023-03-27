import { Link } from "react-router-dom"
import "./Register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Sociify</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, recusandae amet odio adipisci consectetur corrupti ea repellat magnam facere illum, similique excepturi aperiam placeat enim velit error aliquid obcaecati animi!</p>
          <span>Do Have an account?</span>
          <Link to="/Login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form >
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="E-mail"/>
            <input type="password" placeholder="Password"/>

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
