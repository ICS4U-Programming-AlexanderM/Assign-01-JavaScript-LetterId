//  Created by Alexander Matheson
//  Created on 2023-Mar-01
//  Version 1.0
//  Copyright (c) 2023 Alexander Matheson. All rights reserved.
//
//  This program determines if a letter is a vowel or consonant.

const readlineSync = require('readline-sync');

// Function to determine if a letter is a vowel or a consonant.
function letterId() {
    // Array of all English letters in a specific order.
    // Y is first, followed by all other vowels.
    // The rest are consonants.
    const letters = ['y', 'a', 'e', 'i', 'o', 'u', 'b', 'c', 'd', 'f', 'g',
                     'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't',
                     'v', 'w', 'x', 'z'];
    // Declare variables.
    let counter = 0;
    let userLetter = 'a';
    let stringInput = "";

    // Get input from user.
    stringInput = readlineSync.question("Enter a letter: ");
    // Make string lower case.
    stringInput = stringInput.toLowerCase();
    // Check length of entered string.
    if (stringInput.length !== 1) {
        console.log("Please enter a single letter.");
    } else {
        userLetter = stringInput.charAt(0);
        // Loop to check each letter in array
        while (letters[counter] != userLetter && counter < 25) {
            counter++;
        }
        // Determine and display letter's id.
        if (counter == 0) {
            console.log(userLetter.toUpperCase() + " is both a consonant and a vowel.");
        } else if (counter < 6) {
            console.log(userLetter.toUpperCase() + " is a vowel.");
        } else if (counter < 25){
            console.log(userLetter.toUpperCase() + " is a consonant.");
        } else {
            // For when the end of the array is reached without a match.
            // Error checker replacement (Couldn't get regular error checker to work with char variable type).
            console.log("Invalid input.");
        }
    }
}

// Call the function to determine letter id.
letterId();
