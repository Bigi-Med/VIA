import './Navbar.css'
function Navbar (){
    return (
        <div className="NavBar">
            <div className='logo'>
                <img  className = 'logoImg' src ='via-background.png'></img>
                <h1 className='companyName'>VentureInAi</h1>
            </div>
            <div className='NavigationButtons'>
                <div className='button'>ABOUT</div>
                <div className='button'>Services</div>
                <div className='button'>Blog</div>
                <div className='button'>Billing</div>
                <div className='button'>Contact us</div>
            </div>
        </div>
    )
}
export default Navbar 