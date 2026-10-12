// Assignment 2: Operators, Expressions, and Input Handling
let subtotal = Number(prompt("Enter bill amount:", 100));
let tipPercent = Number(prompt("Enter tip percentage:", 15));

let tip = subtotal * tipPercent / 100;
let total = subtotal;
total += tip;

console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercent}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${total}`);
