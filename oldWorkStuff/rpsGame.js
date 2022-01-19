const inquirer = require('inquirer')

const choices = ["rock", "paper", "scissors"]


inquirer.prompt({
  type: 'list',
  name: 'playerChoice',
  message: 'Select a choice:',
  choices: ['rock', 'paper', 'scissors']
})
  .then(data => {
    const user = data.choice

    const computer = choices[Math.floor(Math.random() * choices.length)]

    console.log(`You chose ${user} and the computer chose ${computer}`)

    if (user === choices) {
      console.log('You tied!')
    }
    else if ((user == 'rock' && computer === 'scissors') || (user === 'scissors' && computer === 'paper') || (user === 'paper' && computer === 'rock')){
      console.log('You won!')
    }
    else {
      console.log('You lost!')
    }
  })
  .catch(err => console.log(err))

