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
var maxDepth = function (root) {
  // 深度优先，后序遍历，左右中
  if (root === null) return 0;
  // 左
  let leftMaxDepth = maxDepth(root.left);
  // 右
  let rightMaxDepth = maxDepth(root.right);
  // 中，处理逻辑。根节点的高度便是树的深度
  let height = Math.max(rightMaxDepth, leftMaxDepth);
  return 1 + height;  
};
