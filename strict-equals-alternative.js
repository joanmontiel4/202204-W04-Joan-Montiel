export function strictEqualsAlternative(a, b) {
    if (typeof a != typeof b) {
        return false;
    }
    if (
        (1 / a == Infinity && 1 / b == -Infinity) ||
        (1 / b == Infinity && 1 / a == -Infinity)
    ) {
        return true;
    }
    if (Number.isNaN(a) == true || Number.isNaN(b) == true) {
        return false;
    }
    return a == b;
}
