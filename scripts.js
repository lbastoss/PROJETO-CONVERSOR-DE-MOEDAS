const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectDe = document.querySelector(".currency-select-de")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas


    const dolarToday = 4.92
    const EuroToday = 5.34
    const BitcoinToday = 208.45


    if (currencySelect.value == "dolar") {
        // se o select estiver o valor de dolar, entre aqui 

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

        
    }


    if (currencySelect.value == "euro") {
        // se o select estiver o valor de euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroToday)
    }

    if (currencySelect.value == "real") {
        // se o select estiver o valor em real , entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(dolarToday * inputCurrencyValue)

        
    }

    if (currencySelect.value == "btc") {
        // se o select estiver o valor em Bitcoin , entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / BitcoinToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)




}



function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyNameF = document.getElementById("currency-name-first")
    const currencyImageF = document.querySelector(".currency-img-first")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./Assets/usa.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./Assets/euro.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./Assets/br.png"
    }


    if (currencySelect.value == "btc") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./Assets/bitcoin.png"

    }

    if (currencySelectDe.value == "dolar") {
        currencyNameF.innerHTML = "Dólar Americano"
        currencyImageF.src = "./Assets/usa.png"

    }
    if (currencySelectDe.value == "real") {
        currencyNameF.innerHTML = "Real"
        currencyImageF.src = "./Assets/br.png"
    }

    if (currencySelectDe.value == "euro") {
        currencyNameF.innerHTML = "Euro"
        currencyImageF.src = "./Assets/euro.png"
    }

    if (currencySelectDe.value == "btc") {
        currencyNameF.innerHTML = "Bitcoin"
        currencyImageF.src = "./Assets/bitcoin.png"
    }
    convertValues()
}





currencySelect.addEventListener("change", changeCurrency,)
convertButton.addEventListener("click", convertValues)
currencySelectDe.addEventListener("change", changeCurrency,)


