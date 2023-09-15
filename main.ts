const BigNumber = require("bignumber.js")

const PhunNum = {
    "0": "〇",
    "1": "〡",
    "2": "〢",
    "3": "〣",
    "4": "〤",
    "5": "〥",
    "6": "〦",
    "7": "〧",
    "8": "〨",
    "9": "〩",
    "a": "〹",
    "b": "〺",
    ".": "・",
}

const convertButton: HTMLInputElement = <HTMLInputElement> document.getElementById('convert')


convertButton.addEventListener("click", () => {
    const phunNumToggle: HTMLInputElement = <HTMLInputElement> document.getElementById('phunnum')
    const isPhun = phunNumToggle.checked

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
        if (isPhun) {
            converted = converted.split("").map(e => {
                return PhunNum[e]
            }).join("")
        }
    } catch {
        converted = "エラー"
    }

    let displayArea = document.getElementById('display')
    displayArea!.innerHTML = String(converted)
})

