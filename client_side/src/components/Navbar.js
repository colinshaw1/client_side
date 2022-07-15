import { useNavigate } from "react-router-dom"


const Navbar = () => {

    const navigate = useNavigate()
    return (
        <nav>
            <div className="logo-container">
                ClientSide
            </div>
            <div className="container-controls">
                <div className="icon" onClick={() => navigate('/ticket')}>➕</div>
                <div className="icon" onClick={() => navigate('/')}>❮❮</div>
            </div>
        </nav>
    )
}

//Navbar component
export default Navbar 