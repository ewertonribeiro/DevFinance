import {TransactionRepository} from '../../../../DB/implementations/ITransactionImplementations'

type ID = {
    id:string,

}
class DeleteTransactionUseCase{


    constructor(private TransactionRepository:TransactionRepository){

    }

   async execute({id}:ID):Promise<void>{

      await this.TransactionRepository.delete({id})

        //return NewTransaction;

    }
}

export {DeleteTransactionUseCase};