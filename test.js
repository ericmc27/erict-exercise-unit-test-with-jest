const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('add 7 + 3 to be 10', ()=>{
    expect(sum(7,3)).toBe(10);
})


test("One dollar should be 148.72 yens", function(){
    expect(fromDollarToYen(1)).toBe(148.72);
})

test("One euro should be 1.10 dollars", function() {
    expect(fromEuroToDollar(1)).toBe(1.10); 
})

test("One yen should be 0.0051 pounds", function(){
    expect(fromYenToPound(1)).toBe(0.0051)
})