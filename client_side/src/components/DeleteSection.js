const DeleteSection = () => {
    
    const deleteTicket = () => {
        console.log('deleted')
    }
    
    return (
        //Div for delete section to add unicode for when clicked delete icon item gets deleted
        <div className="delete-section">
            <div className="delete-icon" onClick={deleteTicket} >␡</div>
        </div>
    )
}

//DeleteSection component
export default DeleteSection