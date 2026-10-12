// Product Inventory & Analytics Dashboard
// Concepts used: variables, operators, conditionals, loops,
// functions & scope, arrays/objects, forEach/filter/map.

// ---------- Helpers ----------
function ask(message, fallback) {
  let value = null;
  try { value = prompt(message, fallback); } catch (e) { /* prompt blocked */ }
  return value === null ? String(fallback) : value;
}

// Category badge: if...else + switch
function getCategory(price) {
  if (price < 50) {
    return "Budget";
  }
  switch (true) {
    case price >= 500:
      return "Premium";
    default:
      return "Standard";
  }
}

// Regular function with local scope
function totalValue(items) {
  let sum = 0;
  for (const item of items) {
    sum += item.price;
  }
  return sum;
}

// Arrow function with default parameters (tax / discount in %)
const withTaxDiscount = (amount, tax = 0, discount = 0) =>
  amount + (amount * tax) / 100 - (amount * discount) / 100;

// ---------- Main program ----------
function runProject() {
  // 1. Data & input initialization
  const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
  ];
  console.log("--- Initializing Inventory System ---");

  for (let attempt = 1; attempt <= 3; attempt++) {
    const name = ask("Enter new product name:", "Monitor").trim();
    const price = Number(ask("Enter product price:", 150));

    // 2 & 3. Validate input; continue on bad data, break on success
    if (name === "" || isNaN(price) || price <= 0) {
      console.log("Invalid input (attempt " + attempt + "). Try again.");
      continue;
    }
    inventory.push({ name: name, price: price });
    console.log('[Prompt executed: User adds "' + name + '" at "$' + price + '"]');
    break;
  }

  // 5. Array methods
  console.log("\n--- Processing Inventory Roster (forEach) ---");
  inventory.forEach(item => {
    console.log("* Item: " + item.name + " ($" + item.price + ") -> Category: " + getCategory(item.price));
  });

  console.log("\n--- Financial Analytics ---");
  const total = totalValue(inventory);
  console.log("Total Inventory Value: $" + total);

  const affordable = inventory.filter(i => i.price < 200).map(i => i.name);
  console.log("Filtered Affordable Items (Under $200): " + JSON.stringify(affordable).replace(/,/g, ", "));

  const report = inventory.map(i => i.name.toUpperCase() + ": $" + i.price);
  console.log("Formatted Report List: " + JSON.stringify(report).replace(/,/g, ", "));

  console.log("\nBonus - total with 10% tax and 5% discount: $" + withTaxDiscount(total, 10, 5).toFixed(2));
}

// ---------- Run button: show console output on the page too ----------
document.getElementById("runBtn").addEventListener("click", function () {
  const out = document.getElementById("output");
  const lines = [];
  const original = console.log;
  console.log = function (...args) { lines.push(args.join(" ")); original.apply(console, args); };
  try { runProject(); } catch (e) { lines.push("Error: " + e.message); }
  console.log = original;
  out.textContent = lines.join("\n");
});
