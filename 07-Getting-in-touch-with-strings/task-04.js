function extractCurrencyValue(source){
    if(typeof source!=='string'){
        throw new Error('The source should be string');
    }

    var value=Number(source.substring(1));
    console.log(typeof value);
    return value;
}

console.log(extractCurrencyValue('$120')); // 120
