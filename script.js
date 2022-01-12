const fs = require('fs');
const path = require('path');

const testDataDirectory = './test_data';

//read directory content
const testDataFiles = fs.readdirSync(testDataDirectory)
    .map((fileName) => {
        return path.join(testDataDirectory, fileName)
    })
    .filter((fileName) => {
        return fs.lstatSync(fileName).isFile()
    });

const getMostFrequentTransactingCustomer = (transactions_csv_file_path, n) => {
     //wrap it in a promise to ensure that code waits for function to complete
    return new Promise(function(resolve, reject) {
        fs.readFile(transactions_csv_file_path, 'utf8' , (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            // console.log(data);
            const headers = ['Customer ID', 'Transaction Amount', 'Transaction Date'];
            const lines = data.split("\n");//create array from string
            const transactions = [];

            lines.forEach((row, index) => {
                if (index === 0 || row === '') return;
                //create key value pairs and push to array
                const transaction = headers.reduce((previous, current, index) => {
                    return {...previous, [current]: row.split(',')[index]};
                }, {});

                transactions.push(transaction);
            });

            // console.log(transactions);
            //getting unique customer IDs
            const customers = [...new Set(transactions.map(item => item?.["Customer ID"]))];
            
            //LOOK FOR HITS FOR EACH CUSTOMER ID
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
            //Extract n number of customer
            const output = results
                .map(x => x?.['Customer ID'])
                .slice(0, n)
                .sort();

            resolve(output);//save output to promise
        });
    });
}

getMostFrequentTransactingCustomer(testDataFiles[1], 5)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.debug(error);
    });

  