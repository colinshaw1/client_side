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
                        
                        <label>Priority</label>
                        <div className="priority-input-container">
                            <input
                                id="priority-1"
                                name="priority"
                                type="radio"
                                onChnage={handleChange}
                                value={1}
                                checked={formData.priority === 1}
                            />
                            <label gtmlFor="priority-1">1</label>

                            <input
                                id="priority-2"
                                name="priority"
                                type="radio"
                                onChnage={handleChange}
                                value={1}
                                checked={formData.priority === 2}
                            />
                            <label gtmlFor="priority-2">2</label>
                            <input
                                id="priority-2"
                                name="priority"
                                type="radio"
                                onChnage={handleChange}
                                value={2}
                                checked={formData.priority === 2}
                            />
                            <label gtmlFor="priority-2">2</label>

                            <input
                                id="priority-3"
                                name="priority"
                                type="radio"
                                onChnage={handleChange}
                                value={3}
                                checked={formData.priority === 3}
                            />
                            <label gtmlFor="priority-3">3</label>

                            <input
                                id="priority-4"
                                name="priority"
                                type="radio"
                                onChnage={handleChange}
                                value={4}
                                checked={formData.priority === 4}
                            />
                            <label gtmlFor="priority-4">4</label>

                            <input
                                id="priority-5"
                                name="priority"
                                type="radio"
                                onChnage={handleChange}
                                value={5}
                                checked={formData.priority === 5}
                            />
                            <label gtmlFor="priority-5">5</label>
                            
                            
                            <input
                                type="range"
                                id="progress"
                                value={formData.progress}
                                min="0"
                                max="100"
                                onChnage={handleChange}
                            />
                            <label htmlFor="progress">Progress</label>

                        </div>
                    </section>
                </form>

            </div>
        </div>
    )
}

//CustomerTickets component
export default CustomerTickets