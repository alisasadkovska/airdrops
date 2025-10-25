import { useEffect } from "react";
import AirdorpDetailedInfo from "./AirdorpDetailedInfo";
import AirdropDetailedChat from "./AirdropDetailedChat";
import AirdropDetailedHeader from "./AirdropDetailedHeader";
import AirdropDetailedSideBar from "./AirdropDetailedSideBar";
import { selectAirdrop } from "../airdropSlice";
import { useAppDispatch } from "../../../app/lib/stores/store";
import { useParams } from "react-router";

export default function AirdropDetails() {
  const dispatch = useAppDispatch();
  const {id} = useParams<{id: string}>();

  useEffect(() => {
    if(id){
      dispatch(selectAirdrop(id));
    }

    return () => {
      dispatch(selectAirdrop(null));
    }

  },[dispatch, id]);

  return (
    <div className="flex gap-4 w-full">
      <div className="flex flex-col w-2/3 gap-3">
      <AirdropDetailedHeader/>
      <AirdorpDetailedInfo/>
      <AirdropDetailedChat/>
      </div>
      <div className="w-1/3">
      <AirdropDetailedSideBar/>
      </div>
    </div>
  )
}