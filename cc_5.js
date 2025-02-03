 // Task 1: Object Properties //

 let customer = {name: "John Doe", age: 35, email: "john.doe@email.com"}; // Declares customer object
 for (let property in customer) {  // Declares for loop for the properties within customer object
    console.log(`${property}: ${customer[property]}`)  // Displays property followed by associated property
 };

 // Task 2: Object Methods //

 let order = {  // Declare order object
    orderID: 12345,  // Declares the orderID property
    totalAmount: 150,  // Declares the totalAmount property
    status: "Processing", // Declares the status property
    displayOrder: function() {  // Declares a method displayOrder
         return `Order ${this.orderID} owes $${this.totalAmount}. The order status is: ${this.status}`;  // States that for this object, return the properties, which are displayed as a template literal.
    }
};  

console.log(order.displayOrder());  // Displays the results from the method.