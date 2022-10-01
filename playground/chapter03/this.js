console.log(this);
console.log(this === module.exports);
console.log(exports === module.exports);
console.log(this === exports);

function whatIsThis(){
    console.log('function', this === exports, this === global);
    // console.log(this);
}
whatIsThis();

console.log(module)
module.exports = whatIsThis;
console.log(module.exports);
console.log(module);