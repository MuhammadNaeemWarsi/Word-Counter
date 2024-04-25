#! /usr/bin/env node

import inquirer from "inquirer"

let answers: {
    sentence: string 
  } =await inquirer.prompt([
  {
     name:"sentence",
     type:"iput",
     message:"Enter your sentence to count word"

  }
  ])
  let words=answers.sentence.trim().split(" ")
  console.log(words)
  console.log(`your sentence word count is ${words.length}`)
