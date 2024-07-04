# Token Generator

[![npm version](https://img.shields.io/npm/v/random-string-generator.svg)](https://www.npmjs.com/package/token-generator-library)
[![license](https://img.shields.io/npm/l/random-string-generator.svg)](https://github.com/vigneshwarvj/token-generator-library-npm/blob/main/LICENSE)

`token-generator` is a Node.js library that generates unique tokens consisting of numbers, alphabets, or both. Each generated token is guaranteed to be unique and non-repetitive.

## Features

- **Generate Numeric Tokens**: Create unique tokens composed of numbers.
- **Generate Alphabetic Tokens**: Create unique tokens composed of alphabets (both uppercase and lowercase).
- **Generate Alphanumeric Tokens**: Create unique tokens composed of both numbers and alphabets.
- **Uniqueness**: Ensures that each token generated is unique and won't be repeated.

## Installation

Install the library using npm:

```bash
npm install token-generator-library
```

## Usage

### Import the Library

First, import the token-generator library in your project:

```javascript
const {
    generateNumericToken,
    generateAlphabeticToken,
    generateAlphanumericToken
} = require('token-generator');
```
## Generate Tokens
You can generate different types of tokens as needed:

### Generate a Numeric Token
```javascript
const numericToken = generateNumericToken();
console.log('Generated Numeric Token:', numericToken);
```
### Generate an Alphabetic Token
```javascript
const alphabeticToken = generateAlphabeticToken();
console.log('Generated Alphabetic Token:', alphabeticToken);
```
### Generate an Alphanumeric Token
```javascript
const alphanumericToken = generateAlphanumericToken();
console.log('Generated Alphanumeric Token:', alphanumericToken);
```

### Token Length
You can specify the length of the token by passing an optional parameter:
```javascript
const customLengthToken = generateAlphanumericToken(15);
console.log('Generated Custom Length Token:', customLengthToken);
```

## Example
Here is a complete example of generating different types of tokens:
```javascript
const {
    generateNumericToken,
    generateAlphabeticToken,
    generateAlphanumericToken
} = require('token-generator');

// Generate and log a numeric token
const numericToken = generateNumericToken();
console.log('Generated Numeric Token:', numericToken); // 6482060761

// Generate and log an alphabetic token
const alphabeticToken = generateAlphabeticToken();
console.log('Generated Alphabetic Token:', alphabeticToken); // yirSsIpCNo

// Generate and log an alphanumeric token
const alphanumericToken = generateAlphanumericToken();
console.log('Generated Alphanumeric Token:', alphanumericToken); // UmsGZL7I1w

// Generate and log a custom length alphanumeric token
const customLengthToken = generateAlphanumericToken(15);
console.log('Generated Custom Length Token:', customLengthToken); // TzrEII4kFV44uk0
```
## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries or collaboration opportunities, feel free to reach out:

- **LinkedIn:ℹ️** [Vigneshwar Vijayakumar (VV)](https://in.linkedin.com/in/vigneshwar-vijayakumar-58583724b)
- **Email:📧** [Mail me](mailto:vigneshwarjosephite@gmail.com)

Happy Coding!
