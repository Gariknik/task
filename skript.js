'use strict';

let money, time;

function start () {
    money = +prompt ("Ваш бюджет на месяц?", '');
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null){
        money = +prompt ("Ваш бюджет на месяц?", '');
    }
}
start ();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
                
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null 
                && a != '' && b != ''&& a. length < 50) {
                console.log ("done");
                appData.expenses [a] = b;
            } else {
                console.log ("bad result");
                i--;
            }    
        }  
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30). toFixed (2);
        alert("Ежедневный бюджет:" + appData.moneyPerDay + " грн.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Высокий уровень достатка");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt ("Какова сумма накоплений?"),
                persent = +prompt ("Под какой процент?");
    
                appData.monthIncome = save/100/12*persent;
                alert("Доход в месяц с Вашего депозита:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let questionOptionalExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptionalExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt ('Что принесёт дополнительный доход? (Перечислите через запятую)', '');
        if ((typeof (items)) === 'string' || (typeof (items)) != null  
            || items != '') {
            console.log ("Вы ввели некорректное значение");  
        } else {
            appData.income = items.split (', ');
            appData.income.push (prompt('Может что-то ещё? ', ''));
            appData.income.sort (); ;
        }
        appData.income.forEach (function(itemmassive, i) {
            alert( "Способы дополнительного заработка" + (i+1) + " - " + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log ("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null 
//         && a != '' && b != ''&& a. length < 50) {
//         console.log ("done");

//         appData.expenses [a] = b;

//     } else {
//         console.log ("bad result");
//         i--;
//        }
//     i++;    
// }

// используем цикл do While
//  let i=0;
//  do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null 
//         && a != '' && b != ''&& a. length < 50) {
//         console.log ("done");
//         appData.expenses [a] = b;
//     } else {
//         console.log ("bad result");
//         i--;
//     }
//     i++;
//  } 
//  while (i < 2);
