import './ServiceList.css'
import ServiceBlock from './ServiceBlock'
function ServiceList(){
    return (
        <div className='service-list-container'>
            <div className='service-list-header'>
                <h2>OUR SERVICES</h2>
            </div>
            <div className='service-list-block'>
                <ServiceBlock title="Lead generation" body="Impress your clients with immediate responses to their inqueries,Have your potential leads data organized for you,Intelligently match properties with client needs, Automatic and personalized follow up emails to capture every possible lead"></ServiceBlock>
                <ServiceBlock title="Stay up to date with the changing laws and compliance issues" body = "test"></ServiceBlock>
            </div>
        </div>
    )
}

export default ServiceList