/**
 * 实现方式：两个队列，借助一个中转队列
 * 队列的实现：unshift + pop
*/

var MyStack = function () {
  this.queueMain = [];
  // 入队时先进入queueSub，再将queueMain所有元素（若不为空）进入queueSub，再将queueSub内所有元素进入queueMain
  this.queueSub = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queueSub.unshift(x)
  while (this.queueMain.length) {
    this.queueSub.unshift(this.queueMain.pop())
  }
  while (this.queueSub.length) {
    this.queueMain.unshift(this.queueSub.pop())
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // 是否有问题，空数组时
  return this.queueMain.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queueMain[this.queueMain.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queueMain.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */