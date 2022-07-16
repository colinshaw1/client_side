//import component pages into ticket page
import CustomerCards from "./CustomerCards"
import DeleteSection from "./DeleteSection"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDislay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"
import UserImages from "./UserImage"
//import link so it can be used from react router dom. 
import {Link} from 'react-router-dom'

const Tickets = () => {
    return (
        <div className="ticket-card">
            <div className="ticket-color"></div>
            <link>
            <h3>title</h3>
            <UserImages/>
            <CustomerCards/>
            <DeleteSection/>
            <PriorityDisplay/>
            <ProgressDislay/>
            <StatusDisplay/>
            </link>
        </div>
    )
}

//Tickets component
export default Tickets