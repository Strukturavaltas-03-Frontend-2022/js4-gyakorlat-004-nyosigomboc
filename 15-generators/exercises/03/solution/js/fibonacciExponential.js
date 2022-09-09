function* fibonacci() {
  let a = 1;
  yield a;
  let b = 1;
  yield b;
  while (true) {
    [a, b] = [b, a + b];
    yield b;
  }
}

const fibonacciIterator = fibonacci();

/* // already done
const fibonacciExponential = () => {
  const { value } = fibonacciIterator.next();
  return value * value;
};
*/

const fibonacciExponential = () => {
  const { value } = fibonacciIterator.next();
  return value ** 2;
};

export default fibonacciExponential;
