class Queue {
  constructor() {
    this.data = [];
  }

  add(value) {
    this.data.unshift(value);
  }

  remove() {
    this.data.pop();
  }
}

module.exports = Queue;
