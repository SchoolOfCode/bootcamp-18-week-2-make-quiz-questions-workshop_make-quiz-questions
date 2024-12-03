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
    question_text: "What is it best not to be?",
    question_type: "multiple_choice",
    options: ["Alien", "Crab", "Dog", "mouse"],
    correct_option: 1,
    correct_explanation: "It's alwyas best to be not get stuck in the bucket",
  },
  {
    question_text: "Perfection is the enemy of...?",
    question_type: "multiple_choice",
    options: [
      "the state",
      "Sausage Dogs",
      "good enough",
      "Salt & Vinager Crisps",
    ],
    correct_option: 2,
    correct_explanation:
      "Nothing is ever going to be perfect and you shouldn't get lost trying to make it so.",
  },
  {
    question_text: "What is one of the best ways to learn",
    question_type: "multiple_choice",
    options: [
      "Read Read Read",
      "Listening to an Audiobook",
      "Spaced Repetition",
      "Alcohol",
    ],
    correct_option: 2,
    correct_explanation: "It's alwyas best to be not get stuck in the bucket",
  },

  {
    question_text:
      'What room do you start in according to the "Disney Ideation"?',
    question_type: "multiple_choice",
    options: ["Bathroom", "Dreamer", "Critic", "Realistic"],
    correct_option: 1,
    correct_explanation:
      "The Dreamer room is the first room all ideas with no limit.",
  },
  {
    question_text: "What is the first step in Computational Thinking?",
    question_type: "multiple_choice",
    options: [
      "Write an algorithm",
      "Abstract Away",
      "Debug",
      "Understand the Problem",
    ],
    correct_option: 3,
    correct_explanation:
      "Without understanding the problem we don't know how to solve it.",
  },
  {
    question_text:
      "What's the name of probably the most common modern workflow?",
    question_type: "multiple_choice",
    options: ["Fluid", "Waterfall", "Agile", "Stubborn"],
    correct_option: 2,
    correct_explanation:
      "It is Agile Workflow, which works in a cyclic manner where there's frequent feedback and reaction cycles thus preferred in modern teams.",
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
