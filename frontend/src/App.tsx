import './styles/style.css'

import {ShowDisplay , Table , TransactionModal} from './Components/'

function App() {
  return (
    <>
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
  </>
  );
}

export default App;
