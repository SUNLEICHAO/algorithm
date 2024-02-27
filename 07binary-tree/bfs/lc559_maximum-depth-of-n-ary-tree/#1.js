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
  // 广度优先
  let res = 0;
  if (!root) return res;
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let curr = queue.shift();
      for (let j = 0; j < curr.children.length; j++) {
        if (curr.children[j] !== null) queue.push(curr.children[j]);
      }
    }
    res++;
  }
  return res;
};
