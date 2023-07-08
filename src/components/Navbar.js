import GetUsersButton from './GetUsersButton'
import logo from '../assets/logo.png'

const Navbar = ({setShowLoader,setUserData}) => {
    return (
        <nav className="navbar">
        <img src={logo} alt="Brand Logo" className="logo"/>
        <GetUsersButton btnText="Get Users" setShowLoader={setShowLoader} setUserData={setUserData}/>
        </nav>
    )
}
export default Navbar