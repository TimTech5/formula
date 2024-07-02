'use strict'

function powerRule(figure, power) {
    if (power === 0) {
        return 0;
    }
    let newFigure = figure * power;
    let newPower = power - 1;
    return `${newFigure}x^${newPower}`;
}


let figure = 3; 
let power = 8;    
let derivative = powerRule(figure, power);
console.log(`The derivative of ${figure}x^${power} is: ${derivative}`);