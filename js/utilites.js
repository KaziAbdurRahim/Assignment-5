// common functions.

// input value

function getInputFieldValueByID (Id){
    const inputValue=document.getElementById(Id).value;
    const inputNumber= parseFloat(inputValue);
    return inputNumber;
}

// innerText value
function getInnerTextValueByID(Id){
    const innerTextValue=document.getElementById(Id).innerText;
    const innerTextNumber= parseFloat(innerTextValue);
    return innerTextNumber;

}

function addMoneyToIInnerText(Addmoney,Id){
    document.getElementById(Id).innerText = Addmoney;
    
}