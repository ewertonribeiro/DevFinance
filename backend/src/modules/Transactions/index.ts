import {TransactionRepository} from '../../DB/implementations/ITransactionImplementations';

import {CreateTransactionsUseCase} from './services/CreateTransactions/CreateTransactionsUseCase';

import {CreateTransactionController} from './Controllers/Create/CreateTransactionController';

import {ListAllTransactionsUseCase} from './services/ListAllTransactions/ListAllTransactionsUseCase';

import {ListAllTransactionsController} from './Controllers/List/ListAllTransactionsController'

import {DeleteTransactionUseCase} from './services/DeleteTransaction/DeleteTransactionUseCase'

import {DeleteTransactionController} from './Controllers/Delete/DeleteTransactionUseController'

//DATABASE
const Transactionrepository = TransactionRepository.getInstance();

////Controller de Criaçao

const CreateTransactionsuseCase = new CreateTransactionsUseCase(Transactionrepository);

const CreateTransactionsController = new CreateTransactionController(CreateTransactionsuseCase);

////

//Controller de Listagem

const listAllTransactionsUseCase = new ListAllTransactionsUseCase(Transactionrepository);

const listAllTransactionsController = new ListAllTransactionsController(listAllTransactionsUseCase );

////

///Controller de Delete

const deleteTransactionsUseCase = new DeleteTransactionUseCase(Transactionrepository);

const deleteTransactionController = new DeleteTransactionController(deleteTransactionsUseCase);

export {CreateTransactionsController , listAllTransactionsController , deleteTransactionController};