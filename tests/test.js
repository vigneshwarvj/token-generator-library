const {
    generateNumericToken,
    generateAlphabeticToken,
    generateAlphanumericToken
} = require('../src/token-generator');

// Generate and log a numeric token
const numericToken = generateNumericToken();
console.log('Generated Numeric Token:', numericToken);

// Generate and log an alphabetic token
const alphabeticToken = generateAlphabeticToken();
console.log('Generated Alphabetic Token:', alphabeticToken);

// Generate and log an alphanumeric token
const alphanumericToken = generateAlphanumericToken();
console.log('Generated Alphanumeric Token:', alphanumericToken);
