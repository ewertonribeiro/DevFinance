


export function ShowDisplay(){
    return(
        <div className="container-xxl" >

    <div className="row align-items-center container-display">
        <div className="col hover" id="coluna1">
          <h2>Entradas</h2>
         <div id='colentrada'>
              <h3></h3>
            </div>
        </div>
        <div className="col hoverred display" id="coluna2">
            <h2>Saídas</h2>
            <div id='colsaida'>
                <h3></h3>
              </div>
        </div>
        <div className="col hover display" id="coluna3">
            <h2>Total</h2>
           
            <div id='coltotal'>
                <h3></h3>
              </div>
            
            </div>
      </div>

</div>
    )
}