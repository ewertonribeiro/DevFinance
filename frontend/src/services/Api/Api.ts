import axios from 'axios'

const url = 'http://localhost:3001/transactions'

interface Transaction{
    id:string,
    description:string,
    date:string,
    amount:number,
    type:string
  
  }

  interface FormatAmount{
      entries:number,
      expenses:number,
      total:number
  }

export const Api = {
   async  listAll():Promise<Transaction[]>{
       const data:Transaction[] =  (await axios.get(url)).data
        
       
       return data
    },
    async totals():Promise<FormatAmount>{

        const Amounts:FormatAmount = {
            entries:0,
            expenses:0,
            total:0
        }
        const data =await  Api.listAll()


        const expenses =   data.filter(transaction=>transaction.type==='despesa')
       
        const expensesAmount = expenses.map(transaction =>transaction.amount)

        const expenseTotal = expensesAmount.reduce((acumulador,previesvalue)=>acumulador +previesvalue,0)
       
           
        const entry=  data.filter(transaction=>transaction.type==='ganho')

        const entriesAmount = entry.map(transaction =>transaction.amount)

        const entriesTotal = entriesAmount.reduce((acumulador,previesvalue)=>acumulador +previesvalue,0)

            



           Amounts.entries=entriesTotal
           Amounts.expenses = expenseTotal
           Amounts.total = entriesTotal - expenseTotal

            return Amounts
        
    }
}