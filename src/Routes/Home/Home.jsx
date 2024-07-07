import { Link } from 'react-router-dom'
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
        <ul className='home__links'>
            <li><Link to="/auth">Log in</Link></li>
            <li><Link to="/auth/register">Register</Link></li>
        </ul>
    </div>
  )
}

export default Home