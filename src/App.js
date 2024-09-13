import React from 'react';
import './App.css';
import Balance from './components/Balance';
import  Header  from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import NewTransaction from './components/NewTransaction';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className='container'>
     <Balance/>
     <IncomeExpense/>
     <TransactionList/>
     <NewTransaction/>
     </div>
     </GlobalProvider>
  );
}

export default App;
