import './ServiceList.css'
import ServiceBlock from './ServiceBlock'
function ServiceList(){
    return (
        <div className='service-list-container'>
            <div className='service-list-header'>
                <h2>OUR SERVICES</h2>
            </div>
            <div className='service-list-block'>
                <ServiceBlock title="24/7 AI lead generation" body="Responds to clients immediatly 24/7,Gather client data and organize it for you,Intelligently matche properties with client needs, Automatic and personalized follow up emails to capture every possible lead"></ServiceBlock>
                <ServiceBlock title="test" body = "test"></ServiceBlock>
                <ServiceBlock title="tst" body = "test"></ServiceBlock>
            </div>
        </div>
    )
}

export default ServiceList