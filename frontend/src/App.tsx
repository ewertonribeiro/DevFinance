import './styles/style.css'

import {ShowDisplay , Table , TransactionModal} from './Components/'

import {TransactionsContext} from './Context/TransactionContext'


function App() {


  return (
    
    <TransactionsContext>
    <header className="container-xml">
    
    <div className="container-sm">
        <h1>dev@finance</h1>
    </div>

</header>
    
    <ShowDisplay/>
   
    <TransactionModal/>

   <section>
       <main>

        <Table/>
       
       </main>
   </section>
  </TransactionsContext>
 
  );
}

export default App;
