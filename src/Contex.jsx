import { useState, useContext, createContext } from "react";
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
  const dataFromStorage = getDataFromLocalStorage();
  const rows = dataFromStorage.length > 0 ? dataFromStorage : data.channels;
  const [channelData, setChannelData] = useState(rows);
  return (
    <AppContext.Provider value={{ rows, channelData, setChannelData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
