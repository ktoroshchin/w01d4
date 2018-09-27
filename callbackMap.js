var words = ["ground", "control", "to", "major", "tom"];
function map(arr, callback) {
  var output = [];
  arr.forEach(function(val){
    output.push(callback(val))
  })
  return output;
}
console.log(map(words, length));
console.log(map(words, toUpperCase));
console.log(map(words, reverse));





function length(word){
  return word.length
}

function toUpperCase(word){
  return word.toUpperCase()
}

function reverse(word){
  return word.split("").reverse().join("")
}
