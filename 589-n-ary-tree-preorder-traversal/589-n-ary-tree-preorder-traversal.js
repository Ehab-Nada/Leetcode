/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = [];
    function pre(node) {
        if (!node) return;
        res.push(node.val);
        for (let child of node.children) {
            pre(child);
        }
    }
    pre(root);
    return res;
};