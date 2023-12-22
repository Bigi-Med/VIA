import './ServiceHeader.css'

function ServiceHeader({icon,title,body}){
    return (
        <div className='service-header-container'>
            <div className='service-header-text-container'>
                <div className='service-header-title-container'>
                    <span className='service-header-title'>{title}: </span>
                </div>
                <div className='service-header-body-container'>
                    <span className='service-header-body'>{body}.</span>
                </div>
            </div>
        </div>
    )

}
export default ServiceHeader