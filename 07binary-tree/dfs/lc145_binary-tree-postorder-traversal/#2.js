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
 *
 */
var postorderTraversal = function (root) {
  // 入栈 左 -> 右
  // 出栈 中 -> 右 -> 左 结果翻转
  let res = [];
  if (!root) return res;
  let stack = [root];
  let curr = null;
  do {
    curr = stack.pop();
    res.push(curr.val);
    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
  } while (stack.length);
  return res.reverse();
};
