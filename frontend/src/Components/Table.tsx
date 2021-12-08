import axios from 'axios';

import {useEffect , useState , useContext} from 'react';



import {Transactions} from './'

interface TRANSACTION{
  id:string, 
  description:string,
  date:string,
  type:string,
  amount:number
}

export function Table(){

  
const [transactions,setTransactions] = useState<TRANSACTION[]>([])

useEffect(()=>{

  axios.get("http://localhost:3001/transactions").then((res)=>{
  

    setTransactions(res.data);
  })


},[])

    return(
        <table className="table table-striped container-xl" id="table">
        <thead className="bg-success p-2 text-white bg-opacity-75">
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody id="tbody">
        {transactions.map(transaction=>{
          return (

            <Transactions
            key={transaction.id}
            description = {transaction.description}
            amount = {transaction.amount}
            type = {transaction.type}
            date = {transaction.date}
            />
           
          )
        })}
        </tbody>
      </table>
    )
}