//callbacks
var x = function(){
    console.log("in X function");
}
var y = function(callback){
    console.log("in y");
    callback();
}
x(y)

//output : in X function