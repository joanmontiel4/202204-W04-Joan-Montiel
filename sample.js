import { strictEquals } from './strict-equals.js';

console.log('(1===1) My function:', strictEquals(1, 1), 'Result:', 1 === 1);
console.log(
    '(NaN===NaN) My function:',
    strictEquals(NaN, NaN),
    'Result:',
    NaN === NaN
); //false Rule Exeption
console.log('(0===-0) My function:', strictEquals(0, -0), 'Result:', 0 === -0); //true Rule Exeption
console.log('(-0===0) My function:', strictEquals(-0, 0), 'Result:', -0 === 0); //true Rule Exeption
console.log(
    "(1==='1') My function:",
    strictEquals(1, '1'),
    'Result:',
    1 === '1'
);
console.log(
    '(true===false) My function:',
    strictEquals(true, false),
    'Result:',
    true === false
);
console.log(
    '(false===false) My function:',
    strictEquals(false, false),
    'Result:',
    false === false
);
console.log(
    "('water'==='oil') My function:",
    strictEquals('water', 'oil'),
    'Result:',
    'water' === 'oil'
);
console.log(
    "([[]]==='') My function:",
    strictEquals([[]], ''),
    'Result:',
    [[]] === ''
);
console.log(
    '(true===[1]) My function:',
    strictEquals(true, [1]),
    'Result:',
    true === [1]
);
console.log(
    '(false == [0]) My function:',
    strictEquals(false, [0]),
    'Result:',
    false === [0]
);
