class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.childern = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    let arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

const tree = new Tree();

tree.root = new Node("A");
tree.root.add("B");
tree.root.add("C");

tree.root.children[0].add("D");
tree.root.children[0].add("E");
tree.root.children[1].add("F");

const visitedBF = [];
const visitedDF = [];

tree.traverseBF((node) => visitedBF.push(node.data));
tree.traverseDF((node) => visitedDF.push(node.data));
console.log("BF", visitedBF);
console.log("DF", visitedDF);
