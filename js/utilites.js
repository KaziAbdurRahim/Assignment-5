// common functions.

// input value

function getInputFieldValueByID (Id){
    const inputValue=document.getElementById(Id).value;
    // if (isNaN(inputNumber) && inputNumber >0){alert("please enter a valid number");}
    const inputNumber= parseFloat(inputValue);
    
    return inputNumber;
}

// innerText value
function getInnerTextValueByID(Id){
    const innerTextValue=document.getElementById(Id).innerText;
    const innerTextNumber= parseFloat(innerTextValue);
    return innerTextNumber;

}

function addMoneyToIInnerText(Addedmoney,Id){
    document.getElementById(Id).innerText = Addedmoney;
    
}