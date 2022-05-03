import { strictEquals } from './strict-equals.js';

console.log(strictEquals([[]], '')); //[[]] == ''  ->true
console.log(true == [1]); //true == [1] ->true
console.log(false == [0]); //false == [0] ->true
