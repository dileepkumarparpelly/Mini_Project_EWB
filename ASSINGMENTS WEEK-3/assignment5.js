// Assignment 5: Function Architecture and Scope

// Standard function with default parameters
function areaStandard(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const areaArrow = (length = 5, width = 4) => length * width;

console.log("Standard Function Area (Default 5x4): " + areaStandard());
console.log("Arrow Function Area (Custom 10x3): " + areaArrow(10, 3));

// Block scope demonstration
{
  let blockVar = "I live inside the block";
}
try {
  console.log(blockVar);
} catch (e) {
  console.log(`Scope Test Error: ${e.name}: ${e.message} (when accessed outside block)`);
}
