const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas


    const dolarToday = 4.93
    const EuroToday = 5.36



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



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)




}



function changeCurrency() {
    const currencyName = document.getElementById ("currency-name")


    if (currencySelect.value == "dolar") {
        
        currencyName.innerHTML = 'Dólar Americano'
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML == "Euro"

    }

}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)





