import './About.css'

function About(){
    return (
        <div className='about-container'>
            <div className='about-title-container'>
                <h2 className='about-title'>About Us</h2>
            </div>
            <div className='about-content-container'>
                <div className='about-logo-container'>
                    <div className='about-logo'>
                        <img  className='about-logoImg' src ='via-background.png'></img>
                    </div>
                </div>
                <div className='about-divider'></div>
                <div className='about-text-container'>
                    <div className='about-text'>
                        <span>At VentureInAi, our mission is to harness the transformative power of AI for businesses of all sizes. We believe AI is set to become <br></br>as indispensable as the internet in the modern business landscape. <br></br>Whether you're a burgeoning entrepreneur or helm a large corporation, our expertise ensures you fully leverage AI's potential. <br></br>With VentureInAi, you're not just adopting technology; you're future-proofing your business.</span>
                        <br></br>
                        <br></br>
                        <span>Our decision to specialize in real estate at VentureInAi reflects our understanding of the sector's unique dynamics and potential for AI-driven transformation. In real estate, where efficiency, accuracy, and client engagement are paramount, AI presents unparalleled opportunities. <br></br>We aim to empower realtors and agencies to navigate market complexities, optimize property management, and elevate client relationships through advanced AI solutions. By choosing real estate, we're not just embracing technology; we're reshaping an entire industry's future.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About