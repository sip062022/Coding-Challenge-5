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

// Task 3: Array Manipulation //

let cartItems = ["yogurt" , "milk" , "cheese"]; // Declares the array
cartItems.push("butter"); // Adds new product 'butter'to the end of the array
cartItems.pop(); // Removes last item from list (butter)
cartItems.unshift("eggs"); // Adds "eggs" to the beginning of the list
cartItems.shift(); // Removes first item from list (eggs)

console.log(`Items in your cart: ${cartItems.join(', ')}`); // Displays the updated list while using the .join() to create spacing

// Task 4: Map Method //

let prices = [100, 200, 300]; // Declares prices array
let discountedPrices = prices.map(price => price * 0.9);  // map method applies 10% discount to each price

console.log(`Discounted Prices: $${discountedPrices.join(', $')}`); // Displays discounted prices using template literal and join(, $) to create proper spacing