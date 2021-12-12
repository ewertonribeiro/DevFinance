import {createContext , Dispatch, SetStateAction , ReactNode , useState} from 'react'



interface Transaction{
    id:string,
    description:string,
    date:string,
    amount:number,
    type:string

}
interface Transactions{
    transactions:Transaction[],
    setTransactions:(Dispatch<SetStateAction<Transaction[]>>)
}

interface ContextProps{
    children:ReactNode
}



export  const TransactionContext = createContext<Transactions>({} as Transactions)



export function TransactionsContext(props:ContextProps){

    const [transactions , setTransactions] = useState<Transaction[]>([])

    return(
        <TransactionContext.Provider value={{transactions , setTransactions}}>
            {props.children}
        </TransactionContext.Provider>
    )
}


