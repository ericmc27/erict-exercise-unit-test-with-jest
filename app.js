const sum = (num1, num2) =>{
    return num1 + num2;
}


const fromDollarToYen = (dollars) => {
    return dollars * 148.72;
}

const fromEuroToDollar = (euros) =>{
    return euros * 1.10;
}

const fromYenToPound = (yens) => {
    return yens * 0.0051;
}

console.log(sum(7,3))

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};
