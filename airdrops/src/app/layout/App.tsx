import AirdropDashboard from "../../features/events/AirdropDashboard"
import Navbar from "./nav/Navbar"

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto px-10 mt-24">
        <AirdropDashboard/>
      </div>
    </div>
  )
}

export default App
