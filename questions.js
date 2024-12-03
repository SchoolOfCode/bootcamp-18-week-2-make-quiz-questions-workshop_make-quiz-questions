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
    options: ["Alien", "Crab", "Dog"],
    correct_option: 1,
    correct_explanation: "It's alwyas best to be not get stuck in the bucket",

    question_text: "Perfection is the enemy of...?",
    question_type: "multiple_choice",
    options: ["the state", "Sausage Dogs", "good enough", "Salt & Vinager Crisps"],
    correct_option: 2,
    correct_explanation: "Nothing is ever going to be perfect and you shouldn't get lost trying to make it so.",

    question_text: "What is one of the best ways to learn",
    question_type: "multiple_choice",
    options: ["Read Read Read", "Listening to an Audiobook", "Spaced Repetition"],
    correct_option: 2,
    correct_explanation: "It's alwyas best to be not get stuck in the bucket",
  }
];

// Don't worry about this, we're just exporting the questions
module.exports = questions;
