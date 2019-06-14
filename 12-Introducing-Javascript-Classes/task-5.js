class Validator {

    isEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    isDomain(url) {
        var re = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
        return re.test(String(url).toLowerCase());
    }
    isDate(date) {
        return !isNaN(Date.parse(date));
    }
    isPhone(phone) {
        let re = /^\+([0-9]+)+\s+\([0-9]+\)+\s+([0-9]+-[0-9]+-[0-9])+[0-9]/;
        return re.test(String(phone).toLowerCase());
    }
}
var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));//true
console.log(validator.isDomain('jshtml.net'));//true
console.log(validator.isDate('12.05.2020'));//true
console.log(validator.isPhone('+995 (29) 10-12-87')); //true