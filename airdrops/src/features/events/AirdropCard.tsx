import type { Airdrop } from "../../app/lib/data/types";
import { useAppDispatch } from "../../app/lib/stores/store";
import { deleteAirdrop, toogleForm } from "./airdropSlice";
import LikeDislike from "./LikeDislike";

type Props = {
  airdrop: Airdrop;
}

export default function AirdropCard({airdrop}: Props) {
  const dispatch = useAppDispatch();

  return (
   <div className="card card-border bg-base-100 w-full shadow-xl">
  <div className="card-body">
    <div className="flex gap-3 items-center">
        <figure className="card-figure w-14 rounded-b-lg">
          <img src={airdrop?.logoUrl || '/images/airdrop-placeholder.png'
          }/>
        </figure>
      <div>
         <h2 className="card-title">{airdrop.title}</h2>
         <p className="text-sm">Aidropd task description</p>
      </div>
    </div>
    <div className="-mx-6 my-3 px-4 border-y border-neutral/20 py-2">
      <LikeDislike/>
    </div>
    <div className="card-actions flex">
      <div className="flex flex-1">
       {airdrop.description}
      </div>
      <div className="flex gap-3">
      <button onClick={() => dispatch(toogleForm(airdrop))} 
      className="btn btn-primary">
        View
        </button>
        <button onClick={() => dispatch(deleteAirdrop(airdrop.id))} 
      className="btn btn-error">
        Delete
        </button>
      </div>
    </div>
  </div>
</div>
  )
}