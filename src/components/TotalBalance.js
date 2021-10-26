import React from "react";
import classes from "../styles/TotalBalance.module.css";

export default function TotalBalance({ balc = 0.0 }) {
   const lowBalanceStyle = () => {
      if (balc < 1000 && balc >= 0) {
         return {
            backgroundColor: "#ff6c6c",
         };
      } else if (balc < 0) {
         return {
            backgroundColor: "red",
         };
      } else return {};
   };

   const balance = balc;
   return (
      <div className={classes.main}>
         <h1 style={lowBalanceStyle()} className={classes.text}>
            Total Balance : {balance.toFixed(2)} Tk
         </h1>
      </div>
   );
}
