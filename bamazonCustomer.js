// Require mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');

// Create Connection and Password
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "root",
    database: "bamazon_db"
});

// Test Connection
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    initializeBamazon();
});

// Initialize function
function initializeBamazon() {
    inquirer
        .prompt([{
            type: "input",
            message: "What is the ID of the item you would like to buy?",
            name: "id"
        }, {
            type: "input",
            message: "How many units of this item would you like to buy?",
            name: "quantity"
        }, ])

        .then(function (inquirerResponse) {
            var item = inquirerResponse.id;
            var units = parseFloat(inquirerResponse.quantity);
            readProducts(item, units);
        });
}
// Reads product, determines if insufficient quantity
function readProducts(id, units) {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        id--;

        if (units > res[id].stock_quantity) {
            console.log("Insuffient Quantity, please try again");
        } else {
            var expense = res[id].price * units;
            units = res[id].stock_quantity - units;

            updateProduct(id, units);
            console.log("Total cost is: " + expense);
        }

        connection.end();
    });

}

// Updates product
function updateProduct(id, units) {
    console.log("Updating store inventory...\n");
    id++;

    var query = connection.query(
        "UPDATE products SET ? WHERE ?", [{
                stock_quantity: units
            },
            {
                item_id: id
            }
        ],
        function (err, res) {
        }
    );
    // Logs the query 
    console.log(query.sql);
}
