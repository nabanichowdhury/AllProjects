//Calculate total expenses
document.getElementById('calculate-expenses').addEventListener('click', function () {

    const foodCostInput = document.getElementById('food-cost');
    const foodCostValue = foodCostInput.value;
    const foodCostAmount = parseFloat(foodCostValue);

    const rentCostInput = document.getElementById('rent-cost');
    const rentCostValue = rentCostInput.value;
    const rentCostAmount = parseFloat(rentCostValue);

    const clothesCostInput = document.getElementById('clothes-cost');
    const clothesCostValue = clothesCostInput.value;
    const clothesCostAmount = parseFloat(clothesCostValue);
    const totalCost = foodCostAmount + rentCostAmount + clothesCostAmount;

    const totalExpenses = document.getElementById('total-expenses');
    const previousTotalExpenses = totalExpenses.innerText;
    const previousTotalExpensesText = parseFloat(previousTotalExpenses);
    const newTotalExpenses = totalCost + previousTotalExpensesText;
    if (newTotalExpenses > 0) {
        totalExpenses.innerText = newTotalExpenses;
    }
    //income
    const totalBalance = document.getElementById('total-balance');
    const incomeInput = document.getElementById('monthly-income');
    const incomeInputValue = incomeInput.value;
    let errorIncome = document.getElementById('error-income');
    if (incomeInputValue > newTotalExpenses) {
        const incomeAmount = parseFloat(incomeInputValue);
        const balance = incomeAmount - newTotalExpenses;
        totalBalance.innerText = balance;
        errorIncome.style.display = "none";
    }
    else {
        totalExpenses.innerText = "0000";
        errorIncome.style.display = "block";
    }
})