//import { useAppSelector } from "../../../app/lib/stores/store";

export default function AirdropDetailedSideBar() {

  //const airdrop = useAppSelector(state => state.airdrop.selectedAirdrop);

  return (
    <div className="card bg-base-100">
            <div className="card-title rounded-t-lg justify-center 
      bg-gradient-to-r from-primary to-black
      py-2 text-white">
        addresses who enrolled in this airdrop
      </div>
      <div className="card-body">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 align-middle items-center">
            <div className="avatar">
              <div className="w-16 rounded">
                <img src='https://img.daisyui.com/images/profile/demo/kenobee@192.webp' alt="Avatar Tailwind CSS Component"/>
              </div>
            </div>
            <span className="text-2xl">Bob</span>
          </div>
        </div>
      </div>
    </div>
  )
}