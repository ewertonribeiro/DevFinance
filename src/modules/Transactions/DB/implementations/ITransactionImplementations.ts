
import {ITransactions , NewCategory} from '../Interface/ITransactionInterface'

import {Transaction} from '../../Types/Transaction';

class TransactionRepository implements ITransactions{

    private transactions:Transaction[]

    private static INSTANCE: TransactionRepository;

  private constructor() {
    this.transactions = [];
  }

  public static getInstance(): TransactionRepository {
    if (!TransactionRepository.INSTANCE) {
      TransactionRepository.INSTANCE = new TransactionRepository();
    }

    return TransactionRepository.INSTANCE;
  }
    create({description  , amount , date , type}:NewCategory):Transaction{

        const NewTransaction = new Transaction;

        Object.assign(NewTransaction, {
            description,
            amount,
            date,
            type
        } );

        this.transactions.push(NewTransaction);

        return NewTransaction
    }
}

export {TransactionRepository};