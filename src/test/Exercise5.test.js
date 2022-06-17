const checkIfTheFirstLetterIsUppercase = require("../Exercises/Exercise5");

test("exercise 5 checkIfTheFirstLetterIsUppercase", () => {
  expect(checkIfTheFirstLetterIsUppercase("Brasil")).toEqual(true);
  expect(checkIfTheFirstLetterIsUppercase("mobiauto")).toEqual(false);
  expect(checkIfTheFirstLetterIsUppercase("xXx xXx")).toEqual(false);
  expect(checkIfTheFirstLetterIsUppercase("xDD")).toEqual(false);
  expect(checkIfTheFirstLetterIsUppercase("Deu Certo!")).toEqual(true);
});
