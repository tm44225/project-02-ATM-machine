#!/usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 1234;

console.log("welcome to code with mahnoor ATM machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if(pinAnswer.pin === myPin){
    console.log("pin is correct, login successfully!");

    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdraw amount" , "check balance"]
        }
    ])

    if(operationAnswer.operation === "withdraw amount"){
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message:"Enter the amount to withdraw"
            }
        ])
        if(amountAnswer.amount > myBalance){
            console.log("insufficient balance");
        }
        else{
            myBalance -= amountAnswer.amount;
            console.log(`${amountAnswer.amount} withdraw successfully!`);
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else if(operationAnswer.operation === "check balance"){
        console.log(`your current balance is: ${myBalance}`);
    }
}
else{
    console.log("pin is incorrect! TRY AGAIN");
}