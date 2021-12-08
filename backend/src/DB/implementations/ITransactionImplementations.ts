
import {ITransactions , NewCategory , ID} from '../Interface/ITransactionInterface'

import {Transaction} from '../../modules/Transactions/Types/Transaction';

import {DATABASE} from '../DB/DB.config';

class TransactionRepository implements ITransactions{

    private static INSTANCE: TransactionRepository;

    public static getInstance(): TransactionRepository {

    if (!TransactionRepository.INSTANCE) {

      TransactionRepository.INSTANCE = new TransactionRepository();

    }

    return TransactionRepository.INSTANCE;
  }

   async  create({description  , amount , date , type}:NewCategory):Promise<Transaction>{

        const NewTransaction = new Transaction;

        Object.assign(NewTransaction, {
          description,
          amount,
          date,
          type
         } );

        const DB = await DATABASE;
         
       await  DB.open();

        await DB.run(`INSERT INTO transactions(
          description,
          amount,
          date,
          type
        )VALUES(
          "${NewTransaction.description}",
          ${NewTransaction.amount},
          "${NewTransaction.date}}",
          "${NewTransaction.type}"
        )`);

        await DB.close();

           return NewTransaction
    };
    async listAll():Promise<Transaction > | undefined{

      const DB = await DATABASE;
      
      DB.open();

      const transactions:Transaction= await DB.all(`SELECT * FROM transactions`);
      
      DB.close();

      return transactions
    }
    async delete({id}:ID):Promise<void> | undefined{

      const DB = await DATABASE;

      await DB.open();

      await DB.get(`DELETE FROM transactions WHERE id = ${id}`);

      await DB.close();

    }
}

export {TransactionRepository};