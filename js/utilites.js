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

// show section
function showSectionById(id){
    document.getElementById('transection').classList.add('hidden');
    document.getElementById('place').classList.add('hidden');
    // for button 
    document.getElementById(id).classList.remove('hidden');
}

function con(){
    document.getElementById('congrats').classList.remove('hidden');


}

function showButtonActive(id) {
    // Reset both buttons to gray
    document.getElementById('show-donation').classList.remove('bg-blue-200');
    document.getElementById('show-donation').classList.add('bg-gray-200');
    
    document.getElementById('show-transection').classList.remove('bg-blue-200');
    document.getElementById('show-transection').classList.add('bg-gray-200');
    
    // Set the clicked button to blue
    document.getElementById(id).classList.remove('bg-gray-200');
    document.getElementById(id).classList.add('bg-blue-200');
}