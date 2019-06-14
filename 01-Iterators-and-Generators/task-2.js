class Customers {
    constructor() {
        this._customers = [];
    }

    *[Symbol.iterator]() {
        for (const item of this._customers) {
            if (item.verified) {
                yield item;
            }
        }
    }

   
    add(person) {

        if (typeof person !== 'object') {
            throw new Error('The input should be object');
        }

        if (typeof person.name !== 'string') {
            throw new Error('The name must be string');
        }

        return this._customers.push(person);
    }

}

const customers = new Customers();

customers.add({ name: 'Alex' });
customers.add({ name: 'Victor' });
customers.add({ name: 'Marcus' });
customers.add({ name: 'Andrii', verified: true });
customers.add({ name: 'Marco', verified: true });
customers.add({ name: 'Oliver' });
customers.add({ name: 'Lisa', verified: true });
customers.add({ name: 'John' });
customers.add({ name: 'Ivan', verified: true });

for (const customer of customers) {
    console.log(customer);
}