/**CODING CHALLENGE 1*/
var heightJohn, heightMark, massJohn, massMark, bmiJohn, bmiMark;
heightJohn = 10;
heightMark = 7;
massJohn = 50;
massMark = 35;

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

if(bmiJohn > bmiMark){
    console.log("Johns BMI is higher than Marks.");
}
else console.log("Marks BMI is higher than Johns.");

//CORRECT

/**CODING CHALLENGE 2**/
var johnsScores = [89, 120, 103];
var mikesScores = [116, 94, 123];
var marysScores = [97, 134, 105];

var johnsTotal = scoreAverage(johnsScores);
var mikesTotal = scoreAverage(mikesScores);
var marysTotal = scoreAverage(marysScores);

function scoreAverage(team){
    var teamTotal = 0;
    for(var i = 0; i < team.length; i++){
        teamTotal += team[i];
    }
    return teamTotal;
}

var johnsAverage = johnsTotal/johnsScores.length;
var mikesAverage = mikesTotal/mikesScores.length;
var marysAverage = marysTotal/marysScores.length;

johnsAverage > mikesAverage ? console.log("Johns team is better: " + johnsAverage + " to " + mikesAverage) : console.log("Mikes team is better: " + mikesAverage + " to " + johnsAverage);

if(marysAverage > johnsAverage && marysAverage > mikesAverage){
    console.log("Mary wins " + marysAverage);
} else if(marysAverage > johnsAverage && marysAverage < mikesAverage){
    console.log("Mike wins");
}
else console.log("John wins");

//CORRECT

//Function Declaration
var fullName = "Kenny Seo";
var job = "teacher";

displaying(fullName, job);

function displaying(name, theJob){
    switch(job){
        case "web developer":
            console.log(name + " is a " + theJob);
            break;
        default:
            console.log("Nothing");
    }
}

/**CODING CHALLENGE 3**/
var tipJohn = [124, 48, 268];
var finalBill = [];

for(var i = 0; i < tipJohn.length; i++){
    if(tipJohn[i] < 50){
        finalBill.push(tipJohn[i]+tipJohn[i]*0.2);
    }
    else if(tipJohn[i] >= 50 && tipJohn[i] <= 200){
        finalBill.push(tipJohn[i]+tipJohn[i]*0.15);
    }
    else finalBill.push(tipJohn[i]+tipJohn[i]*0.1);
}

console.log(tipJohn);
console.log(finalBill);

//CORRECT