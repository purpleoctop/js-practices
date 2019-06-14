class MyString {
    reverse (string) {
        let str = string.split('');
        let reversed = str.reverse();
        let newstr = reversed.join('');
        return newstr;
    };

    ucFirst (string) {
        let upperCase = string.charAt(0).toUpperCase();
        return upperCase + string.slice(1);
    };

    ucWords (string){
        let items = string.split(' ');
        let newArray = [];
        for(let item of items) {
            let upperfirst = item.charAt(0).toUpperCase();
            newArray.push(upperfirst + item.slice(1));
        }
        return newArray.join(' ');
    }
}

var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'