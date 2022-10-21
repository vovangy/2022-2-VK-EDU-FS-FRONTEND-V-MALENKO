import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman([3, 1, 4, 5])).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(0.00)).toBe('0 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(1024.00)).toBe('1 KB')
  expect(convertBytesToHuman(1048576)).toBe('1 MB')
  expect(convertBytesToHuman(1048576.00)).toBe('1 MB')
  expect(convertBytesToHuman(62375)).toBe('60.91 KB')
  expect(convertBytesToHuman(962375)).toBe('939.82 KB')
  expect(convertBytesToHuman(96237775)).toBe('91.78 MB')
});

