// testing map()

test("map() should return an array with the same number of elements", t => {
  const result = map([1], () => {});
  t.equal(result.length, 1);
});

test("map() should transform the first element of an array based on the function", t => {
  const result = map([1], item => item + 1);
  const expected = [2];
  t.equal(expected[0], result[0]);
});

test("map() should transform the first two elements of an array based on the function", t => {
  const result = map([1, 2], item => item + 1);
  const expected = [2, 3];
  t.equal(expected[0], result[0]);
  t.equal(expected[1], result[1]);
});

test("map() should transform each element of the array using the fn argument", t => {
  const result = map([1], x => x + 1);
  t.equal(result[0], 2);
});

test("map() should not mutate the original array", t => {
  const input = [1, 2, 3];
  const result = map(input, x => x + 1);
  t.equal(input[1], 2);
  t.equal(input[2], 3);
});
