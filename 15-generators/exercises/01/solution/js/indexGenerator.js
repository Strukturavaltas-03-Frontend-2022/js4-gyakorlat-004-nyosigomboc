function* indexGenerator() {
  let index = 1;
  while (true) {
    yield index;
    index += 1;
  }
}

export default indexGenerator;
