export default function convertBytesToHuman(bytes) {
  return parseToString(bytes)
}

function makeStringToHuman(bytes, n, format){
  var bytesFormated = (bytes / 2**n).toFixed(2)
  if (Math.trunc(bytesFormated) == bytesFormated) {
    bytesFormated = Math.trunc(bytesFormated)
  }
  return String(bytesFormated) + format
}

function parseToString(bytes){
  var result = false
  if (typeof bytes == 'number' && bytes >= 0) {
    if (bytes < 2**10){
      result = makeStringToHuman(bytes, 0, " B")
    } else if (bytes < 2**20) {
      result = makeStringToHuman(bytes, 10, " KB")
    } else if (bytes < 2**30){
      result = makeStringToHuman(bytes, 20, " MB")
    } else {
      result = makeStringToHuman(bytes, 30, " GB")
    }
  }
  return result
}

