import {TransactionRepository} from '../../../../DB/implementations/ITransactionImplementations'

import {Transaction} from '../../Types/Transaction'
class ListAllTransactionsUseCase{


    constructor(private TransactionRepository:TransactionRepository){

    }

    async execute(){

        const listAll =  this.TransactionRepository.listAll()

        return listAll;

    }
}

export {ListAllTransactionsUseCase};