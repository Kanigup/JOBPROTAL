import React, { useContext, useEffect } from "react";
import "./home.css";
import { AllData } from "./Component/Store/Store";
import AllRequest from "./Component/AllRequest/AllRequest";
import AllFeedback from "./Component/feedback/AllFeedback";
import axios from "axios";
import ViewProfile from "./Component/AllRequest/ViewProfile";
function Home() {
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
  return (
    <div className="home">
      {adminAuth && (
        <>
          {selectedTab === "allRequest" && <AllRequest></AllRequest>}
          {selectedTab === "feedback" && <AllFeedback></AllFeedback>}
          {selectedTab === "viewProfile" && <ViewProfile></ViewProfile>}
        </>
      )}
      {!adminAuth && (
        <div>
          <center>Login Now</center>
        </div>
      )}
    </div>
  );
}

export default Home;
