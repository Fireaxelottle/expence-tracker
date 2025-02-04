import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({transaction, key}) => {

  const {deleteTransaction} = useContext(GlobalContext);

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
    {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
  </li>
  )
}

export default Transaction
