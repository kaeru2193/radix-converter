const BigNumber = require("bignumber.js");
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
};
const convertButton = document.getElementById('convert');
convertButton.addEventListener("click", () => {
    const phunNumToggle = document.getElementById('phunnum');
    const isPhun = phunNumToggle.checked;
    const inputNum = document.getElementById('number');
    const stringToConvert = String(inputNum.value);
    const inputBase = document.getElementById('beforebase');
    const beforeBase = Number(inputBase.value);
    const outputBase = document.getElementById('afterbase');
    const toConvertBase = Number(outputBase.value);
    const inputDigit = document.getElementById('digit');
    const numberOfDigits = Number(inputDigit.value);
    let converted;
    try {
        BigNumber.config({ DECIMAL_PLACES: numberOfDigits });
        const num = BigNumber(stringToConvert, beforeBase);
        converted = num.toString(toConvertBase);
        if (isPhun) {
            converted = converted.split("").map(e => {
                return PhunNum[e];
            }).join("");
        }
    }
    catch (_a) {
        converted = "エラー";
    }
    let displayArea = document.getElementById('display');
    displayArea.innerHTML = String(converted);
});
