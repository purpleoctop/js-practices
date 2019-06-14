class Countries {

    constructor(url) {
        if (typeof url !== 'string') {
            throw new Error('Please enter the string');
        }
    }

    send(length) {
        if (typeof length !== 'number') {
            throw new Error('Plase enter the number');
        }

        return new Promise((resolve, reject) => {
            get(url + '?length=' + length, (error, meta, body) => {
                if (meta.status !== 200) {
                    return reject(`Status Code:: ${meta.status}`);
                }
                const { data } = JSON.parse(body);
                return resolve(data);
            });
        });
    }

}

const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries';

const countries = new Countries(url);

(async () => {
    try {
        const data = await countries.send(2);
        console.log(data); 
    } catch (error) {
        console.log(error);
    }
})();