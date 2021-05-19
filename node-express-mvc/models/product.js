const fs = require('fs');
const path = require('path');
module.exports = class Product{
    constructor(t) {
        this.title = t;
    }
    save() {
        const dir = path.join(
            path.dirname(require.main.filename),
            'data'
        );
        fs.mkdirSync(dir, { recursive: true });

    
        const p = path.join(dir, 'products.json');
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (fileContent !== undefined) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log("save",err);
            });
        });
    }
    static fetchAll(cb) {
        const p = path.join(
            path.dirname(require.main.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            console.log(err, fileContent);
            if (err || fileContent === undefined) {
                cb([]);
                return;
            }
            cb(JSON.parse(fileContent));
        });
    }
}