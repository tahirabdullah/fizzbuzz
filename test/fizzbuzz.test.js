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
});