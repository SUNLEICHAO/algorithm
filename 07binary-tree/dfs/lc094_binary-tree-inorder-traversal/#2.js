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
var inorderTraversal = function (root) {
  const res = [];
  const stk = [];
  while (root || stk.length) {
    // 不断往左子树方向走，每走一次就将当前节点保存到栈中
    // 模拟了递归的调用
    while (root) {
      stk.push(root);
      root = root.left;
    }
    // 当前节点为空，说明左边走到头了，从栈中弹出节点并保存
    // 然后转向右边节点，继续上面整个过程
    root = stk.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};
