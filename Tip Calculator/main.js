const billInput = document.getElementById('billAmount');
const tipInput = document.getElementById('tipPercentage');
const totalTip = document.getElementById('totalTip');
const totalAmount=document.getElementById('totalAmount');

const calculateAmounts=()=>{
    const bill=Number(billInput.value);
    const tipPercentage=Number(tipInput.value)/100;
    const tipAmount=bill * tipPercentage;
    const total=tipAmount + bill;
    
    totalTip.textContent=`$ ${tipAmount}`;
    totalAmount.textContent=`$ ${total}`;
    
}