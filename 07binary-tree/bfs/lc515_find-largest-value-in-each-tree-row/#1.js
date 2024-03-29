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
var largestValues = function (root) {
  // 利用队列
  let res = [];
  if (!root) return res;
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let valMax = -Number.MAX_VALUE;
    for (let i = 0; i < len; i++) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      valMax = Math.max(curr.val, valMax);
    }
    res.push(valMax);
  }
  return res;
};
