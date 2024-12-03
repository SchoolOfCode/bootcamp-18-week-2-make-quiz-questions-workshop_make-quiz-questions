// questions.js

const questions = [
  {
    question_text:
      "Which of the following is NOT a primitive data type in JavaScript?",
    question_type: "multiple_choice",
    options: ["Boolean", "String", "Array", "Number"],
    correct_option: 2,
    correct_explanation: "Array is not a primitive data type; it is an object.",
  },
  {
    question_text: "What does the `===` operator check?",
    question_type: "multiple_choice",
    options: [
      "Equality of value and type",
      "Equality of value only",
      "Inequality of value",
      "Assignment of a value",
    ],
    correct_option: 0,
    correct_explanation:
      "The '===' operator checks for strict equality, meaning both the value and type must match.",
  },
  {
    question_text: "What is the output of: `console.log(1 + '1')`?",
    question_type: "multiple_choice",
    options: ["'2'", "'11'", "2", "NaN"],
    correct_option: 1,
    correct_explanation:
      "JavaScript performs string concatenation when a number is added to a string, resulting in '11'.",
  },
  {
    question_text: "What does the `typeof` operator return for an array?",
    question_type: "multiple_choice",
    options: ["'array'", "'object'", "'undefined'", "'function'"],
    correct_option: 1,
    correct_explanation:
      "In JavaScript, arrays are technically objects, so 'typeof' returns 'object'.",
  },
];

// Don't worry about this, we're just exporting the questions
module.exports = questions;
