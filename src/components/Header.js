import React from "react";

export default function Header({ pageName }) {
   return (
      <div className="header">
         <h1> CashFlow APP - {pageName}</h1>
      </div>
   );
}
