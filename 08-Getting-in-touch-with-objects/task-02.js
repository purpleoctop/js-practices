const person = {
    get salary(){
        if(this.rate==undefined || this.rate == false ){
            return 0;
        }
        let today=new Date;
        let day=today.getDate();
        return day*this.rate;
    },
    
    set() {
        throw new Error('Salary can not be chnged');
    }
}

Object.defineProperty(person, 

    'rate',{
        enumerable:false,
        configurable:false,
        writable:true
    
})

person.rate=30;
console.log(person.salary);
