const convertButton= document.querySelector(".convert-button")

function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currecyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas
    
    const dolarToday = 4.93
    const EuroToday = 5.36

    const convertedValue = inputCurrencyValue / dolarToday

    currecyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
        style: "currency", currency: "USD" 
    }).format(convertedValue)
   
    console.log (convertedValue)

}
convertButton.addEventListener("click", convertValues )





