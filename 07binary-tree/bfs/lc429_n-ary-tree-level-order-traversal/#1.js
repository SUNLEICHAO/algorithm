/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if (!root) return res;
  let queue = [root];
  while (queue.length) {
    let subRes = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let curr = queue.shift();
      for (let j = 0; j < curr.children.length; j++) {
        queue.push(curr.children[j]);
      }
      subRes.push(curr.val);
    }
    res.push(subRes);
  }
  return res;
};
