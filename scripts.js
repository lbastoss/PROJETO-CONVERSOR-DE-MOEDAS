const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")




    const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas


   const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
  
   const dolar = data.USDBRL.high
   const euro = data.EURBRL.high
   const BTC = data.BTCBRL.high
   



    if (currencySelect.value == "dolar") {
        // se o select estiver o valor de dolar, entre aqui 

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar)


    }

   


    if (currencySelect.value == "euro") {
        // se o select estiver o valor de euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro)

    }

   


    if (currencySelect.value == "real") {
        // se o select estiver o valor em real , entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolar)
    }

  

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    if (currencySelect.value == "btc") {
        // se o select estiver o valor em Bitcoin , entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / BTC)
    }

    

    
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


    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./Assets/libra.png"
    }

    
    convertValues()
}





currencySelect.addEventListener("change", changeCurrency,)
convertButton.addEventListener("click", convertValues)



