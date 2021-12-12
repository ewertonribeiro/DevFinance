import {useEffect, useContext , useState} from 'react'

import {Api} from '../services/Api/Api'

import {Transactions} from './index'

import { TransactionContext} from '../Context/TransactionContext'


interface Transaction{
  id:string,
  description:string,
  date:string,
  amount:number,
  type:string

}

export function Table(){

  const {transactions} =  useContext(TransactionContext)


  const [transaction , setTransaction] = useState<Transaction[]>([]);


  useEffect( ()=>{
    
     Api.listAll().then((res)=>{
      setTransaction(res)
    })

    
  },[transactions])


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
        {transaction.map( transaction =>{
            return(
                <Transactions
                key={transaction.id}
                description={transaction.description}
                amount={transaction.amount}
                date={transaction.date}
                id={transaction.id}
                />
            )
          })}
        </tbody>
      </table>
    )
}