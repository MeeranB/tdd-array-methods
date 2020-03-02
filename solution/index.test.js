// testing map()

test("Map should return an array with the same number of elements", t => {
  const result = map([1], () => {});
  t.equal(result.length, 1);
});

test("Map should apply function argument array elements", t => {
  const result = map([1], x => x + 1);
  const expected = [2];
  t.equal(result[0], expected[0], "Array item should have 1 added to it");
});

test("Map should apply function argument to every array element", t => {
  const result = map([1, 2, 3], x => x + 1);
  t.equal(result[0], 2);
  t.equal(result[1], 3);
  t.equal(result[2], 4);
});

test("Map should pass item index in to function argument", t => {
  const result = map(["hello", "world"], (word, index) => `${word}-${index}`);
  t.equal(result[0], "hello-0");
  t.equal(result[1], "world-1");
});
