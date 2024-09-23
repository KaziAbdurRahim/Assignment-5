

const TotalCoin = 'Total-coin';

// noakhali der jonno
document.getElementById('noakhali-donate-btn')
    .addEventListener('click', function () {
        console.log('okay');

        const n = getInputFieldValueByID('noakhali-donataded-amount');
        console.log(n);
        if (isNaN(n) || n <= 0) {
            alert('Please enter a valid number');
              // clear the inpuit
              document.getElementById('noakhali-donataded-amount').value='';
              return;
        }
        else {
            const r = getInnerTextValueByID(TotalCoin);
            if (n > r || r === 0) {
                alert('You do not have sufficient balance.');
                 // clear the inpuit
              document.getElementById('noakhali-donataded-amount').value='';
                return;
            }
            else {
                const Id = 'noakhali-fund'
                const f = getInnerTextValueByID(Id);
                const Addmoney = f + n;
                addMoneyToIInnerText(Addmoney, Id);
                // const r = getInnerTextValueByID(TotalCoin);
                const remainingMoney = r - n;
                addMoneyToIInnerText(remainingMoney, TotalCoin);
                  // clear the inpuit
                  document.getElementById('noakhali-donataded-amount').value='';
                  // adding the transection
                  const div = document.createElement('div');
                  div.classList.add('border-2', 'p-2', 'rounded-xl', 'mt-2','bg-gradient-to-r',  'from-slate-200');
                 div.innerHTML = `
                              <p>${n} Taka is Donated for Flood at Noakhali, Bangladesh</p>
                              <p>${addNewdiv()}</p>
                                     `;
                 document.getElementById('transection').appendChild(div);

                //  congrats massage
                con();
                document.getElementById('body').classList.add('blur');
                document.getElementById('nana').classList.add('blur');
                document.getElementById('footerr').classList.add('blur');

                 document.getElementById('con-btn').addEventListener('click',function(){
                    document.getElementById('congrats').classList.add('hidden');
                    document.getElementById('body').classList.remove('blur');
                    document.getElementById('nana').classList.remove('blur');
                    document.getElementById('footerr').classList.remove('blur');

                 })
            }

        }

    })

// feni
document.getElementById('feni-donate-btn')
    .addEventListener('click', function () {
        console.log('okay');

        const n = getInputFieldValueByID('Feni-donated-amount');
        console.log(n);
        if (isNaN(n) || n <= 0) {
            alert('Please enter a valid number');
            // clear the inpuit
            document.getElementById('Feni-donated-amount').value='';
            return;
        }
        else {
            const r = getInnerTextValueByID(TotalCoin);
            if (n > r || r === 0) {
                alert('You do not have sufficient balance.');
                // clear the inpuit
                document.getElementById('Feni-donated-amount').value='';
                return;
            }
            else {
                const Id = 'feni-fund'
                const f = getInnerTextValueByID(Id);
                const Addmoney = f + n;
                addMoneyToIInnerText(Addmoney, Id);
                // const r = getInnerTextValueByID(TotalCoin);
                const remainingMoney = r - n;
                addMoneyToIInnerText(remainingMoney, TotalCoin);
                 // clear the inpuit
                 document.getElementById('Feni-donated-amount').value='';

                  // adding the transection
                  const div = document.createElement('div');
                  div.classList.add('border-2', 'p-2', 'rounded-xl', 'mt-2','bg-gradient-to-r',  'from-slate-200');
                 div.innerHTML = `
                              <p>${n} Taka is Donated for Flood relief in Feni,  Bangladesh</p>
                              <p>${addNewdiv()}</p>
                                     `;
                 document.getElementById('transection').appendChild(div);

                    //  congrats massage
                con();
                document.getElementById('body').classList.add('blur');
                document.getElementById('nana').classList.add('blur');
                document.getElementById('footerr').classList.add('blur');

                 document.getElementById('con-btn').addEventListener('click',function(){
                    document.getElementById('congrats').classList.add('hidden');
                    document.getElementById('body').classList.remove('blur');
                    document.getElementById('nana').classList.remove('blur');
                    document.getElementById('footerr').classList.remove('blur');

                 })
            }

        }

    })
// quata
document.getElementById('Qota-donate-btn')
    .addEventListener('click', function () {
        console.log('okay');

        const n = getInputFieldValueByID('Qota-donated-amount');
        console.log(n);
        if (isNaN(n) || n <= 0) {
            alert('Please enter a valid number');
            // clear the inpuit
            document.getElementById('Qota-donated-amount').value='';
            return;
        }
        else {
            const r = getInnerTextValueByID(TotalCoin);
            if (n > r || r === 0) {
                alert('You do not have sufficient balance.');
                // clear the inpuit
                document.getElementById('Qota-donated-amount').value='';
                return;
            }
            else {
                const Id = 'Qota-fund'
                const f = getInnerTextValueByID(Id);
                const Addmoney = f + n;
                addMoneyToIInnerText(Addmoney, Id);
                // const r = getInnerTextValueByID(TotalCoin);
                const remainingMoney = r - n;
                addMoneyToIInnerText(remainingMoney, TotalCoin);
                // clear the inpuit
                document.getElementById('Qota-donated-amount').value='';

                // adding the transection
                const div = document.createElement('div');
                 div.classList.add('border-2', 'p-2', 'rounded-xl', 'mt-2','bg-gradient-to-r',  'from-slate-200');
                div.innerHTML = `
                             <p>${n} Taka is Donated for Injured in Quata Movment , Bangladesh</p>
                             <p>${addNewdiv()}</p>
                                    `;
                document.getElementById('transection').appendChild(div);
                // const div = document.createElement('div');
                // div.classList.add('border-2', 'p-2', 'rounded-xl', 'mt-2');
                // div.innerHTML=`<p>${n} Taka is Donated for Bangladesh</p>`;
                
                // document.getElementById('transection').appendChild(div)

                   //  congrats massage
                   con();
                   document.getElementById('body').classList.add('blur');
                   document.getElementById('nana').classList.add('blur');
                   document.getElementById('footerr').classList.add('blur');
   
                    document.getElementById('con-btn').addEventListener('click',function(){
                       document.getElementById('congrats').classList.add('hidden');
                       document.getElementById('body').classList.remove('blur');
                       document.getElementById('nana').classList.remove('blur');
                       document.getElementById('footerr').classList.remove('blur');
   
                    })
            }


        }

    })

// swithing betwwen donation and transection
document.getElementById('show-donation').addEventListener('click', function () {
    showSectionById('place');

})
document.getElementById('show-transection').addEventListener('click', function () {
    showSectionById('transection');

})

// button switching
document.getElementById('show-donation').addEventListener('click', function () {
    showButtonActive('show-donation');
});

document.getElementById('show-transection').addEventListener('click', function () {
    showButtonActive('show-transection');
});