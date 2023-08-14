const BigNumber = require("bignumber.js")

const convertButton: HTMLInputElement = <HTMLInputElement> document.getElementById('convert')

convertButton.addEventListener("click", () => {
    const inputNum = <HTMLInputElement> document.getElementById('number')
    const stringToConvert: string = String(inputNum.value)

    const inputBase = <HTMLInputElement> document.getElementById('beforebase')
    const beforeBase: number = Number(inputBase.value)

    const outputBase = <HTMLInputElement> document.getElementById('afterbase')
    const toConvertBase: number = Number(outputBase.value)

    const inputDigit = <HTMLInputElement> document.getElementById('digit')
    const numberOfDigits: number = Number(inputDigit.value)

    let converted

    try {
        BigNumber.config({ DECIMAL_PLACES: numberOfDigits });
        const num = BigNumber(stringToConvert, beforeBase)
        converted = num.toString(toConvertBase)
    } catch {
        converted = "エラー"
    }

    let displayArea = document.getElementById('display')
    displayArea!.innerHTML = String(converted)
})

