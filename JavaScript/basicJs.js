// console.log('Hello')
// Array index
// var number = [10,20,30];
// var findIndex = number.indexOf(20);
// console.log(findIndex)

// // Array Value Replace Or Set 
//  var num = [30,50,80,90];

// num[1] = 250;
// console.log(num)

// var name = ['biplob', 'bipu', 'jabery']
// console.log(name[1]);


// Calculate Facturial of a number Using for Loop-------------
// 7! = 7 x 6 x 5 x 4 x 3 x 2 x 1
let facturial = 1
for(var i = 1; i <=7; i++){
    facturial = facturial* i;
}
console.log(facturial)

// Recalculate factorial multiple times using Function--------

// function getFacturial(number){
//     let initialFactorialValue = 1;

//     for(let i = 1; i <= number; i ++){
//         initialFactorialValue = initialFactorialValue * i;
//     }

//     console.log(initialFactorialValue);

// function getFacturial(number){
//     let initialFactorialValue = 1;

//     for(let i = 1; i <= number; i ++){
//         initialFactorialValue = initialFactorialValue * i;
//     }

//     console.log(initialFactorialValue);
// }

function newFacturial(num){
    let defaultFacturial = 1;

    for(let i = 1; i <= num; i ++){
        defaultFacturial = defaultFacturial * i;
    }

    console.log(defaultFacturial)
}

getFacturial(10)