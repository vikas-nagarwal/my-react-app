import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../wordhistory/css/wordhistory.css";
// import Logindata from "../Componets/Api/Logindata"; // ✅ CORRECT
import Signupdata from "../Componets/Api/Signupapi"; // ✅ CORRECT
import Logindata from "../Componets/Api/Logindata";

let list = [1, 2, 3, 4, 5];
console.log(list);

// array fist element print
let lists = [1, 2, 3, 4, 5];
console.log(lists[0]);
console.log(lists[4]);
console.log(lists.length);

// Array ke sabhi elements ko console.log karo (loop use karke)
let vikas = [10, 20, 30, 40, 50];
for (let i = 0; i < vikas.length; i++) {
  console.log(vikas[i]);
}

// Array me ek new element add karo (end me)

let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

// Array se last element remove karo
let arr = [10, 20, 30, 40];

arr.pop();

console.log(arr);
// Output: [10, 20, 30]

// Check karo koi value array me exist karti hai ya nahi
let fruits = ["apple", "banana", "mango"];
let hasBanana = fruits.includes("banana");
console.log(hasBanana); // Output: true
const Home = () => {
  return (
    <>
      <Signupdata />
      <Logindata />
    </>
  );
};

export default Home;
