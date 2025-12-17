import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../wordhistory/css/wordhistory.css";
import Signupdata from "../Componets/Api/Signupapi";
import Logindata from "../Componets/Api/Logindata";
import Post from "../Componets/Api/Post";

/* ================= ARRAY MAX NUMBER ================= */

let numbersMax = [10, 25, 5, 70, 45];
let max = numbersMax[0];

for (let i = 1; i < numbersMax.length; i++) {
  if (numbersMax[i] > max) {
    max = numbersMax[i];
  }
}
console.log("Maximum number:", max);

/* ================= EVEN / ODD ================= */

function checkNumber(num) {
  if (num % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

checkNumber(5);
checkNumber(8);

/* ================= TYPE CONVERSION ================= */

let name = "vikas";
let age = 20;
let isStudent = true;

let value = 20;
console.log(typeof value); // number
value = value.toString();
console.log(typeof value); // string

/* ================= FILTER NUMBERS ================= */

let numbers = [5, 10, 15, 20, 25];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i]);
  }
}

/* ================= == vs === ================= */

let a = 100;
let b = "20";

if (a == b) {
  console.log("Equal with ==");
} else if (a === b) {
  console.log("Equal with ===");
} else {
  console.log("Not Equal");
}

/* ================= EVEN NUMBERS ================= */

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/* ================= ARRAY BASICS ================= */

let list = [1, 2, 3, 4, 5];
console.log(list);
console.log(list[0]);
console.log(list[list.length - 1]);

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

list.push(6);
console.log(list);

list.pop();
console.log(list);

let fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana"));

/* ================= REACT COMPONENT ================= */

const Home = () => {
  return (
    <>
      <Post />
      {/* <Signupdata />
      <Logindata /> */}
    </>
  );
};

export default Home;
