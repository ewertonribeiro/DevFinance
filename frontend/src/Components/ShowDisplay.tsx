import {useEffect , useContext , useState} from 'react';

import {Api}from '../services/Api/Api'

import {TransactionContext} from '../Context/TransactionContext'

import {Format} from '../services/functions/Format'


export function ShowDisplay(){

    const {transactions} = useContext(TransactionContext)

    const [expenses,setExpenses] = useState<string>('0')

    const [entries,setEntries] = useState<string>('0')

    const [total , setTotal] = useState<string>('0')

    useEffect(()=>{

         Api.totals().then(res=>{

            const {entries , expenses , total} = res;

            const Entries = Format.currency(entries)

            const Expenses = Format.currency(expenses)

            const Total = Format.currency(total)


            setEntries(Entries)
            setExpenses(Expenses)
            setTotal(Total)
         })

        
           

    },[transactions])
    return(
        <div className="container-xxl" >

    <div className="row align-items-center container-display">
        <div className="col hover" id="coluna1">
          <h2>Entradas</h2>
         <div id='colentrada'>
              <h3>{entries}</h3>
            </div>
        </div>
        <div className="col hoverred display" id="coluna2">
            <h2>Saídas</h2>
            <div id='colsaida'>
                <h3>{expenses}</h3>
              </div>
        </div>
        <div className={`col hover display`} id="coluna3">
            <h2>Total</h2>
           
            <div 
            id='coltotal'
            
            >
                <h3>{total}</h3>
              </div>
            
            </div>
      </div>

</div>
    )
}