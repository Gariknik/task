'use strict';

let btnStart = document.getElementById ('start'),
    budgetValue = document.getElementsByClassName ('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName ('daybudget-value')[0],
    levelValue = document.getElementsByClassName ('level-value')[0],
    expensesValue = document.getElementsByClassName ('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName ('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName ('income-value')[0],
    monthSavingsValue = document.getElementsByClassName ('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName ('yearsavings-value')[0],
  
    
    expensesItem = document.getElementsByClassName ('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName ('button')[1],
    countBudgetBtn = document.getElementsByTagName ('button')[2],
    optExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncomeInput = document.querySelector('.choose-income'),
    savingsCheck = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

btnStart.addEventListener ('click', function () {
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt ("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money == null){
        money = +prompt ("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date (Date.parse(time)).getFullYear();
    monthValue.value = new Date (Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date (Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

expensesBtn.addEventListener ('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = +expensesItem[++i].value;
            
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != ''&& a.length < 50) {
            appData.expenses[a] = b;
            sum += b;
        } else {
            i--;
        }    
    }
    expensesValue.textContent = sum;  
});

optionalExpensesBtn.addEventListener ('click' , function () {
    for (let i = 0; i < optExpensesItem.length; i++) {
        let opt = optExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener ('click' , function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30). toFixed ();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }

});

chooseIncomeInput.addEventListener ('input', function () {
    let items = chooseIncomeInput.value;
    appData.income = items.split (', ');
    incomeValue.textContent = appData.income;
});

savingsCheck.addEventListener ('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener ('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener ('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
