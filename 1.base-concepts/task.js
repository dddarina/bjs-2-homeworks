"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2 * a));
    arr.push((-b - Math.sqrt(discriminant) )/(2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthPercent = percent / 100 / 12;
  const bankLoan = amount - contribution;
  const monthlyPayment = bankLoan * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  const totalAmount = monthlyPayment * countMonths;
  return Number(totalAmount.toFixed(2));
}

