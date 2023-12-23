import './ServiceBlock.css'

function ServiceBlock({title,body}){
    const servicesBullet = body.split(',');
    return (
        <div className='service-block-container'>
            <div className='service-block-content'>
                {/* <div className='service-block-icon'>
                    <span> LOGO </span>
                </div> */}
                <div className='service-block-title'>
                    <span>{title}</span>
                </div>
                <div className='service-block-body'>
                    <ul>
                        {servicesBullet.map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                </div>           
                </div>
        </div>
    )
}


export default ServiceBlock;