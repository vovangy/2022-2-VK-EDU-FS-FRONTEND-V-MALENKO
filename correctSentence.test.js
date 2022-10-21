import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence("stop")).toBe("Stop.")
  expect(correctSentence(">>aa...")).toBe(">>aa...")
  expect(correctSentence("..")).toBe("..")
  expect(correctSentence("z")).toBe("Z.")
})

test('returns empty line if line is empty', () => {
  expect(correctSentence("")).toBe("")
})
