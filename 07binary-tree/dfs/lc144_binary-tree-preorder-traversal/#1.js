/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];
  let preOrder = function (node) {
    if (node === null) return;
    res.push(node.val);
    preOrder(node.left);
    preOrder(node.right);
  };
  preOrder(root);
  return res;
};
