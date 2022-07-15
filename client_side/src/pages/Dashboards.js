//import tickets route from components page
import Tickets from "../components/Tickets"

const Dashboard = () => {
    return (
        //styling dashboard
        <div>Dashboard
            <h1>My Project</h1>
            <div className="ticket-container">
                <Tickets/>
            </div>
        </div>
        

    )
}

//Dashboard component
export default Dashboard