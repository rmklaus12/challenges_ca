// Core:
// Create a function called vowelCount.
// This function should count the number of the lowercase vowel letters and uppercase vowel letters in the string.
// Then should return the count of both of these

// Take the above file and break it down into React functional components.
// Move each of those components into its own file and export/import them.
// Beast Mode
// Self guided learning
// Download all the images and load them into your components where necessary.
// Beast Mode++
// Self guided learning on React props.
// https://reactjs.org/docs/components-and-props.html
// With this new knowledge how can you refactor your components to be more reusable.

'use strict'

const str = "Today is best day of my LIFE!";
const str1 = "All thE vOwEls ArE spEcIAl";
const str2 = "How now brown cow? Ah, not bad, thanks.";

// Write function here

console.log(vowelsCount(str));
// {lower: 6, upper: 2}

console.log(vowelsCount(str1));
// {lower: 0, upper: 9}

console.log(vowelsCount(str2));
// {lower: 7, upper: 1}