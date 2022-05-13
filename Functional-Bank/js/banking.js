function inputValue(idField){
    const InputField=document.getElementById(idField)
    const InputAmountText=InputField.value;
    const InputAmount=parseFloat(InputAmountText)
     // reset input 
     InputField.value="";
    return InputAmount;
   }
function showTotalInput(idField,inputAmount){
    const perviousWithdraw=document.getElementById(idField)
    const previousWithdrawText=perviousWithdraw.innerText
    const perviousWithdrawValue=parseFloat(previousWithdrawText)
    perviousWithdraw.innerText=inputAmount+perviousWithdrawValue
    return  perviousWithdraw.innerText;

}
function balanceUpdate(inputAmount,isAdd){
    const balanceTotal=document.getElementById("total-balance")
    const balanceTotalText=balanceTotal.innerText
    const previousBalanceTotal=parseFloat(balanceTotalText)

    if(isAdd==true){
        balanceTotal.innerText=previousBalanceTotal+inputAmount
        return balanceTotal.innerText
    }
    else{
        balanceTotal.innerText=previousBalanceTotal-inputAmount
        return balanceTotal.innerText
    }
   

}

document.getElementById('deposite-button').addEventListener('click',function(){
    // input the value 
    // const depositeInput=document.getElementById("user-deposite");
    // const depositeAmountText=depositeInput.value;
    // const depositedAmount=parseFloat(depositeAmountText)
    
    // getCurrentDeposite
    // const depositeTotal=document.getElementById('show-deposite')
    // const depositeTotalText=depositeTotal.innerText;
    // const depositeTotalAmount=parseFloat(depositeTotalText)
    // depositeTotal.innerText=depositedAmount+depositeTotalAmount
    

    // upadate balance 
    // const balanceTotal=document.getElementById("total-balance")
    // const balanceTotalText=balanceTotal.innerText
    // const previousBalanceTotal=parseFloat(balanceTotalText)
    // balanceTotal.innerText=previousBalanceTotal+depositedAmount
    const depositedAmount=inputValue("user-deposite")

    if(depositedAmount>0){
    const moneyAddedDeposite=showTotalInput('show-deposite',depositedAmount)

    const balanceUpdateDeposite=balanceUpdate(depositedAmount,true)
    }
    
    // clear input field 
    // depositeInput.value='';

})


// withdraw button handle 

document.getElementById('withdraw-button').addEventListener('click',function(){
     // input the value 
    // const withdrawInput=document.getElementById('user-withdraw')
    // const withdrawAmountText=withdrawInput.value;
    // const withdrawAmount=parseFloat(withdrawAmountText)
    // add current monney 
    // const perviousWithdraw=document.getElementById('show-withdraw')
    // const previousWithdrawText=perviousWithdraw.innerText
    // const perviousWithdrawValue=parseFloat(previousWithdrawText)
    // perviousWithdraw.innerText=withdrawAmount+perviousWithdrawValue
    // update balance 
    // const balanceTotal=document.getElementById("total-balance")
    // const balanceTotalText=balanceTotal.innerText
    // const previousBalanceTotal=parseFloat(balanceTotalText)
    // balanceTotal.innerText=previousBalanceTotal-withdrawAmount
    const withdrawAmount=inputValue('user-withdraw');
    if(withdrawAmount>0){
    const moneyAdded=showTotalInput('show-withdraw',withdrawAmount)
    const balanceUpdateWithdraw=balanceUpdate(withdrawAmount,false)
    }

    // reset input 
    // withdrawInput.value="";
    
})





