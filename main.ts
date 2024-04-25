#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance: number = 25000;
let myPin: number = 344551;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your correct pin code",
    type: "number",
  },
]);



if (pinAnswer.pin === myPin) {
  console.log("correct pin code: successfully login..");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "what you want to do",
      type: "list",
      choices: ["withdraw", "fast cash", "check balance"],
    },
  ]);



  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
      
    ]);

    if (amountAns.amount > myBalance) {
      console.log("insufficient balance");
    } else {
      myBalance -= amountAns.amount;

      console.log(`your remaining balance is: Rs/-${myBalance}`);
    }
  }
  
  else if (operationAns.operation === "check balance") {
    console.log(`your current balance is : Rs/-${myBalance}`);
  }

  if (operationAns.operation === "fast cash") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "select your amount",
        type: "list",
        choices: ["10000", "15000", "20000", "25000", "30000"],
      },
    ]);

    if (amountAns.amount > myBalance) {
      console.log("insufficient balance");
    } else {
      myBalance -= amountAns.amount;

      console.log(`your remaining balance is: Rs/-${myBalance}`);
    }
  }
} else {
  console.log("pin code is incorrect! Try again");
}
