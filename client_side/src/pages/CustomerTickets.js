import { useState } from "react"

const CustomerTickets = () => {
    //setting the from data in its intal state
    const [formData, setFormData] = useState({
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
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        })
        )
    }

    const categories = ['test1', 'test2']
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
                            value={formData.title}
                        />
                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChnage={handleChange}
                            required={true}
                            value={formData.description}
                        />
                        <label>Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChnage={handleChange}
                        >
                            {categories?.map((category, _index) => (
                                <option key={_index} value={category}>{category}</option>
                            ))}
                            
                        </select>

                        <label htmlFor="category">Update Category</label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            onChnage={handleChange}
                            required={true}
                            value={formData.category}
                        />
                    </section>
                </form>

            </div>
        </div>
    )
}

//CustomerTickets component
export default CustomerTickets