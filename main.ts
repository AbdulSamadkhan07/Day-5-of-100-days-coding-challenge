// Day 05 of 100dayscodingchallenge

// Question 20

// Array of programming languages
let programmingLanguages = ["JavaScript", "TypeScript", "Python", "Java", "C++"];

// Print the array
console.log("Programming Languages:", programmingLanguages);

// Question 21

// Define a TypeScript interface for Country
interface Country {
    name: string;
    capital: string;
    population: number;
    language: string;
}

// Create objects for different countries
let Pakistan: Country = { name: "Pakistan", capital: "Islamabad", population: 240000000, language: "Urdu" };
let france: Country = { name: "France", capital: "Paris", population: 67010000, language: "French" };
let usa: Country = { name: "United States", capital: "Washington, D.C.", population: 331000000, language: "English" };
let india: Country = { name: "India", capital: "New Delhi", population: 1380004385, language: "Hindi" };

// Print information about the countries
console.log("Country Information:");
console.log(Pakistan);
console.log(france);
console.log(usa);
console.log(india);