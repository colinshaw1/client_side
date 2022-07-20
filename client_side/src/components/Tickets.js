//import link so it can be used from react router dom. 
import {Link} from 'react-router-dom'
//import component pages into ticket page
import UserCardSection from "./UserCardSection"
import DeleteSection from "./DeleteSection"
import PriorityDisplaySection from "./PriorityDisplaySection"
import ProgressDislaySection from "./ProgressDisplaySection"
import StatusDisplaySection from "./StatusDisplaySection"


const Tickets = ({color, ticket}) => {
    return (
        <div className="ticket-card">
            <Link to={`/ticket/${ticket.documentId}`} id="link">
            <div className="ticket-color"></div>
            <h3>{ticket.title}</h3>
            <UserCardSection/>
            <StatusDisplaySection status={ticket.status}/>
            <ProgressDislaySection progress={ticket.progress}/>
            <PriorityDisplaySection priority={ticket.priority}/>
            </Link>
            <DeleteSection/>
        </div>
    )
}

//Tickets component
export default Tickets