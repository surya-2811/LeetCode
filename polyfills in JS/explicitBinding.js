// explicit binding 
let obj ={
    name : "surya",
    age : 24
}

function hi (today, tomorrow){
    return "hi iam " + this.name + " my age is " + this.age +" " +today +tomorrow
}

console.log(hi.call(obj, "today", "tomorrow"))
console.log(hi.apply(obj, ["today", "tomorrow"]))
let bindedfun  = hi.bind(obj, "today", "tomorrow")
console.log(bindedfun())

Function.prototype.myCall = function(context ={}, ...args){
    context.fn = this
    return context.fn(...args)
}
Function.prototype.myApply = function(context ={}, args =[]){
    context.fn = this
    return context.fn(...args)
}
Function.prototype.myBind = function(context ={}, ...args){
    context.fn = this;
    return function (){
        return context.fn(...args)
    }
}

console.log(hi.myCall(obj, "today", "tomorrow"))
console.log(hi.myApply(obj, ["today", "tomorrow"]))
let newbindFun = hi.myBind(obj, "today", "tomorrow")
console.log(newbindFun())