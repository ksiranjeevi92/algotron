class Node {
  constructor(data) {
    this.data = data;
    this.childrens = [];
  }
  add(data) {
    this.childrens.push(new Node(data));
  }
}

let root = new Node(20);
root.add(0);
root.add(40);
root.add(-15);
root.childrens[0].add(12);
root.childrens[0].add(-2);
root.childrens[0].add(1);
root.childrens[2].add(-2);

function levelWidth(root) {
  let counter = [0];
  let arr = [root, "s"];
  while (arr.length > 1) {
    let node = arr.shift();
    if (node === "s") {
      arr.push("s");
      counter.push(0);
    } else {
      counter[counter.length - 1]++;
      arr.push(...node.childrens);
    }
  }
  return counter;
}

console.log(levelWidth(root));
