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

    add(user) {
        if (typeof user !== 'object') {
            throw new Error('First parameter must be an object!');
        }

        if (typeof user.name !== 'string') {
            throw new Error('Name yype must be a string and also required !');
        }

        return this._customers.push(user);
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