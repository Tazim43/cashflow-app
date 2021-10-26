import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/IncomeHistory.module.css";
import data from "../../data/incomeHistory.json";

export default function IncomeHistory() {
   return (
      <div className={classes.main}>
         <Link to="/">
            <button className={classes.home_btn}>Home</button>
         </Link>
         <h1 className={classes.title}>Income History :</h1>
         <div className={classes.income_history}>
            <div>Date</div>
            <div>Title</div>
            <div>Amount</div>
         </div>
         <hr />
         {/* Income history here  */}
         {data
            .slice(0)
            .reverse()
            .map((data, index) => {
               return (
                  <div key={index} className={classes.income_history_data}>
                     <div>{data.date}</div>
                     <div>{data.title} </div>
                     <div>{parseFloat(data.amount).toFixed(2)} Tk</div>
                  </div>
               );
            })}
      </div>
   );
}
