//import link so it can be used from react router dom. 
import {Link} from 'react-router-dom'
//import component pages into ticket page
import CustomerCards from "./CustomerCards"
import DeleteSection from "./DeleteSection"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDislay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"


const Tickets = ({color, ticket}) => {
    return (
        <div className="ticket-card">
            <Link to={`/ticket/${ticket.documentId}`} id="link">
            <div className="ticket-color"></div>
            <h3>{ticket.title}</h3>
            <CustomerCards/>
            <StatusDisplay status={ticket.status}/>
            <ProgressDislay/>
            <PriorityDisplay priority={ticket.priority}/>
            </Link>
            <DeleteSection/>
        </div>
    )
}

//Tickets component
export default Tickets