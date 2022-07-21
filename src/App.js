//import routes 
import {BrowserRouter, Route, Routes } from 'react-router-dom'
//import routes from pages directory
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboards'
import CustomerTickets from './pages/CustomerTickets'

const App = () => {
  return (
    //route paths
    <div className="App">   
      <BrowserRouter>
      <Navbar/>
      <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/ticket' element={<CustomerTickets/>}/>
              <Route path='/ticket/:id' element={<CustomerTickets editMode={true}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
