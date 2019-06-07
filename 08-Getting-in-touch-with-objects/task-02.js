const person = {
    get salary(){
        if(this.rate==undefined){
            return 0;
        }
        let today=new Date;
        let day=today.getDate();
        return day*this.rate;
    }
    
    
}

Object.defineProperties(person, {

    'rate':{
        enumerable:false,
        configurable:false,
        writable:true
    }
})

person.rate=30;
console.log(person.salary);
