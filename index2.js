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
          



        }, false)
      })
})() 
const store = {
  init(){

    localStorage.setItem('Ganho', JSON.stringify([]))
    localStorage.setItem('Despesa', JSON.stringify([]))

  },
  Get(){
    const data1 = localStorage.getItem('Ganho')
    const newdata1 = JSON.parse(data1)

    const data2 = localStorage.getItem('Despesa')
    const newdata2 = JSON.parse(data2)


    return [newdata1, newdata2 ] 
  },

  Put(value){
    
    const verify = ()=>{
      if (localStorage.length == 0) {
        this.init()
      }
     }
    
     const get = ()=>{
       const data = localStorage.getItem('Ganho')
       const data2 = localStorage.getItem('Despesa')
       
       const newdata = JSON.parse(data)
       const newdata2 = JSON.parse(data2)
       
       return [newdata , newdata2]
     }

     const Action = (value)=>{
      const data = get()[0]
      const data2 = get()[1]
      
      const valor = value

      if (valor.Tipo=='ganho') {
        
        data.push(valor)
        localStorage.setItem('Ganho' , JSON.stringify(data))
        
        

      } else {

        data2.push(valor)
         
        localStorage.setItem('Despesa' , JSON.stringify(data2))
        return data2
      }
       
     }

    
     
    async function Data(value){
        await Promise.resolve(verify())
        await Promise.resolve(get())
        .then(Action(value))
       
      }
     
  
      
      return Data(value)
   },
   Verify(){
     if (localStorage.length == 0 ) {
       this.init()
     }
   }

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


const Table = {
  
  incomes(){
   
      
    
    const Local = store.Get()[0]
    
      
   
    Local.forEach(item=>{
      
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
    } )  
    
    
  },
  expenses(){

    if (localStorage.length == 0) {
      store.init()
    } else {
      
    


    const local = store.Get()[1]

    
      
    
    local.forEach(item=>{
      
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
    })  }
    
  },
  cleartable(){
    const tr = document.querySelector('#tbody')
    
    tr.innerHTML=""
  }
}


const CaixasTotal = ()=>{
  
  const calc = (a , b)=> a - b;

  const Local1 = store.Get()[0]

  const Local2 = store.Get()[1]


  const EntraAmounts = Local1.map(item => item.Amount);
  const TotalEntra = EntraAmounts.reduce((acumulador , valoratual)=>acumulador+valoratual,0)
  const formatEntra = FORMATACAO.formatarMoeda(TotalEntra)
  
  const DespAmounts = Local2.map(item=> item.Amount)
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
    store.Put(NewIncome)
    
}
 else {
  store.Put(NewExpense)
  
}



APP.reload()
  
}


const APP = {

  init(){
  store.Verify()
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

//store.Put({Descricao: "App", Amount: 20000, Date: "20/01/2020", Tipo: "ganho"})
//store.Put({
  //Descricao:'Site',
  //Amount:200000,
 // Date:'23/02/2020',
  //Tipo:'ganho',

//})









//localStorage.setItem("Ganho" , JSON.stringify([]))


