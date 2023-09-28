function divideFunction(numerator = 0, denominator = 1) {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  }

  return numerator / denominator;
}

export default divideFunction;
