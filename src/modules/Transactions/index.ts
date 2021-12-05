import {TransactionRepository} from '../Transactions/DB/implementations/ITransactionImplementations';

import {CreateTransactionsUseCase} from './services/CreateTransactions/CreateTransactionsUseCase';

import {CreateTransactionController} from './Controllers/Create/CreateTransactionController';

const Transactionrepository = TransactionRepository.getInstance();

const CreateTransactionsuseCase = new CreateTransactionsUseCase(Transactionrepository);

const CreateTransactionsController = new CreateTransactionController(CreateTransactionsuseCase);

export {CreateTransactionsController};