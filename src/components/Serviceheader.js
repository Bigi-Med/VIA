import './ServiceHeader.css'

function ServiceHeader({icon,title,body}){
    const servicesBullet = body.split('//');
    return (
        <div className='service-header-container'>
            <div className='service-header-text-container'>
                <div className='service-header-title-container'>
                    <span className='service-header-title'>Generate, Capture and <br></br> Nurture your Leads</span>
                </div>
                <div className='service-header-body-container'>
                    <ul>
                        {servicesBullet.map((item, index) => (
                            <li className='service-header-entry' key={index}>{item.trim()}.</li>
                        ))}
                    </ul>
                </div>
                <div className='service-header-button-container'>
                    <div className='service-header-button'>
                        <span className='service-header-learnMore'> Learn more</span>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ServiceHeader