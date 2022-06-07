const SECRET_NUMBER = 153;

let count = 0;
while (true) {
  const userString = prompt("Enter your number:");
  const userNumber = Number(userString);

  if (userString === "" || userString === null || isNaN(userNumber)) {
    alert("I need your number to keep playing!");
    continue;
  }

  count++;

  if (userNumber === SECRET_NUMBER) {
    alert("Congratulations! It took you " + count + " tries");
    break;
  }
  if (userNumber < SECRET_NUMBER) {
    alert("Your number is smaller then my secret number!");
  }
  if (userNumber > SECRET_NUMBER) {
    alert("Your number is bigger then my secret number!");
  }
}