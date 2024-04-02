import { createContext, useState } from "react";

export const AllData = createContext({
  handleAuth: () => {},
  handleSelectedTab: () => {},
});
const DataProvider = ({ children }) => {
  const [adminAuth, setAdminAuth] = useState(false);
  const handleAuth = (temp) => {
    setAdminAuth(temp);
  };
  const [selectedTab, setSelectedTab] = useState("allRequest");
  const handleSelectedTab = (temp) => {
    setSelectedTab(temp);
  };
  return (
    <AllData.Provider
      value={{ adminAuth, handleAuth, handleSelectedTab, selectedTab }}
    >
      {children}
    </AllData.Provider>
  );
};
export default DataProvider;
