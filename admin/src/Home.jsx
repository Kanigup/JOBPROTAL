import React, { useContext } from "react";
import "./home.css";
import { AllData } from "./Component/Store/Store";
import AllRequest from "./Component/AllRequest/AllRequest";
import AllFeedback from "./Component/feedback/AllFeedback";
function Home() {
  const { adminAuth, selectedTab } = useContext(AllData);
  return (
    <div className="home">
      {adminAuth && (
        <>
          {selectedTab === "allRequest" && <AllRequest></AllRequest>}
          {selectedTab === "feedback" && <AllFeedback></AllFeedback>}
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
