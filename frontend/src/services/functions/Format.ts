
class Format {

    static currency(amount:number):string{

        const currency = amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        return currency;
    }
    static Date(date:string){
        const splitDate = date.split("-");

        const NewDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`

        return NewDate
    }

}

export {Format};