export function strictEquals(a, b) {
    if (Number.isNaN(a) == true || Number.isNaN(b) == true) {
        return false;
    }
    if (1 / a == Infinity && 1 / b == Infinity) {
        return true;
    }
    if (Object.is(a, b)) {
        return true;
    } else {
        return false;
    }
}
