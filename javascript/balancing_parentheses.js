function balancingParentheses(string) {
  let val = string.split('').reduce((balance, character) => {
    if (character === "(") {
      return balance + 1
    }
    else {
      return balance - 1
    }
  }, 0)

  return Math.abs(val)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
