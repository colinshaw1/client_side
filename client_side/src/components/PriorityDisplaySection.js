const PriorityDisplay = ({priority}) => {
   //function to return unicode tick icon in color depending on the priority.
    return (
        <div className="priority-display">
            <div className="tick-container">
                <h3 style={{color: priority >=1 ? 'rgb(253,253,150' : ''}}>✓</h3>
                <h3 style={{color: priority >=2 ? 'rgb(253,253,150' : ''}}>✓</h3>
                <h3 style={{color: priority >=3 ? 'rgb(253,253,150' : ''}}>✓</h3>
                <h3 style={{color: priority >=4 ? 'rgb(253,253,150' : ''}}>✓</h3>
                <h3 style={{color: priority >=5 ? 'rgb(253,253,150' : ''}}>✓</h3>
            </div>
        </div>
    )
}

//PriorityDisplay component
export default PriorityDisplay