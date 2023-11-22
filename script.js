// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

// Function to prompt user for password options
function getPasswordOptions() {
    let passLength;
    do {
        passLength = parseInt(prompt('Please enter password length between 8 and 128'));
    } while (passLength < 8 || passLength > 128);

    alert('Please choose what character types you would like to include');
    let lowerCase;
    let upperCase;
    let numbers;
    let specChars;

    do {
        alert('Please choose at least one character type.');
        lowerCase = confirm('Would you like to include lowercase characters?');
        upperCase = confirm('Would you like to include UPPERCASE characters?');
        numbers = confirm('Would you like to include numbers?');
        specChars = confirm('Would you like to include special characters? ($@%&*, etc)');
    } while (!lowerCase && !upperCase && !numbers && !specChars);

    return {passLength, lowerCase, upperCase, numbers, specChars};
}

let {passLength, lowerCase, upperCase, numbers, specChars} = getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
    let password = [];
    let characters = lowerCasedCharacters;
    if (upperCase) characters = characters.concat(upperCasedCharacters);
    if (numbers) characters = characters.concat(numericCharacters);
    if (specChars) characters = characters.concat(specialCharacters);

    console.log(upperCase);
    console.log(numbers);
    console.log(characters);
    for (let i = 0; i < passLength; i++) {
        password.push(getRandom(characters));
    }

    return password.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
