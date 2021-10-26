import React from "react";
import classes from "../styles/LastWeekExpenseHistory.module.css";
import data from "../data/expenseHistory.json";

export default function LastWeekExpenseHistory() {
   return (
      <div className={classes.main}>
         <h2 className={classes.heading}>Yesterday Expense Details :</h2>

         {data[data.length - 1].details.map((data, index) => {
            return (
               <div key={index} className={classes.details_box}>
                  <div className={classes.title}>{data.title}</div>
                  <div className={classes.amount}>
                     {parseFloat(data.amount).toFixed(2)} Tk
                  </div>
               </div>
            );
         })}
      </div>
   );
}
