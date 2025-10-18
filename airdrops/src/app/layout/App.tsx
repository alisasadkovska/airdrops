import AirdropDashboard from "../../features/events/AirdropDashboard"
import Navbar from "./nav/Navbar"
import { useState } from "react"

function App() {
  const[formOpen, setFormOpen] = useState(false);
  
  return (
    <div>
      <Navbar setFormOpen={setFormOpen}/>
      <div className="container mx-auto px-10 mt-24">
        <AirdropDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </div>
    </div>
  )
}

export default App
