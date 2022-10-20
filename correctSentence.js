export default function correctSentence(text) {
  if (!text) return text
  var textUpperCase = text.charAt(0).toUpperCase() + text.slice(1)
  if (text[text.length - 1] != '.'){
    textUpperCase += '.'
  } 
  return textUpperCase;
}
