/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(root = this.root, count = 0) {
    if (root === null) {
      return 0;
    }
    count += root.val;

    if (root.children.length !== 0) {
      root.children.forEach((e) => {
        count += this.sumValues(e, 0);
      });
    }

    return count;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(root = this.root, count = 0) {
    if (root === null) {
      return 0;
    }

    if (root.children.length !== 0) {
      root.children.forEach((e) => {
        count += this.countEvens(e, 0);
      });
    }

    return (count += root.val % 2 === 0 ? 1 : 0);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, root = this.root, count = 0) {
    if (root === null) {
      return 0;
    }

    if (root.children.length !== 0) {
      root.children.forEach((e) => {
        count += this.numGreater(lowerBound, e, 0);
      });
    }

    return (count += root.val > lowerBound ? 1 : 0);
  }
}

module.exports = { Tree, TreeNode };
