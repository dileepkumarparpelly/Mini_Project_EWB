// Assignment 3: Conditional Logic Implementation
const score = 85;

// if...else version
let grade;
if (score >= 90) { grade = "A"; }
else if (score >= 80) { grade = "B"; }
else if (score >= 70) { grade = "C"; }
else if (score >= 60) { grade = "D"; }
else { grade = "F"; }

// switch version
let switchGrade;
switch (Math.floor(score / 10)) {
  case 10:
  case 9: switchGrade = "A"; break;
  case 8: switchGrade = "B"; break;
  case 7: switchGrade = "C"; break;
  case 6: switchGrade = "D"; break;
  default: switchGrade = "F";
}

// ternary operator
const status = score >= 40 ? "Passed" : "Failed";

console.log("Score: " + score);
console.log("Grade: " + switchGrade + " (if...else gives: " + grade + ")");
console.log("Status: " + status);
