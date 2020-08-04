//import Example from "../src/example";
import fizzbuzz from "../src/fizzbuzz";
describe('fizzbuzz', () => {
    it("Should take 0 and return 0", () => {
        const output = fizzbuzz(0);
        expect(output).toMatch('0');
    });

    it("Should take 1 and return 1", () => {
        const output = fizzbuzz(1);
        expect(output).toMatch('1');
    });

    it.each([
        [3],
        [6],
        [9],
      ])("Should take %i as input and return 'Fizz'", (input) => {
        const output = fizzbuzz(input);
        expect(output).toMatch('Fizz');
      });

    it.each([
        [5]
        ])("Shoudl take %i as input and return 'Buzz'", (input) => {
            const output = fizzbuzz(input);
            expect(output).toMatch('Buzz');
        });
});