function makeTea(isCold) {
  if (isCold) {
    let tea = "Make an Ice Tea!"
  } else {
    let tea = "Make a Hot Tea!"
  }
  return tea;
}

console.log(makeTea(false));

/* output
ReferenceError: tea is not defined
*/

/*====================================*/

function getFood() {
  food = "choocolate";
  console.log(food);
  let food;
}

getFood();

/* error:
ReferenceError: food is not defined
*/