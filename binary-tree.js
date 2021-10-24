/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(root = this.root, count = 0) {
    if (root === null) return 0;

    count += 1;

    if (root.left !== null || root.right !== null) return (count += 1);

    return count;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(root = this.root) {
    if (root === null) return 0;

    if (!root.left && !root.right) return 1;

    let l;
    let r;

    if (root.left) l = this.maxDepth(root.left);
    if (root.right) r = this.maxDepth(root.right);

    return Math.max(r, l) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(root = this.root, sum = 0) {
    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      sum = Math.max(sum, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(root);
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, root = this.root) {
    if (root === null) {
      return null;
    }

    if (!root.left && !root.right) {
      return root.val > lowerBound ? root.val : null;
    }

    let vals = [root.val > lowerBound ? root.val : null];

    if (root.left.val) {
      vals.push(this.nextLarger(lowerBound, root.left));
    }
    if (root.right) {
      vals.push(this.nextLarger(lowerBound, root.right));
    }

    let filtered = vals.filter((v) => v !== null);

    if (filtered.length === 0) return null;
    return Math.min(...filtered);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
