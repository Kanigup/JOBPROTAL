import { createContext, useState, useEffect, useContext } from "react";

export const AllFunction = createContext({
  handleAuth: () => {},
  handleHrData: () => {},
  handleHrPostJobData: () => {},
  handleUserdata: () => {},
  handleAllJobs: () => {},
  handleApplyJob: () => {},
  handleVerify: () => {},
});
const FunctionProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  const [hrAuth, setHrAuth] = useState(false);
  const [allJobs, setAllJobs] = useState(null);
  const [jobId, setJobId] = useState(null);
  const handleAllJobs = (data) => {
    setAllJobs(data);
  };
  const [hrData, setHrData] = useState({
    HrName: "",
    HrEmail: "",
    CompADD: "",
    CompPhone: "",
    CompName: "",
    AdharId: "",
    AdminId: "",
    CompWeb: null,
    isVerify: 0,
  });
  const [userData, setUserData] = useState({
    JsName: "",
    JsLName: "",
    Phone: "",
    DOB: "",
    JsEmail: "",
  });
  const [isVerify, serIsVerify] = useState(false);
  const handleVerify = (temp) => {
    serIsVerify(temp);
  };
  const handleUserdata = (data) => {
    setUserData(data);
  };

  const handleApplyJob = async (id) => {
    await setJobId(id);
  };
  const handleHrData = (data) => {
    setHrData(data);
  };

  const handleAuth = (type, temp) => {
    if (type === "user") setUserAuth(temp);
    else setHrAuth(temp);
  };
  const [hrPostjobData, setHrPostJobData] = useState(null);
  const handleHrPostJobData = (totalJob) => {
    setHrPostJobData(totalJob);
  };
  return (
    <AllFunction.Provider
      value={{
        userAuth,
        handleAuth,
        hrAuth,
        handleHrData,
        hrData,
        handleHrPostJobData,
        hrPostjobData,
        handleUserdata,
        userData,
        handleAllJobs,
        allJobs,
        handleApplyJob,
        jobId,
        isVerify,
        handleVerify,
      }}
    >
      {children}
    </AllFunction.Provider>
  );
};
export default FunctionProvider;
