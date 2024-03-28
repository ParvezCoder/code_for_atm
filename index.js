#! /usr/bin/env node
//parvez coder
import inquirer from "inquirer";
let myBlance = 20000; //Dollor
let myPin = 123;
let answer = await inquirer.prompt({
    name: "pin",
    message: "Enter Your Pin",
    type: "number",
});
if (answer.pin === 123) {
    console.log("your password is correct");
    let operation = await inquirer.prompt([{
            name: "operator",
            type: "list",
            message: "select one operation",
            choices: ["continue for withdraw", "fast cash", "check Your Balance"],
        }]);
    if (operation.operator === "continue for withdraw") {
        // console.log("enter amount");
        let amountAns = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter your Amount",
            }]);
        if (amountAns.amount >= myBlance) {
            console.log(" you have Unsufficiant balance for this transaction");
            console.log(`you can not withdraw more than ${myBlance}`);
        }
        else {
            myBlance -= amountAns.amount;
            console.log("take your Card And Cash.");
            console.log("Your Remaining balance is " + myBlance);
        }
    }
    else if (operation.operator === "check Your Balance") {
        console.log(`your balance is ${myBlance}`);
    }
    else if (operation.operator === "fast cash") {
        let fastAmout = await inquirer.prompt([{
                name: "fast",
                type: "list",
                choices: [1000, 2000, 3000, 4000, 5000]
            }]);
        if (fastAmout.fast === 1000) {
            myBlance -= fastAmout.fast;
            console.log("Take your Cash And Card");
            console.log(`your balance is ${myBlance}`);
        }
        if (fastAmout.fast === 2000) {
            myBlance -= fastAmout.fast;
            console.log("Take your Cash And Card");
            console.log(`your balance is ${myBlance}`);
        }
        if (fastAmout.fast === 3000) {
            myBlance -= fastAmout.fast;
            console.log("Take your Cash And Card");
            console.log(`your balance is ${myBlance}`);
        }
        if (fastAmout.fast === 4000) {
            myBlance -= fastAmout.fast;
            console.log("Take your Cash And Card");
            console.log(`your balance is ${myBlance}`);
        }
        if (fastAmout.fast === 5000) {
            myBlance -= fastAmout.fast;
            console.log("Take your Cash And Card");
            console.log(`your balance is ${myBlance}`);
        }
    }
}
else {
    console.log("You Entered wrong  Pin, Please input right PIN");
}
