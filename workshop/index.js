function map(array, func) {
  const result = [];
  array.forEach(item => {
    result.push(func(item));
  });
  return result;
}
