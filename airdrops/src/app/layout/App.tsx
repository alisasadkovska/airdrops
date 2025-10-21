import AirdropDashboard from "../../features/events/AirdropDashboard"
import type { Airdrop } from "../lib/data/types";
import Navbar from "./nav/Navbar"
import { useState } from "react"

function App() {
  const[formOpen, setFormOpen] = useState(false);
  const [selectedAirdrop, setSelectedAirdrop] = useState<Airdrop | null>(null);
  

   const handleFormToggle =  (airdrop: Airdrop | null) => {
      if(formOpen){
      setFormOpen(false);
      setTimeout(() => {
        setSelectedAirdrop(airdrop);
         setFormOpen(true);
      }, 300);
    }   else{
      setSelectedAirdrop(airdrop);
      setFormOpen(true);
    }
   }

  return (
    <div>
      <Navbar formToggle={handleFormToggle}/>
      <div className="container mx-auto px-10 mt-24">
        <AirdropDashboard
           formOpen={formOpen}
           setFormOpen={setFormOpen}
           formToggle={handleFormToggle}
           selectedAirdrop={selectedAirdrop}/>
      </div>
    </div>
  )
}

export default App
