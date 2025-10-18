import { useEffect, useState } from "react";
import { airdrops } from "../../app/lib/data/sampleData";
import AirdropCard from "./AirdropCard";
import AirdropForm from "./forms/AirdropForm";
import type { Airdrop } from "../../app/lib/data/types";
import { AnimatePresence, motion } from "motion/react";

type Props = {
    formOpen: boolean;
    setFormOpen: (isOpen: boolean) => void;
}

export default function AirdropDashboard({ formOpen, setFormOpen }: Props) {

  const [appAirdrops, setAirdrops] = useState<Airdrop[]>([]);

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
      <AirdropCard key={airdrop.id} airdrop={airdrop} />
    ))}
        </div>
    
      </motion.div>
    </AnimatePresence>
    </div>
    <div className="w-2/5">
    <AnimatePresence>
      {formOpen &&(
      <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0}}
      exit={{ opacity: 0, x: 200 }}
      transition={{duration: 0.3, ease: 'easeInOut'}}
      >
        <AirdropForm setFormOpen={setFormOpen}/>
      </motion.div>
      )}
    </AnimatePresence>
    </div>
  </div>
  )
}
