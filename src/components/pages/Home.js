import React, { useState } from "react";
import { Link } from "react-router-dom";
import TotalBalance from "../TotalBalance";
import classes from "../../styles/Home.module.css";
import LastWeekAvgHistory from "../LastWeekAvgHistory";
import LastWeekExpenseHistory from "../LastWeekExpenseHistory";
import { useTotalBalance } from "../../contexts/GlobalState";
import incomeData from "../../data/incomeHistory.json";
import expenseData from "../../data/expenseHistory.json";
import totalBalanceAmount from "../../data/totalBalance.json";

export default function Home() {
   const [income, setIncome] = useState("");
   const [expense, setExpense] = useState("");
   const [incomeTitle, setIncomeTitle] = useState("");
   const [expenseTitle, setExpenseTitle] = useState("");
   const [incomeFocused, setIncomeFocused] = useState(false);
   const [expenseFocused, setExpenseFocused] = useState(false);
   const date = new Date().toLocaleDateString();

   const totalBalance = useTotalBalance();

   const handleSubmit = (e) => {
      e.preventDefault();
   };
   // Add Income functionality
   const handleIncome = () => {
      setIncome("");
      setIncomeTitle("");
      setIncomeFocused(false);
      if (income !== "") {
         totalBalance.setValue((prev) => prev + parseFloat(income));
      }
      if (income !== "" && incomeTitle !== "") {
         incomeData.push({
            date: new Date().toLocaleDateString(),
            title: incomeTitle,
            amount: income,
         });

         totalBalanceAmount[0].amount += parseFloat(income);
      }
   };
   // Add expense functionality
   const handleExpense = () => {
      setExpense("");
      setExpenseTitle("");
      setExpenseFocused(false);
      if (expense !== "")
         totalBalance.setValue(
            (prev) => parseFloat(prev) - parseFloat(expense)
         );
      if (expense !== "" && expenseTitle !== "") {
         if (expenseData[expenseData.length - 1].date === date) {
            expenseData[expenseData.length - 1].details.push({
               title: expenseTitle,
               amount: expense,
            });
            expenseData[expenseData.length - 1].total += parseFloat(expense);
         } else {
            expenseData.push({
               date: new Date().toLocaleDateString(),
               details: [
                  {
                     title: expenseTitle,
                     amount: expense,
                  },
               ],
               total: parseFloat(expense),
            });
         }

         totalBalanceAmount[0].amount -= parseFloat(expense);
      }
   };

   return (
      <div>
         <TotalBalance balc={totalBalance.value} />
         <div className={classes.page_btns}>
            <Link to="/incomehistory">
               <button className={classes.income_btn}>IncomeHistory</button>
            </Link>
            <Link to="/expencehistory">
               <button className={classes.expense_btn}>ExpenceHistory</button>
            </Link>
         </div>
         {/* input form start */}
         <div className={classes.form}>
            <form action="" onSubmit={handleSubmit}>
               <div className={classes.add_income}>
                  <div className="">
                     <input
                        type="number"
                        value={income}
                        name="income"
                        id="income"
                        placeholder="Enter Income"
                        onChange={(e) =>
                           setIncome(e.target.value >= 0 ? e.target.value : 0)
                        }
                        onFocus={() => setIncomeFocused(true)}
                     />
                     {incomeFocused && (
                        <input
                           type="text"
                           name="income_title"
                           id="income_title"
                           placeholder="Enter Title"
                           value={incomeTitle}
                           onChange={(e) => setIncomeTitle(e.target.value)}
                        />
                     )}
                  </div>
                  <button onClick={handleIncome} className={classes.input_btn}>
                     Add Income
                  </button>
               </div>

               <div className={classes.add_expense}>
                  <div className="">
                     <input
                        type="number"
                        value={expense}
                        name="expense"
                        id="expense"
                        placeholder="Enter Expense"
                        onChange={(e) =>
                           setExpense(e.target.value >= 0 ? e.target.value : 0)
                        }
                        onFocus={() => setExpenseFocused(true)}
                     />
                     {expenseFocused && (
                        <input
                           type="text"
                           name="expense_title"
                           id="expense_title"
                           placeholder="Enter Title"
                           value={expenseTitle}
                           onChange={(e) => setExpenseTitle(e.target.value)}
                        />
                     )}
                  </div>
                  <button onClick={handleExpense} className={classes.input_btn}>
                     Add Expense
                  </button>
               </div>
            </form>
         </div>
         {/* input form end  */}
         {/* last 1 week avg history  */}
         <LastWeekAvgHistory />
         {/* Last 1 week Expense history  */}
         <LastWeekExpenseHistory />
      </div>
   );
}
