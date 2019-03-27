/**CODING CHALLENGE 1*/
// var heightJohn, heightMark, massJohn, massMark, bmiJohn, bmiMark;
// heightJohn = 10;
// heightMark = 7;
// massJohn = 50;
// massMark = 35;

// bmiJohn = massJohn / (heightJohn * heightJohn);
// bmiMark = massMark / (heightMark * heightMark);

// if(bmiJohn > bmiMark){
//     console.log("Johns BMI is higher than Marks.");
// }
// else console.log("Marks BMI is higher than Johns.");

//CORRECT

/**CODING CHALLENGE 2**/
// var johnsScores = [89, 120, 103];
// var mikesScores = [116, 94, 123];
// var marysScores = [97, 134, 105];

// var johnsTotal = scoreAverage(johnsScores);
// var mikesTotal = scoreAverage(mikesScores);
// var marysTotal = scoreAverage(marysScores);

// function scoreAverage(team){
//     var teamTotal = 0;
//     for(var i = 0; i < team.length; i++){
//         teamTotal += team[i];
//     }
//     return teamTotal;
// }

// var johnsAverage = johnsTotal/johnsScores.length;
// var mikesAverage = mikesTotal/mikesScores.length;
// var marysAverage = marysTotal/marysScores.length;

// johnsAverage > mikesAverage ? console.log("Johns team is better: " + johnsAverage + " to " + mikesAverage) : console.log("Mikes team is better: " + mikesAverage + " to " + johnsAverage);

// if(marysAverage > johnsAverage && marysAverage > mikesAverage){
//     console.log("Mary wins " + marysAverage);
// } else if(marysAverage > johnsAverage && marysAverage < mikesAverage){
//     console.log("Mike wins");
// }
// else console.log("John wins");

//CORRECT

//Function Declaration
// var fullName = "Kenny Seo";
// var job = "teacher";

// displaying(fullName, job);

// function displaying(name, theJob){
//     switch(job){
//         case "web developer":
//             console.log(name + " is a " + theJob);
//             break;
//         default:
//             console.log("Nothing");
//     }
// }

/**CODING CHALLENGE 3**/
// var tipJohn = [124, 48, 268];
// var finalBill = [];

// for(var i = 0; i < tipJohn.length; i++){
//     if(tipJohn[i] < 50){
//         finalBill.push(tipJohn[i]+tipJohn[i]*0.2);
//     }
//     else if(tipJohn[i] >= 50 && tipJohn[i] <= 200){
//         finalBill.push(tipJohn[i]+tipJohn[i]*0.15);
//     }
//     else finalBill.push(tipJohn[i]+tipJohn[i]*0.1);
// }

// console.log(tipJohn);
// console.log(finalBill);

//CORRECT

/**OBJECTS AND METHODS**/
// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: "teacher",
//     isMarried: false,
    //Method
//     calcAge: function(birthYear){
//         this.age = 2019 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);

//CODING CHALLENGE 4
// var john = {
//     fullName: "John Smith",
//     mass: 50,
//     height:60,
//     calcBmi: function(){
//         this.bmi = this.mass / (this.height*this.height);
//         return this.bmi;
//     }
// }

// var mark = {
//     fullName: "Mark Bark",
//     mass: 70,
//     height:55,
//     calcBmi: function(){
//         this.bmi = this.mass / (this.height*this.height);
//         return this.bmi;
//     }
// }

// john.calcBmi();
// mark.calcBmi();

// if(john.calcBmi > mark.calcBmi){
//     console.log("John has higher bmi");
// } else console.log("Mark has higher bmi");

//CODING CHALLENGE 5
var prices = {
    allPrices: [124, 48, 268, 180, 42],
    calcTip: function(){
        this.allTips = new Array();
        this.finalPrice = new Array();
        for(var i = 0; i < this.allPrices.length; i++){
            if(this.allPrices[i] < 50){
                this.allTips.push(this.allPrices[i]*.2);
            }
            else if(this.allPrices[i] > 50 && this.allPrices[i] < 200){
                this.allTips.push(this.allPrices[i]*.15);
            }
            else this.allTips.push(this.allPrices[i]*.1);
        }
        for(var i = 0; i < this.allPrices.length; i++){
            this.finalPrice.push(this.allPrices[i] + this.allTips[i]);
        }
    }
}

prices.calcTip();

console.log(prices.allPrices);
console.log(prices.allTips);
console.log(prices.finalPrice);

//CORRECT

//CODING CHALLENGE 5 PART 2

var mPrices = {
    markPrices: [77 ,375, 110, 45],
    calcTip: function(){
        this.markTip = new Array();
        this.mTotal = new Array();
        for(var i = 0; i < this.markPrices.length; i++){
            if(this.markPrices[i] < 100){
                this.markTip.push(this.markPrices[i]*.2);
            }
            else if (this.markPrices[i] >= 100 && this.markPrices[i] <= 300){
                this.markTip.push(this.markPrices[i]*.1);
            }
            else this.markTip.push(this.markPrices[i]*.25);
        }
        for (var i = 0; i < this.markPrices.length; i++){
            this.mTotal.push(this.markPrices[i]+ this.markTip[i]);
        }
    }
}

mPrices.calcTip();

console.log(mPrices.markPrices);
console.log(mPrices.markTip);
console.log(mPrices.mTotal);

function higherAvg(a,b){
    var aTotal = 0;
    for(var i = 0; i < a.length; i++){
        aTotal += a[i];
    }
    var aAverage = aTotal / a.length;

    var bTotal = 0;
    for(var i = 0; i < b.length; i++){
        bTotal += b[i];
    }
    var bAverage = bTotal / b.length;

    if(aAverage > bAverage){
        console.log("A Average is higher: " + aAverage);
    }
    else console.log("B Average is higher: " + bAverage);
}

higherAvg(prices.allTips, mPrices.markTip);

//CORRECT