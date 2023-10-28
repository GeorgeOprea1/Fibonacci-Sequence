function fibsRec(num) {
  if (num < 1) {
    return "Invalid parameter";
  } else if (num == 1) {
    return [0];
  } else if (num == 2) {
    return [0, 1];
  } else {
    return [
      ...fibsRec(num - 1),
      fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3],
    ];
  }
}

console.log(fibsRec(num));
