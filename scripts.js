const convertbutton = document.querySelector(".botao-convert")
const currencyselecttoconvert = document.querySelector(".currency-select-valuetoconvert")
const currencyselect = document.querySelector(".currency-select-valueconverted")
const logoconvertida = document.querySelector(".logo-convertida")
const logoaconverter = document.querySelector(".logoaconverter")
const textocurrencyconvertida = document.querySelector(".currency-converted")
const textocurrencyaconverter = document.querySelector(".currency")

function convertvalue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyvaluetoConvert = document.querySelector(".currency-value-to-convert")

    const currencyvalueConverted = document.querySelector(".currency-value")


    const DolarToday = 5.42
    const EuroToday = 6.36
    const WonToday = 0.0039
    const DolarTodayw = 0.00072
    const EuroTodayw = 0.00062
    const DolarTodayE = 1.16
    const RealTodayE = 6.29
    const WonTodayE = 1616.62
    const EuroTodayD = 0.86
    const RealTodayD = 5.41
    const WonTodayD = 1390.91

    if (currencyselecttoconvert.value == "real" && currencyselect.value == "dolar") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarToday)

    }
    if (currencyselecttoconvert.value == "real" && currencyselect.value == "euro") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroToday)

    }
    if (currencyselecttoconvert.value == "real" && currencyselect.value == "won") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue / WonToday)
    }

    if (currencyselect.value == "real" && currencyselecttoconvert.value == "euro") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * EuroToday)
    } else if (currencyselect.value == "real" && currencyselecttoconvert.value == "dolar") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * DolarToday)
    } else if (currencyselect.value == "real" && currencyselecttoconvert.value == "won") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * WonToday)
    }

    /*_____________________________________________________________________________________*/

    if (currencyselect.value == "dolar" && currencyselecttoconvert.value == "won") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * DolarTodayw)
    } else if (currencyselect.value == "euro" && currencyselecttoconvert.value == "won") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * EuroTodayw)
    }

    if (currencyselect.value == "dolar" && currencyselecttoconvert.value == "euro") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * DolarTodayE)
    } else if (currencyselect.value == "real" && currencyselecttoconvert.value == "euro") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * RealTodayE)
    } else if (currencyselect.value == "won" && currencyselecttoconvert.value == "euro") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue * WonTodayE)
    }

    if (currencyselect.value == "euro" && currencyselecttoconvert.value == "dolar") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * EuroTodayD)
    } else if (currencyselect.value == "real" && currencyselecttoconvert.value == "dolar") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * RealTodayD)
    } else if (currencyselect.value == "won" && currencyselecttoconvert.value == "dolar") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue * WonTodayD)
    }

        if (currencyselect.value == "dolar" && currencyselecttoconvert.value == "dolar") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
            if (currencyselect.value == "euro" && currencyselecttoconvert.value == "euro") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
            if (currencyselect.value == "won" && currencyselecttoconvert.value == "won") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue)
    }
            if (currencyselect.value == "real" && currencyselecttoconvert.value == "real") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    /*_____________________________________________________________________________________*/


    if (currencyselecttoconvert.value == "dolar") {
        currencyvaluetoConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencyselecttoconvert.value == "real") {
        currencyvaluetoConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencyselecttoconvert.value == "euro") {
        currencyvaluetoConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencyselecttoconvert.value == "won") {
        currencyvaluetoConvert.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue)
    }
}

function MudouSelectaconverter() {
    if (currencyselecttoconvert.value == "dolar") {
        logoaconverter.src = "./assets/Dolar.png"
        textocurrencyaconverter.textContent = "Dólar"
    }
    if (currencyselecttoconvert.value == "euro") {
        logoaconverter.src = "./assets/Euro.png"
        textocurrencyaconverter.textContent = "Euro"
    }
    if (currencyselecttoconvert.value == "won") {
        logoaconverter.src = "./assets/Won.png"
        textocurrencyaconverter.textContent = "Won"
    }
    if (currencyselecttoconvert.value == "real") {
        logoaconverter.src = "./assets/Real.png"
        textocurrencyaconverter.textContent = "Real"
    }
}

function MudouSelect() {
    if (currencyselect.value == "dolar") {
        logoconvertida.src = "./assets/Dolar.png"
        textocurrencyconvertida.textContent = "Dólar"
    }
    if (currencyselect.value == "euro") {
        logoconvertida.src = "./assets/Euro.png"
        textocurrencyconvertida.textContent = "Euro"
    }

    if (currencyselect.value == "won") {
        logoconvertida.src = "./assets/Won.png"
        textocurrencyconvertida.textContent = "Won"
    }

    if (currencyselect.value == "real") {
        logoconvertida.src = "./assets/Real.png"
        textocurrencyconvertida.textContent = "Real"
    }

}

currencyselecttoconvert.addEventListener("change", MudouSelectaconverter)
currencyselect.addEventListener("change", MudouSelect)
convertbutton.addEventListener("click", convertvalue)