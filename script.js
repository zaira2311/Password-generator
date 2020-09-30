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
    '.'
];

// Array of numeric characers to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

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

// Array of uppercase Characters to be included in password
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

//Function to prompt user for password options
function getPasswordOptions() {
// Variable to store length of password from user input
var length = parseInt(
    prompt('How many characters would you like your password to contain?')
);

// Conditional statement to check if password length is a number. Prompts end if this evaluates false
if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
}

// Conditional statement to check if password length is at least 8 charcters long. Prompts end if this evaluates false
if (length < 8) {
    alert('Password length must be least 8 characters');
    return;
}

// Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
if(length < 8) {
    alert('Password length must less than 129 characters');
    return;
}

// Varible to store boolean regarding the inclusion of special characters
var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
);

// Varible to store boolean regarding the inclusion if numeric characters
var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including numeric characters.'
);

// Variable to store boolean regarding the inclusion of lowercase  characters
var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
);

// Variable to store boolean regarding the inclusion of uppercase characters
var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
);

// Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
if (
    hasSpecialCharacters === false &&
    hasNumbericCharacters === false &&
    hasLowerCasedCharacters === flase &&
    hasUpperCasedCharacters === flase
) {
    alert('Must slect at least one character type');
    return;
}

// Object to store user input
var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumbericCharacters: hasNumbericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
};

return passwordOptions;
}

// Function for getting random element from an array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

// Function to generate password as it's being concatenated
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen characters to ensure each will be used
  
}