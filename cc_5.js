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

// Task 5: Filter Method //

let inventory = [5, 0, 12, 8, 0]; // Declares inventory array
let inStock = inventory.filter(inventory => inventory > 0); // Uses .filter() to remove stock with inventory of 0

console.log("Inventory:", inStock); // Displays in-stock inventory with stock > 0

// Task 6: Reduce Method //

let sales = [500, 300, 200, 400]; // Declares sales array
let total = sales.reduce((sum, sales) => sum + sales, 0); // Uses .reduce() to sum sales numbers from the array
console.log("Total Sales:", total); // Displays total sales

// Task 7: find() Method //

let customers = ["Alice", "Bob", "Charlie", "David"]; // Declares customers array
let person = customers.find(customers => customers == "Charlie"); // Uses .find() to find string that matches "Charlie"
console.log("Customer:" , person); // Displays the name "Charlie"

// Task 8: Tax Calculation //

function calculateTax(amount, taxRate) {  // defines the function and its variables
    return amount*taxRate; // defines formula to be used
}

console.log(`Tax Amount: $${calculateTax(49,0.07)}`);  // Displays result at a template literal and inserts the formula's values directly into the console.log

// Task 9: Function Expression //

function applyDiscount(price, discount) { // defines the function and its variables
    return price*(1-discount); // defines the formula, with 1-discount because this creates the actual sales price post-discount
}

console.log(`Discounted Price: $${applyDiscount(200,.10)}`); // Displays results as temlpate literal and inserts variables into the formula to get the discounted price

// Task 10: Arrow Function //

const calculatePoints = (purchaseAmount) => purchaseAmount*0.1; // Defines the arrow function and that the points earned are the purchaseAmout/10

console.log(`Points Earned: ${calculatePoints(89)}`); // Displays the points earned and inserts the 89$ spent into the formula for 8.9 points earned