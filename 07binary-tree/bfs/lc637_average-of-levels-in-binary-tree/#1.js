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
var averageOfLevels = function (root) {
  let res = [];
  if (!root) return res;
  let queue = [root];
  while (queue.length) {
    let subRes = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      subRes.push(curr.val);
    }
    let tran = subRes.reduce((a, b) => a + b) / subRes.length;
    res.push(tran);
  }
  return res;
};
