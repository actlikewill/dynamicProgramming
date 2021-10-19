// get nth fibonacci number
// memoized
function fib(n, memo={}) {
    if (n in memo) return memo[n]
    if (n <= 2) {
        return 1;
    } else {
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
        return memo[n]
    }
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(10));