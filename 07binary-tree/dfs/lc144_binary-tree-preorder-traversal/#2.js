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
  // 迭代法，不统一写法
  // 入栈 右 -> 左
  // 出栈 中 -> 左 -> 右
  let res = [];
  if (!root) return res;
  const stack = [root];
  let cur = null;
  // 若栈不为空
  while (stack.length) {
    cur = stack.pop();
    res.push(cur.val);
    // 先入right是为了之后好处理
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }
  return res;
};
