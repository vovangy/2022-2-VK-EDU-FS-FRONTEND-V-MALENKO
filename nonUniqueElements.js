export default function nonUniqueElements(data) {
  var arr = []
  let count = 0
  for (let i = 0; i < data.length; i++) {
    count = 0
    for (let j = 0; j < data.length; j++) {
      if (j == i)
        continue
      if (data[i] == data[j])
        count = data[i]
    }
    if (count) {
      arr.push(count)
    }
  } 
  return arr
}
