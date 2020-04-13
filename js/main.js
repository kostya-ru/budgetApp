let start = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value"),
    dayBudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthSavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearSavingsValue = document.getElementsByClassName("yearsavings-value"),
    expensesItem = document.getElementsByClassName("expenses-item"),
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    buttons = document.getElementsByTagName("button"),
    confirmButton = buttons[0],
    confirmOptButton = buttons[1],
    calcButton = buttons[2],
    chooseIncome = document.querySelector("#income"),
    savingsCheckbox = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");
    
console.log(start);
console.log(budgetValue[0]);
console.log(dayBudgetValue[0]);
console.log(levelValue[0]);
console.log(expensesValue[0]);

for (let i = 0; i < optionalExpensesValue.length; i++) {
    console.log(optionalExpensesValue[i]);
}

console.log(incomeValue[0]);
console.log(monthSavingsValue[0]);
console.log(yearSavingsValue[0]);

for (let i = 0; i < expensesItem.length; i++) {
    console.log(expensesItem[i]);
}

console.log(confirmButton);
console.log(confirmOptButton);
console.log(calcButton);

for (let i = 0; i < optionalExpensesItem.length; i++) {
    console.log(optionalExpensesItem[i]);
}

console.log(chooseIncome);
console.log(savingsCheckbox);
console.log(sum);
console.log(percent);
console.log(yearValue);
console.log(monthValue);
console.log(dayValue);