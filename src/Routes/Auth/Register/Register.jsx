import "./Register.scss"
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className="form__wrapper">
            <form className="auth-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="email" placeholder="Email" />
                <input type="url" placeholder="Avatar Url" />
                <button>Register</button>
                <ul>
                     <li><Link to="/auth">Log in</Link></li>
                 </ul>
            </form>
                
    </div>
  )
}

export default Register