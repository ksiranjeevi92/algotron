const Stack = require("./index");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(data) {
    this.first.push(data);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

const q = new Queue();

q.add("Red");
q.add("Green");
q.add("Yellow");

console.log(q.remove());

console.log(q.remove());
