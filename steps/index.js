function steps(n) {
  for (let i = 0; i < n; i++) {
    let steps = "";
    for (let column = 0; column <= i; column++) {
      if (column <= i) {
        steps += "#";
      } else {
        steps += " ";
      }
    }
    console.log(steps);
  }
}

steps(4);
