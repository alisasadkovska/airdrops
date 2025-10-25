import { CalendarIcon, PowerIcon, UserIcon } from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from "../../lib/stores/store";
import { signOut } from "../../../features/account/accountSlice";
import { useNavigate } from "react-router";

export default function UserMenu() {
  const navigate = useNavigate();
  const user = useAppSelector(state => state.account.user);
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/');
  }

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" 
  className="m-1 text-white text-xl font-semibold flex gap-3 items-center">
  <div className="avatar">
    <div className="w-7 rounded-full">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"/>
    </div>
    </div>
    <span>  {user?.walletAdr ? `${user.walletAdr.slice(0, 6)}...` : "666"}</span>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 
  rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
    <div className="flex gap-3 items-center text-white">
      <UserIcon className="size-6" />
      <span>My profile</span>
    </div>
  </li>
  <li>
    <div className="flex gap-3 items-center text-white">
      <CalendarIcon className="size-6" />
      <span>Create Airdrop</span>
    </div>
  </li>
   <div className="divider my-0">

  </div>
    <li onClick={handleSignOut}>
    <div className="flex gap-3 items-center text-white">
      <PowerIcon className="size-6 text-error" />
      <span>Sign out</span>
    </div>
  </li>
  </ul>
</div>
  )
}