///Chamar a modal de cadastro
(()=> {
    
  var forms = document.querySelectorAll('.needs-validation')
  
    ////Validacao da modal
    
      forms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            
          }
          form.classList.add('was-validated')
          event.preventDefault();



        }, false)
      })
})() 

const transGanho = [
 
]

const transDespesa = [
  
]


const Table = {
  
  incomes(){
    
    transGanho.forEach(item=>{
      
      const Amount = FORMATACAO.formatarMoeda(item.Amount)
      
      const tbody = document.querySelector('#tbody')
      const tr = document.createElement('tr');
      tr.innerHTML=`
      <tr class='hover'>
      <td >${item.Descricao}</td>
      <td style='color:green;'> ${Amount}</td>
      <td>${item.Date}</td>
      <td>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle " viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      
      </td>
      </tr>
      `
      tbody.appendChild(tr)
    })  
    
    
  },
  expenses(){
    
    transDespesa.forEach(item=>{
      
      const Amount = FORMATACAO.formatarMoeda(item.Amount)
      
      const tbody = document.querySelector('#tbody')
      const tr = document.createElement('tr');
      tr.innerHTML=`
      <tr class='hover c'>
      <td >${item.Descricao}</td>
      <td style='color:red;'>-${Amount}</td>
      <td>${item.Date}</td>
      <td>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle " viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      
      </td>
      </tr>
      `
      tbody.appendChild(tr)
    })  
    
  },
  cleartable(){
    const tr = document.querySelector('#tbody')
    
    tr.innerHTML=""
  }
}

const CaixasTotal = ()=>{
  
  const calc = (a , b)=> a - b;

  const EntraAmounts = transGanho.map(item => item.Amount);
  const TotalEntra = EntraAmounts.reduce((acumulador , valoratual)=>acumulador+valoratual,0)
  const formatEntra = FORMATACAO.formatarMoeda(TotalEntra)
  
  const DespAmounts = transDespesa.map(item=> item.Amount)
  const TotalDesp = DespAmounts.reduce((acumulador , valoratual)=> acumulador + valoratual , 0);
  const formatDesp = FORMATACAO.formatarMoeda(TotalDesp)
  
  
  const valor = calc(TotalEntra , TotalDesp)
  const valortotal = FORMATACAO.formatarMoeda(valor)
    
  
  const TotalEntrada = document.querySelector('#colentrada h3')
  TotalEntrada.innerHTML=`
  ${formatEntra}
  `
  const TotalSaida = document.querySelector('#colsaida h3')
  TotalSaida.innerHTML=`
  ${formatDesp}
  `
  const Total = document.querySelector('#coltotal h3')
  Total.innerHTML=`
  ${valortotal}
  `
}

const store = {
  init(){

    localStorage.setItem('Ganho', JSON.stringify([]))
    localStorage.setItem('Despesa', JSON.stringify([]))

  },

  get(value){
    
    const verify = ()=>{
      if (localStorage.length == 0) {
        this.init()
      }else{
        if (value.idade == 25) {
          const data = localStorage.getItem('Ganho')
          
          return JSON.parse(data)
        } else {
          const data = localStorage.getItem('Despesa')

          return JSON.parse(data)
        }
      }
     }
     
    async function Data(){
         await Promise.resolve(verify())
         await Promise.resolve(verify())
         .then()
      }
  
      return Data()
   },
  put(){
   
    
 }

}

//////Colocar uma funçao assincrona para colocar os dados
store.get({name:'WERTON' , idade:25})



function novosValores(){

  const Descricao = document.querySelector('.descri').value
  const Amount = document.querySelector('.amount').value
  const Date = document.querySelector('.date').value
  const Type = document.querySelector('.type').value
  
   const AMOUNT = Number(Amount)
   
   
   const NewIncome = {
     Descricao:Descricao,
     Amount:AMOUNT,
     Date:Date,
    Tipo:Type,
  }
  
  const NewExpense = {
    Descricao:Descricao,
    Amount:AMOUNT,
    Date:Date,
    Tipo:Type,

  }
  
  if (Type =='ganho') {
    
  
}
 else {
 
  
  
}



APP.reload()
  
}




const FORMATACAO = {

  formatarMoeda(value){

      value = Number(value) / 100

      value = value.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
      })
      return value
  }
}

const APP = {

  init(){
    Table.incomes()
    Table.expenses()
    CaixasTotal()
  },
  reload(){
    Table.cleartable()
    APP.init()
  }
}




APP.init()












//localStorage.setItem("Ganho" , JSON.stringify([]))


