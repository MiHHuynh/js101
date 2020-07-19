const readline = require('readline-sync');

function validNumber(number) {
  return number.trim() !== '' || !Number.isNaN(Number(number)) || Number(number) < 0;
}

function getValueFromUser(prompt) {
  let value = readline.question(`=> ${prompt}`);
  while (!validNumber(value)) {
    prompt('=> Please enter a valid number: ');
    value = readline.question(prompt);
  }
  return value;
}

function getLoanAmount() {
  const prompt = 'What is your loan amount?: ';
  const loanAmount = getValueFromUser(prompt);
  return Number(loanAmount);
}

function getAnnualPercentageRate() {
  // More often than not, interest rates are given as APRs.
  const prompt = 'What is your Annual Percentage Rate (APR)? Input 5 for 5%, 10 for 10%, etc.: ';
  const annualPercentageRate = getValueFromUser(prompt);
  return Number(annualPercentageRate);
}

function getLoanDurationInYears() {
  const prompt = 'What is your loan duration in years?: ';
  const loanDurationInYears = getValueFromUser(prompt);
  return Number(loanDurationInYears);
}

const loanAmount = getLoanAmount();
const loanDurationInYears = getLoanDurationInYears();
const loanDurationInMonths = loanDurationInYears * 12;
const annualInterestRate = getAnnualPercentageRate() * 100;
const monthlyInterestRate = annualInterestRate / 12;
const monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));

console.log(`\n\nMonthly Payment: \t\t$${monthlyPayment.toFixed(2)}`);
console.log(`Monthly Interest Rate: \t\t${monthlyInterestRate.toFixed(3)}%`);
console.log(`Loan Duration (months): \t${loanDurationInYears}`);