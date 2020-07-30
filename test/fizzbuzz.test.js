//import Example from "../src/example";
import fizzbuzz from "../src/fizzbuzz";
describe('fizzbuzz', () => {
    it("Should take 0 and reteurn 0", () => {
        // const example = Example();
        //expect(example.doAThing()).toEqual(true);
        const output = fizzbuzz(0);
        expect(output).toMatch('0');
    });
});