export default function fizzbuzz(input){
    if (![0,1].includes(input) && input%3 == 0) {
        return 'Fizz';
    }

    return `${input}`;
}