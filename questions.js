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
    question_text:
      'What room do you start in according to the "Disney Ideation"?',
    question_type: "multiple_choice",
    options: ["Bathroom", "Dreamer", "Critic", "Realistic"],
    correct_option: 1,
    correct_explanation: "The Dreamer room is the first room all ideas with no limit.",
  },
  {
    question_text:
      "What is the first step in Computational Thinking?",
    question_type: "multiple_choice",
    options: ["Write an algorithm", "Abstract Away", "Debug", "Understand the Problem"],
    correct_option: 3,
    correct_explanation: "Without understanding the problem we don't know how to solve it.",
  },
  {
    question_text:
      "What's the name of probably the most common modern workflow?",
    question_type: "multiple_choice",
    options: ["Fluid", "Waterfall", "Agile", "Stubborn"],
    correct_option: 2,
    correct_explanation: "It is Agile Workflow, which works in a cyclic manner where there's frequent feedback and reaction cycles thus preferred in modern teams.",
  },
];

// Don't worry about this, we're just exporting the questions
module.exports = questions;
