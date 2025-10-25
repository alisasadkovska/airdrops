import { Link } from "react-router";
import { useAppSelector } from "../../../app/lib/stores/store"

export default function AirdropDetailedHeader() {

  const airdrop = useAppSelector(state => state.airdrop.selectedAirdrop);

  if(!airdrop){
    return <div>Calling for Satan...</div>;
  }

  return (
    <div className="card bg-base-100">
      <figure className="h-64 brightness-50 rounded-lg">
        <img src={`/categoryImages/drinks.jpg`} 
        alt="airdorp category image"
        className="w-full object-cover"/>
        </figure>

        <div className="card-body text-white justify-end absolute bottom-0 w-full">
          <div className="flex justify-between">
          <div>
            <h2 className="card-title text-4xl">
             {airdrop?.title}</h2>
            <p>{airdrop?.task}</p>
          </div>
          <div className="flex flex-col justify-end">
            <div className="flex gap-3">
              <Link to={`/manage/${airdrop?.id}`} className="btn btn-secondary">
                Manage airdorp
              </Link>
               <button className="btn btn-primary">To the airdorp</button>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}