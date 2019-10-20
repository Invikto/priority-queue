class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild(node) {
    if (this.left) {
      if (!this.right) {
        this.right = node;
        this.right.parent = this;
      }
    } else {
      this.left = node;
      this.left.parent = this;
    }
  }

  removeChild(node) {
    switch (node) {
      case this.left:
        this.left.parent = null;
        this.left = null;
        break;
      case this.right:
        this.right.parent = null;
        this.right = null
        break;
      default:
        throw new Error();
    }
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

  swapWithParent() {
    const boofer = {
      data: this.parent.data,
      priority: this.parent.priority,
      parent: this.parent.parent,
      left: this.parent.left,
      right: this.parent.right,
      boofer: this.parent,
    };

    this.parent.parent = this;
    this.parent.left = this.left;
    this.parent.right = this.right;

    switch (this) {
      case boofer.left:
        this.left = this.parent;
        this.right = boofer.right;
        break;
      case boofer.right:
        this.left = boofer.left;
        this.right = this.right;
        break;
    }
    this.parent = boofer.parent;
    
//    switch (boofer.boofer) {
//      case boofer.parent.left:
//        this.parent.left = this;
//        break;
//      case boofer.parent.right:
//        this.parent.right = this;
//        break;
//    }
  }
}

module.exports = Node;
