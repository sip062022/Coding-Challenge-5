 // Task 1: Object Properties //

 let customer = {name: "John Doe", age: 35, email: "john.doe@email.com"}; // Declares customer object
 for (let property in customer) {  // Declares for loop for the properties within customer object
    console.log(`${property}: ${customer[property]}`)  // Displays property followed by associated property
 };