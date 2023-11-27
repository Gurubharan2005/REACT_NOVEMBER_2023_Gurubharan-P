import Booking from "./Components/Booking";
import Navbar from "./Components/Navbar";
import Payment from "./Components/Payment";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path='/log' element={<Login/>}></Route>
          <Route path='/reg' element={<Signup/>}></Route>
          <Route path='/book' element={<Booking/>}></Route>
          <Route path='/pay' element={<Payment/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;