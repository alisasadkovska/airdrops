import { CalendarIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "../../../app/lib/stores/store";


export default function AirdorpDetailedInfo() {

  const airdrop = useAppSelector(state => state.airdrop.selectedAirdrop);

  return (
    <div className="card bg-base-100">
      <div className="flex flex-col align-middle">
        <div className="flex items-center gap-x-3 border-b 
        border-neutral-300 py-3 pl-3">
          <InformationCircleIcon className="size-8"/>
          <span>{airdrop?.description}</span>
        </div>
              <div className="flex items-center gap-x-3 py-3 pl-3">
          <CalendarIcon className="size-8"/>
          <span>Airdrop end date</span>
        </div>
        
      </div>
    </div>
  )
}