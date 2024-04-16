import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import AllRequest from "../AllRequest/AllRequest";
import AllFeedback from "../feedback/AllFeedback";
import "./home.css";
import AllCompany from "./AllCompany";
import { AllData } from "../Store/Store";
export default function Home() {
  axios.defaults.withCredentials = true;
  const { adminAuth, selectedTab, handleAuth } = useContext(AllData);
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      axios.get("/adminAuth").then((res) => {
        if (res.data.Status === "Success") {
          handleAuth(true);
        }
      });
    }
  }, []);
  useEffect(() => {}, []);
  return (
    <div className="home" style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }} className="hrdiv">
        {adminAuth && selectedTab === "allRequest" && <AllRequest></AllRequest>}
        {adminAuth && selectedTab === "allFeedback" && (
          <AllFeedback></AllFeedback>
        )}
        {adminAuth && selectedTab === "allcompany" && <AllCompany></AllCompany>}
        {!adminAuth && (
          <div>
            <center>Login Now</center>
          </div>
        )}
      </div>
    </div>
  );
}
