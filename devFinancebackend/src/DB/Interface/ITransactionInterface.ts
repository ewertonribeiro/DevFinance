import {Transaction} from '../../modules/Transactions/Types/Transaction'


type NewCategory = {
    description:string,
    amount:number,
    date:Date,
    type:string,
}

type ID = {
    id:string,
}

interface ITransactions{
     create({description  , amount , date , type}:NewCategory):Promise<Transaction>;

    listAll():Promise<Transaction  | undefined>;

    delete({id}:ID):Promise<void>;
    }

export {ITransactions , NewCategory , ID};

