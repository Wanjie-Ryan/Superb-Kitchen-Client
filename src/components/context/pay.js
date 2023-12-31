import { createContext, useContext, useState } from "react";

export const payDataContext = createContext();

export const PayDataProvider = ({ children }) => {
  const [payd, setPayd] = useState(null);

  return (
    <payDataContext.Provider value={{ payd, setPayd }}>
      {children}
    </payDataContext.Provider>
  );
};
