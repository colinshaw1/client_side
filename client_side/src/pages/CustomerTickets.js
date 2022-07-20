import { useState } from "react"

const CustomerTickets = () => {
    //setting the from data in its intal state
    const [fromData, setFromData] = useState({
        status: 'not started',
        progress: 0
    })
    const editMode = false

    const handleSubmit = () => {
        console.log('submitted')
    }

    //gets value of input and name to add a property to objects
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        //pass through previous state and add name and value
        setFromData((prevState) => ({
            ...prevState,
            [name] : value
        })
        )
    }
    return (
        <div className="tickets">
            <h1>{editMode ? 'Hey there would you like to update your ticket?' : 'Please, select the ➕ icon to create a new ticket'}</h1>
            <div className="ticket-container">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChnage={handleChange}
                            required={true}
                            value={fromData.title}
                        />
                    </section>
                </form>

            </div>
        </div>
    )
}

//CustomerTickets component
export default CustomerTickets