// Object Class nd Super Class
// When ever you use extends you have to use super()
class Parent extends Object{
    a = 10
    b = 20

    constructor(){
        super()
        console.log(this.a) // 10
        console.log(this.b) // 20
    }
}
new Parent()