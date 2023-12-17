import { useState } from 'react'
import './Navbar.css'
function Navbar (){
    
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="NavBar">
        
            <div className="bar">
            <div className='logo'>
                <img  className = 'logoImg' src ='via-background.png'></img>
                <h1 className='companyName'>VentureInAi</h1>
            </div>
            <div className={`NavigationButtons ${menuOpen ? 'open' : ''}`}>
                <span className='button'>ABOUT</span>
                <span className='button'>Services</span>
                <span className='button'>Blog</span>
                <span className='button'>Billing</span>
                <span className='button'>Contact us</span>
            </div>
            <div className='hamburger' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
            <div className="slogan" >
                 <span>Enhance your business with <br></br>the power of AI</span>
            </div>
        
        </div>
    )
}
export default Navbar 