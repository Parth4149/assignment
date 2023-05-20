import { useContext, createContext } from "react";
import data from "./schema.json";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const getDataFromLocalStorage = () => {
    // console.log("LocalStrorage");
    let channels = localStorage.getItem("channels");
    if (channels) {
      channels = JSON.parse(channels);
    } else {
      channels = [];
    }
    return channels;
  };
  const channelData = getDataFromLocalStorage();
  const rows = channelData.length > 0 ? channelData : data;
  return <AppContext.Provider value={{ rows }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
