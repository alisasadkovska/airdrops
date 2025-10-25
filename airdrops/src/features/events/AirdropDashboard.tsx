import AirdropCard from "./AirdropCard";
import Counter from "../counter/Counter";
import {  useAppSelector } from "../../app/lib/stores/store";


export default function AirdropDashboard() {


  const {airdrops: appAirdrops } = useAppSelector(state => state.airdrop);

 
  return (
  <div className="flex flexf-row w-full gap-6">
    <div className="w-3/5 ">
     <div className="flex flex-col gap-4">
              {appAirdrops.map((airdrop) => (
      <AirdropCard
         key={airdrop.id} 
         airdrop={airdrop} />
    ))}
        </div>
    </div>
    <div className="w-2/5 overflow-hidden">
        <Counter/>
    </div>
  </div>
  )
}
