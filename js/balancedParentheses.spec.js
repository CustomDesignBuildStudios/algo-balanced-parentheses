var balancedParentheses = require("./balancedParentheses.js");
const shallowEqualArrays = require("shallow-equal").shallowEqualArrays;


// ```python

// isValid("][") # should return false
// isValid("(({}") # should return false
// isValid("}([]){") # should return false
// isValid("{[()]({})}()") # should return true
// ```

describe("test balancedParentheses", () => {
    test("balancedParentheses([]) == true", () => {
        expect(balancedParentheses("[]")).toBe(true);
    });
    test("balancedParentheses([[]) == false", () => {
        expect(balancedParentheses("[[]")).toBe(false);
    });
    test("balancedParentheses((){}) == true", () => {
        expect(balancedParentheses("(){}")).toBe(true);
    });
    test("balancedParentheses([{}]) == true", () => {
        expect(balancedParentheses("[{}]")).toBe(true);
    });
    test("balancedParentheses([{}][]{}]) == false", () => {
        expect(balancedParentheses("[{}][]{}]")).toBe(false);
    });
    test("balancedParentheses(][) == false", () => {
        expect(balancedParentheses("][")).toBe(false);
    });
    test("balancedParentheses({[()]({})}()) == true", () => {
        expect(balancedParentheses("{[()]({})}()")).toBe(true);
    });
    test("balancedParentheses({[(aasds)]({})}()) == true", () => {
        expect(balancedParentheses("{[()]({})}()")).toBe(true);
    });
});
