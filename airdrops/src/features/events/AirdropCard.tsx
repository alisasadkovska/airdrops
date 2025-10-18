import type { Airdrop } from "../../app/lib/data/types";
import LikeDislike from "./LikeDislike";

type Props = {
  airdrop: Airdrop;
}

export default function AirdropCard({airdrop}: Props) {
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
    <div className="bg-base-200 -mx-6 my-3 px-4 border-y border-neutral/20 py-2">
      <LikeDislike/>
    </div>
    <div className="card-actions flex">
      <div className="flex flex-1">
       {airdrop.description}
      </div>
      <button className="btn btn-primary">Enroll</button>
    </div>
  </div>
</div>
  )
}