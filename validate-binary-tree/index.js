class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
      return false;
    }
    if (min !== null && node.data < min) {
      return false;
    }
    if (node.left && !this.validate(node.left, min, node.data)) {
      return false;
    }
    if (node.right && !this.validate(node.right, node.data, max)) {
      return false;
    }
    return true;
  }
}

let node = new Node(10);
node.insert(5);
node.insert(10);
// node.left = new Node(11);
// node.right = new Node(5);

console.log(node.validate(node));
