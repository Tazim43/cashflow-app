import "./App.css";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IncomeHistory from "./components/pages/IncomeHistory";
import ExpenceHistory from "./components/pages/ExpenceHistory";
import Home from "./components/pages/Home";
import { TotalBalanceProvider } from "./contexts/GlobalState";
import Container from "./components/Container";

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/" exact>
                  <Header pageName="Dashboard" />
                  <Container>
                     <TotalBalanceProvider>
                        <Home />
                     </TotalBalanceProvider>
                  </Container>
               </Route>

               <Route path="/incomehistory" exact>
                  <Header pageName="Income history" />
                  <Container>
                     <IncomeHistory />
                  </Container>
               </Route>

               <Route path="/expencehistory" exact>
                  <Header pageName="Expense history" />
                  <Container>
                     <ExpenceHistory />
                  </Container>
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
