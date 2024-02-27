/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 深度优先，后序遍历
  if (root === null) return 0;
  let maxHeight = 0;
  for (let i = 0; i < root.children.length; i++) {
    maxHeight = Math.max(maxHeight, maxDepth(root.children[i]));
  }
  return 1 + maxHeight;
};
