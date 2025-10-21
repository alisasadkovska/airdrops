import { useEffect, useState } from "react";
import { airdrops } from "../../app/lib/data/sampleData";
import AirdropCard from "./AirdropCard";
import AirdropForm from "./forms/AirdropForm";
import type { Airdrop } from "../../app/lib/data/types";
import { AnimatePresence, motion } from "motion/react";

type Props = {
    formOpen: boolean;
    setFormOpen: (isOpen: boolean) => void;
    formToggle: (airdrop: Airdrop | null) => void;
    selectedAirdrop: Airdrop | null;
}

export default function AirdropDashboard({ formOpen, setFormOpen, formToggle, selectedAirdrop }: Props) {

  const [appAirdrops, setAirdrops] = useState<Airdrop[]>([]);
  


  const handleCreateAirdrop = (newAirdrop: Airdrop) => {
    setAirdrops(prevAirdrops => [...prevAirdrops, newAirdrop]);
  }

  const handleUpdateAirdrop = (updatedAirdrop: Airdrop) => {
    setAirdrops(prevState => {
      return prevState.map(airdrop => airdrop.id === updatedAirdrop.id ?  updatedAirdrop : airdrop);
    })
  }

  const handleDeleteAirdrop = (airdropId: string) => {
    setAirdrops(prevState => prevState.filter(airdrop => airdrop.id !== airdropId));
    }



  useEffect(() => {
    setAirdrops(airdrops);

    return() => {
      setAirdrops([]);
    };

  }, []);

  return (
  <div className="flex flexf-row w-full gap-6">
    <div className="w-3/5 ">
    <AnimatePresence>
      <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0}}
      exit={{ opacity: 0, x: -200 }}
      transition={{duration: 0.3, ease: 'easeInOut'}}
      >
     <div className="flex flex-col gap-4">
              {appAirdrops.map((airdrop) => (
      <AirdropCard
         formToggle={formToggle}
         deleteAirdrop={handleDeleteAirdrop}
         key={airdrop.id} 
         airdrop={airdrop} />
    ))}
        </div>
    
      </motion.div>
    </AnimatePresence>
    </div>
    <div className="w-2/5 overflow-hidden">
    <AnimatePresence>
      {formOpen &&(
      <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0}}
      exit={{ opacity: 0, x: 200 }}
      transition={{duration: 0.3, ease: 'easeInOut'}}
      >
        <AirdropForm 
        key = {selectedAirdrop ? selectedAirdrop.id : 'new'}
        setFormOpen={setFormOpen}
        createAirdrop={handleCreateAirdrop}
        selectedAirdrop={selectedAirdrop}
        updateAirdrop={handleUpdateAirdrop}/>
      </motion.div>
      )}
    </AnimatePresence>
    </div>
  </div>
  )
}
