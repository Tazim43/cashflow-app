import React from "react";
import classes from "../styles/LastWeekAvgHistory.module.css";
import data from "../data/expenseHistory.json";

export default function LastWeekAvgHistory() {
   return (
      <div className={classes.main}>
         <h2 className={classes.heading}>Last week daily expense history :</h2>
         <div className={classes.boxes}>
            {data
               .slice(data.length - 7, data.length)
               .reverse()
               .map((data, index) => {
                  return (
                     <div key={index} className={classes.avg_box}>
                        {parseFloat(data.total).toFixed(2)} Tk
                     </div>
                  );
               })}
         </div>
      </div>
   );
}
