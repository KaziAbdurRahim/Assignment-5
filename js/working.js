

const TotalCoin ='Total-coin';

// noakhali der jonno
document.getElementById('noakhali-donate-btn')
    .addEventListener('click',function(){
        console.log('okay');

        const n=getInputFieldValueByID('noakhali-donataded-amount');
        console.log(n);
        if (isNaN(n) || n <= 0) {
            alert('Please enter a valid number');
        }
        else{
            const r = getInnerTextValueByID(TotalCoin);
            if (n > r || r === 0) {
                alert('You do not have sufficient balance.');
                 return;}
                else{  const  Id ='noakhali-fund'
                    const f= getInnerTextValueByID(Id);
                    const Addmoney =f + n;
                    addMoneyToIInnerText(Addmoney,Id);
                    // const r = getInnerTextValueByID(TotalCoin);
                    const remainingMoney=r -n;
                    addMoneyToIInnerText( remainingMoney,TotalCoin);}

        }      

})

// feni
document.getElementById('feni-donate-btn')
    .addEventListener('click',function(){
        console.log('okay');

        const n=getInputFieldValueByID('Feni-donated-amount');
        console.log(n);
        if (isNaN(n) || n <= 0) {
            alert('Please enter a valid number');
        }
        else{
            const r = getInnerTextValueByID(TotalCoin);
            if (n > r || r === 0) {
                alert('You do not have sufficient balance.');
                 return;}
                else{  const  Id ='feni-fund'
                    const f= getInnerTextValueByID(Id);
                    const Addmoney =f + n;
                    addMoneyToIInnerText(Addmoney,Id);
                    // const r = getInnerTextValueByID(TotalCoin);
                    const remainingMoney=r -n;
                    addMoneyToIInnerText( remainingMoney,TotalCoin);}

        }      

})
// quata
document.getElementById('Qota-donate-btn')
    .addEventListener('click',function(){
        console.log('okay');

        const n=getInputFieldValueByID('Qota-donated-amount');
        console.log(n);
        if (isNaN(n) || n <= 0) {
            alert('Please enter a valid number');
        }
        else{
            const r = getInnerTextValueByID(TotalCoin);
            if (n > r || r === 0) {
                alert('You do not have sufficient balance.');
                 return;}
                else{  const  Id ='Qota-fund'
                    const f= getInnerTextValueByID(Id);
                    const Addmoney =f + n;
                    addMoneyToIInnerText(Addmoney,Id);
                    // const r = getInnerTextValueByID(TotalCoin);
                    const remainingMoney=r -n;
                    addMoneyToIInnerText( remainingMoney,TotalCoin);
                }


        }      

})