export class Node {
  constructor(
    value = null,
    id = null,
    left = null,
    right = null,
    children = []
  ) {
    this.value = value;
    this.right = right;
    this.left = left;
    this.children = children;
    this.id = id;
  }

  toString() {
    return JSON.stringify(this);
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  find(value) {
    const search = new Date(value).setHours(0, 0, 0, 0);
    let output;
    let traverse = (node) => {
      if (node === null || node.value === search) {
        return (output = node);
      } else if (search < node.value) {
        traverse(node.left);
      } else {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return output;
  }

  insert(value, item) {
    if (this.root === null) {
      this.root = new Node(value, item.id);
      this.root.children.push(item);
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value && item.id !== current.id) {
          current.children.push(item);
          return this;
        }

        if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value, item.id);
            current.right.children.push(item);
            return this;
          } else {
            current = current.right;
          }
        } else {
          if (current.left === null) {
            current.left = new Node(value, item.id);
            current.left.children.push(item);
            return this;
          } else {
            current = current.left;
          }
        }
      }
    }
  }
}

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(x) {
//     let node = new Node(x);
//     if (this.root === null) {
//       this.root = node;
//       return this;
//     } else {
//       let current = this.root;
//       while (true) {
//         if (x < current.value) {
//           if (current.left === null) {
//             current.left = node;
//             return this;
//           } else {
//             current = current.left;
//           }
//         } else if (x > current.value) {
//           if (current.right === null) {
//             current.right = node;
//             return this;
//           } else current = current.right;
//         }
//       }
//     }
//   }
//   find(x) {
//     if (this.root === x) return this.root;
//     let current = this.root;
//     let found = false;
//     while (true) {
//       if (x > current.value) {
//         current = current.right;
//       } else if (x < current.value) {
//         current = current.left;
//       } else {
//         found = true;
//       }
//     }
//     return found ? 'found' : 'notFound';
//   }

//   BFS() {
//     let data = [];
//     let queue = [];
//     let node = this.root;
//     queue.push(node);
//     while (queue) {
//       node = queue.shift();
//       data.push(node);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     return data;
//   }
//   DFS() {
//     let data = [];
//     const travers = (node) => {
//       data.push(node);
//       if (node.left) travers(node.left);
//       if (node.right) travers(node.right);
//     };
//     travers(this.root);
//     return data;
//   }
// }

// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(12);
// tree.insert(2);
