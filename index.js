class MyClass {
    constructor(p1){
        this.prop = p1
        this.method = ()=>{
            //i am method
        }
    }
}

const instance = new MyClass(4)
console.log(instance);


////////////////Constructor with prototype /////////////////

class MyClass {
    constructor(p1){
        this.prop = p1
    }

    method (){
        //i am method of prototype
    }
}

const instance = new MyClass(4)
console.log(instance.__proto__);
