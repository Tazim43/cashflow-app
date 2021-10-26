import React, { useContext, useMemo } from "react";
import { useState } from "react";
import totalBalanceAmount from "../data/totalBalance.json";

// Total Balance Context Start
const TotalBalcContext = React.createContext();
export const useTotalBalance = () => useContext(TotalBalcContext);
// Total Balance Provider
export const TotalBalanceProvider = ({ children }) => {
   // initial balance
   const initialBalance = totalBalanceAmount[0].amount;
   const [TotalBalance, setTotalBalance] = useState(initialBalance);
   const provider = useMemo(() => {
      return {
         value: parseFloat(TotalBalance),
         setValue: (value) => setTotalBalance(value),
      };
   }, [TotalBalance]);

   return (
      <TotalBalcContext.Provider value={provider}>
         {children}
      </TotalBalcContext.Provider>
   );
};

// Total Balance Context End
