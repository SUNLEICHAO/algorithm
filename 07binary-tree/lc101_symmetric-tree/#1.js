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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 使用递归遍历左右子树 递归三部曲
  // 1. 确定递归的参数 root.left root.right和返回值true false
  let compare = function (left, right) {
    // 2. 确定终止条件 空的情况
    if (!left && right) {
      // 左空右不空
      return false;
    } else if (left && !right) {
      // 左不空右空
      return false;
    } else if (!left && !right) {
      // 左空右空
      return true;
    } else if (left.val !== right.val) {
      //左不空右不空，但值不等
      return false;
    }
    // 3. 确定单层递归逻辑
    let outside = compare(left.left, right.right);
    let inside = compare(left.right, right.left);
    let middleBool = outside && inside;
    return middleBool;
  };

  if (!root) return true;
  return compare(root.left, root.right);
};
