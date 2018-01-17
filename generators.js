// Generators

//Simple Example
console.log("Generators..!!")
function* show1(){
    i="shgn";
    yield i;
    i="mtn";
    yield i;
    i="richa";
    yield i;
}

const p1 = show1();
console.log(p1.next().value)
console.log(p1.next().value)
console.log(p1.next().value)

function* show2(){
    yield 'i m rozan'
    yield 'Live d way u want to live'
    yield 'it\'s u what matters '
    yield 'so i ends with all wht i want to say.!'
}

const p2 = show2()
for(const n of p2){
    console.log(n)
}

