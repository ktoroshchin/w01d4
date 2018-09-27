function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i, arr.length)
      // console.log(i);   // execute callback
    }
  }
}

function actionWhenFound(index, length) {
  console.log("Found Waldo at index " + index + length );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
