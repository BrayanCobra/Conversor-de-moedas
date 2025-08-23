const convertbutton = document.querySelector(".botao-convert")
const currencyselect = document.querySelector(".currency-select-valueconverted")
const logoconvertida = document.querySelector(".logo-convertida")
const textocurrencyconvertida = document.querySelector(".currency-converted")

function convertvalue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyvaluetoConvert = document.querySelector(".currency-value-to-convert")

    const currencyvalueConverted = document.querySelector(".currency-value")


    const DolarToday = 5.48
    const EuroToday = 6.37
    const WonToday = 0.0039

    if (currencyselect.value == "dolar") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarToday)

    }
    if (currencyselect.value == "euro") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroToday)

    }
        if (currencyselect.value == "won") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue / WonToday)

    }
    currencyvaluetoConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function MudouSelect(){
   if (currencyselect.value == "dolar") {
    logoconvertida.src = "./assets/Dolar.png"
    textocurrencyconvertida.textContent = "Dólar"
}
    if(currencyselect.value == "euro") {
    logoconvertida.src = "./assets/Euro.png"
    textocurrencyconvertida.textContent = "Euro"
    }

    if(currencyselect.value == "won") {
    logoconvertida.src = "./assets/Won.png"
    textocurrencyconvertida.textContent = "Won"
    }

    convertvalue()
}


currencyselect.addEventListener("change", MudouSelect)
convertbutton.addEventListener("click", convertvalue)