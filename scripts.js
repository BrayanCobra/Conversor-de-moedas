const convertbutton = document.querySelector(".botao-convert")

function convertvalue(){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyvaluetoConvert = document.querySelector(".currency-value-to-convert")
    
    const currencyvalueConverted = document.querySelector(".currency-value")

    const DolarToday = 5.48

    const ConvertedValue = inputCurrencyValue / DolarToday

currencyvaluetoConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
}).format (inputCurrencyValue)

currencyvalueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
}).format (ConvertedValue)
}


convertbutton.addEventListener("click", convertvalue)