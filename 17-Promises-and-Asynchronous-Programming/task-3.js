let send = url =>
    new Promise((resolved, rejected) => {
        get(url, (error, data, APIData) => {
            if (data && data.status == 200) {
                const parsedData = JSON.parse(APIData)
                resolved(parsedData);
            } else if (data) {
                rejected(`We have error, status code: ${data.statusCode}`);
            } else {
                rejected(`Oops,here is something wrong`);
            }

        });
    });


const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });