const initialAmount = document.querySelector("#bill_amount");
const percentage_tip =document.querySelector("#tip");
const total_people = document.querySelector("#num-people");
const calcBtn = document.querySelector("#btn");
const resetBtn = document.querySelector("#clear");


const totalTipNum = document.querySelector("#total_tip");
const totalEverything = document.querySelector("#total_bill");
const total_amount_person = document.querySelector("#t_amount_person");

calcBtn.addEventListener("click", () =>{
    if(initialAmount.value === "" || initialAmount.value <= 0){
        totalEverything.innerText = "Bill Amount:  Cannot be empty, must be > 0!";
    }else if(percentage_tip.value === "" || percentage_tip.value <=0){
        totalTipNum.innerText = "Tip Percantage:  Cannot be empty, must be > 0!";
}   else if(total_people.value === "" || total_people.value <= 0 || !Number.isInteger(Number(total_people.value))){
        total_amount_person.innerText = "Number of People: Cannot be empty, must be > 0, and no decimals!";
    }
      else{
       const TipCalc = ((Number(initialAmount.value) * Number(percentage_tip.value))/100).toFixed(2);
        totalTipNum.innerText = "Total Tip "  + TipCalc + " $"
        const tip_bill_total = (Number(TipCalc) + Number(initialAmount.value)).toFixed(2);
        totalEverything.innerText = "Total Bill :" + tip_bill_total + " $";
        const per_person = (Number(tip_bill_total)/ Number(total_people.value)).toFixed(2);
        total_amount_person.innerText = "Amount Per Person " + per_person + "$" 
    }
});

resetBtn.addEventListener("click",() =>{
    totalEverything.innerText = "Total Bill :";
    totalTipNum.innerText = "Total Tip :";
    total_amount_person.innerText = "Amount Per Person :";
    initialAmount.value = "";
    percentage_tip.value = "";
    total_people.value = "";
});
