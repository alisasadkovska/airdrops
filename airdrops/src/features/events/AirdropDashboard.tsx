import { useEffect } from "react";
import AirdropCard from "./AirdropCard";
import AirdropForm from "./forms/AirdropForm";
import { AnimatePresence, motion } from "motion/react";
import Counter from "../counter/Counter";
import { useAppDispatch, useAppSelector } from "../../app/lib/stores/store";
import { setAirdrops } from "./airdropSlice";
import { airdrops } from "../../app/lib/data/sampleData";



export default function AirdropDashboard() {
  const dispatch = useAppDispatch();

  const {airdrops: appAirdrops, selectedAirdrop, formOpen} = useAppSelector(state => state.airdrop);

 
  useEffect(() => {
    dispatch(setAirdrops(airdrops));
  }, [dispatch]);

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
         key={airdrop.id} 
         airdrop={airdrop} />
    ))}
        </div>
    
      </motion.div>
    </AnimatePresence>
    </div>
    <div className="w-2/5 overflow-hidden">
    <AnimatePresence mode="wait">
      {formOpen ? (
      <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0}}
      exit={{ opacity: 0, x: 200 }}
      transition={{duration: 0.3, ease: 'easeInOut'}}
      >
        <AirdropForm 
        key = {selectedAirdrop?.id || 'new'}/>
      </motion.div>
       ) : (
         <motion.div
      key={'counter'}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0}}
      exit={{ opacity: 0, x: 200 }}
      transition={{duration: 0.3, ease: 'easeInOut'}}
      >
        <Counter/>
      </motion.div>
       )}
    </AnimatePresence>
    </div>
  </div>
  )
}
