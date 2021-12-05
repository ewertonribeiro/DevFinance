import {TransactionRepository} from '../../DB/implementations/ITransactionImplementations'

import {NewCategory} from '../../DB/Interface/ITransactionInterface'

import {Transaction} from '../../Types/Transaction'

class CreateTransactionsUseCase{


    constructor(private TransactionRepository:TransactionRepository){

    }

    execute({description  , amount , date , type}:NewCategory):Transaction{

        const NewTransaction=  this.TransactionRepository.create({description  , amount , date , type});

        return NewTransaction;

    }
}

export {CreateTransactionsUseCase};