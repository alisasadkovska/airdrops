import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import AirdropDashboard from "../../features/events/AirdropDashboard";
import AirdropDetails from "../../features/events/details/AirdropDetails";
import AirdropForm from "../../features/events/forms/AirdropForm";


export const router = createBrowserRouter([
  {     
    path: '/',  
    element: <App/>,
    children: [
      {path: '/', element: <HomePage/>},
      {path: 'airdrops', element: <AirdropDashboard/>},
      {path: 'airdrops/:id', element: <AirdropDetails/>},
      {path: 'manage/:id', element: <AirdropForm/>},
      {path: '/createAirdrop', element: <AirdropForm/>},
    ]   
  },
  ])