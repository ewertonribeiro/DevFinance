import {Transaction} from '../../Types/Transaction'


type NewCategory = {
    description:string,
    amount:number,
    date:Date,
    type:string,
}

interface ITransactions{
    create({description  , amount , date , type}:NewCategory):Transaction;


}

export {ITransactions , NewCategory};

