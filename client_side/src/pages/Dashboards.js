//import tickets route from components page
import Tickets from "../components/Tickets"

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'blue',
            title: 'sales',
            owener: 'Colin',
            user: 'Colin',
            status: 'done',
            priority: 6,
            progress: '40',
            description: 'fake data to test',
            timestampe: '16-07-2022 10:42'
        },
        {
            category: 'Q2 2022',
            color: 'green',
            title: 'sales',
            owener: 'Colin s',
            user: 'Colin s',
            status: 'in progress',
            priority: 4,
            progress: '60',
            description: 'fake data to test',
            timestampe: '16-07-2022 10:42'
        },

    ]
    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ]
    console.log(uniqueCategories)
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