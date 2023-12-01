const readline = require("readline");

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculate = () => {
  read.question("Input number: ", (a) => {
    read.question("Input number: ", (b) => {
      console.log(a * b);
    });
  });
};

// calculate()

const whatsYourName = () => {
    read.question("Enter Your Name: ", name => {
        read.question("Enter your age: ", age => {
            console.log(`So your name is ${name} and your age is ${age}`);
            confirmDetails();
        });
    });
};

const confirmDetails = () => {
    read.question("Is this correct? (yes/no): ", answer => {
        if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
            read.close();
        } else {
            whatsYourName();
        }
    });
};

whatsYourName()