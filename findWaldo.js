function findWaldo(arr, found) {
  arr.forEach((name, index) => {if (name === "Waldo") actionWhenFound(index)})
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
