import { UserGroupIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-2xl flex flex-col items-center">
          <UserGroupIcon className="size-96 text-primary"/>
          <h1 className="text-5xl font-bold py-6">Welcome to Airdrops.24</h1>
          <div className="flex items-center gap-3">
            <Link to="/airdrops" className="btn btn-primary btn-lg">View airdrops</Link>
            <button className="btn btn-outline btn-lg">Connect wallet</button>
          </div>
        </div>
      </div>
    </div>
  )
}