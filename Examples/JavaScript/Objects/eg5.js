//call
let l = {
    firstName : "Yash",
    lastName : "Soni",
    display : function(){
        console.log(this)
        console.log(this.firstName + " " + this.lastName)
        console.log("-----------------------------------")
    }
}

l.display()

//  function borrowing
let l2 = {
    firstName : "Yash",
    lastName : "Soni"
}

l.display.call(l2)

let l3 = {
    firstName : "Yash",
    lastName : "SOni"
}

l.display.call(l3)

console.log(l)