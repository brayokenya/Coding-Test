const fs = require('fs');
const path = require('path');

const testDataDirectory = './test_data';

const testDataFiles = fs.readdirSync(testDataDirectory)
    .map((fileName) => {
        return path.join(testDataDirectory, fileName)
    })
    .filter((fileName) => {
        return fs.lstatSync(fileName).isFile()
    });

const getMostFrequentTransactingCustomer = (transactions_csv_file_path, n) => {
    return new Promise(function(resolve, reject) {
        fs.readFile(transactions_csv_file_path, 'utf8' , (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            // console.log(data);
            const headers = ['Customer ID', 'Transaction Amount', 'Transaction Date'];
            const lines = data.split("\n");
            const transactions = [];

            lines.forEach((row, index) => {
                if (index === 0 || row === '') return;

                const transaction = headers.reduce((previous, current, index) => {
                    return {...previous, [current]: row.split(',')[index]};
                }, {});

                transactions.push(transaction);
            });

            // console.log(transactions);
            const customers = [...new Set(transactions.map(item => item?.["Customer ID"]))];

            const results = customers
                .map((item) => {
                    const obj = {};

                    obj['Customer ID'] = item;
                    obj['hits'] = transactions.filter((x) => x['Customer ID'] === item).length;

                    return obj;
                })
                .sort((a, b) => {
                    return b?.hits - a?.hits;
                });

            // console.log(results);
            const output = results
                .map(x => x?.['Customer ID'])
                .slice(0, n)
                .sort();

            resolve(output);
        });
    });
}

getMostFrequentTransactingCustomer(testDataFiles[1], 3)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.debug(error);
    });

  