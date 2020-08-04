export default function fizzbuzz(input){
    if (![0,1].includes(input) && input%3 == 0) {
        return 'Fizz';
    }

    if (![0,1].includes(input) && input%5 == 0) {
        return 'Buzz';
    }
    return `${input}`;
}