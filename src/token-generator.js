// token-generator.js

const usedTokens = new Set();

// Note: Once generated token will not be repeat again.

// Generating a token for the length 10
function generateToken(length, chars) {
    let token;
    do {
        token = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            token += chars[randomIndex];
        }
    } while (usedTokens.has(token));
    usedTokens.add(token);
    return token;
}

// Number token
function generateNumericToken(length = 10) {
    const numbers = '0123456789';
    return generateToken(length, numbers);
}

// Alphabetic token
function generateAlphabeticToken(length = 10) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return generateToken(length, alphabets);
}

// AlphaNumeric token
function generateAlphanumericToken(length = 10) {
    const alphanumeric = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return generateToken(length, alphanumeric);
}

module.exports = {
    generateNumericToken,
    generateAlphabeticToken,
    generateAlphanumericToken
};
