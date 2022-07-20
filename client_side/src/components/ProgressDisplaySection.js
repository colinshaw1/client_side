const ProgressDisplaySection = ({ progress }) => {
    return (
        <div className="progress">
            <div className="progress-bar">
                <div
                    style={{ width: progress + '%' }}
                    className="progress-indicator"
                >
                </div>
            </div>
        </div>
    )
}

//ProgressDisplaySection component
export default ProgressDisplaySection