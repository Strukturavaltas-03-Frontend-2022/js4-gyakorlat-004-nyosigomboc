function* powersOfTwo() {
  let currentPower = 2;
  while (true) {
    yield currentPower;
    // eslint-disable-next-line no-bitwise
    // currentPower <<= 1; // really, ESlint?
    currentPower *= 2;
  }
}

export default powersOfTwo;
