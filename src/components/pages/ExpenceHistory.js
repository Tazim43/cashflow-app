import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/ExpenseHistory.module.css";
import data from "../../data/expenseHistory.json";

export default function ExpenceHistory() {
   return (
      <div className={classes.main}>
         <Link to="/">
            <button className={classes.home_btn}>Home</button>
         </Link>
         <h1 className={classes.title}>Expence history :</h1>

         {data
            .slice(0)
            .reverse()
            .map((data, index) => {
               return (
                  <div key={index} className={classes.expense_history}>
                     <div className={classes.date}>
                        <div>Date</div>
                        <div>{data.date}</div>
                     </div>
                     {data.details.map((data, index) => {
                        return (
                           <div
                              key={index}
                              className={classes.expense_history_data}
                           >
                              <span>{data.title}</span>
                              <span>
                                 {parseFloat(data.amount).toFixed(2)} Tk
                              </span>
                           </div>
                        );
                     })}

                     <div className={classes.expense_total}>
                        Total : {parseFloat(data.total).toFixed(2)} Tk
                     </div>
                  </div>
               );
            })}
      </div>
   );
}
