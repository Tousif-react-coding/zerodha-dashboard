import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";

import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Apps from "./Apps";
import Funds from "./Funds";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import Login from "./Login";



const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
      <WatchList/>
      </GeneralContextProvider>
  
      <div className="content">
      
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>

      </div>
    </div>
  );
};

export default Dashboard;