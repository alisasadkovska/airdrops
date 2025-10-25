import { NavLink, useNavigate } from "react-router";
import UserMenu from "./UserMenu";
import { useAppDispatch, useAppSelector } from "../../lib/stores/store";
import { signIn } from "../../../features/account/accountSlice";
 
export default function Navbar() {
    const navigate = useNavigate();
    const user = useAppSelector(state => state.account.user);
    const dispatch = useAppDispatch();
   
    const handleSignIn = () => {
        dispatch(signIn());
        navigate('/airdrops');
    }

  return (
   <header className="px-3 w-full fixed top-0 z-50 bg-gradient-to-r from-primary to-black">
    <div className="flex align-middle items-center px-10 mx-auto gap-6 cursor-pointer">
        <div className="h- text-white flex items-center gap3 
        border-r-white border-r-2 my-5 pr-6">
            <NavLink to='/' 
            className="text-2xl font-semibold text-white uppercase">Airdrops.24
             </NavLink>
        </div>
        <nav className="flex gap-3 my-2 uppercase text-lg text-white">
            <NavLink to='/airdrops' end>Airdrops</NavLink>
            <NavLink to='/createAirdrop'>Create</NavLink>
        </nav>
        <div className="flex align-middle ml-auto gap-3">
            {user ? (
                <UserMenu/>
            ):(
                <>
            <button onClick={handleSignIn} className="btn">Login</button>
            <button className="btn">Register</button>
                </>
            )}
        </div>
    </div>
   </header>
  )
}