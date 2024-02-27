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
 * @return {number}
 */
var minDepth = function (root) {
  // 问题核心：当节点没有左右子节点的时候，便返回此时深度，即最小深度
  let res = 0;
  if (!root) return res;
  let queue = [root];
  while (queue.length) {
    res++;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      if (!curr.left && !curr.right) {
        return res;
      }
    }
  }
};
