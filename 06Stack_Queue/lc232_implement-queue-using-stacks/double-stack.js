/**
 * 用两个栈实现，第一个栈（inStack）装新的元素，第二个栈（outStack）装要弹出的元素，
 * 元素经过两个栈，便由先进后出变成了先进先出。
 */
var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 如果第二个栈（出栈的栈）空了，则将第一个栈中的元素转入第二个栈
  if (!this.outStack.length) {
    this.in2out();
  }
  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.outStack.length) {
    this.in2out();
  }
  // 返回队列开头的元素
  return this.outStack[this.outStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.outStack.length === 0 && this.inStack.length === 0
};

// 创建一个函数：负责输入栈和输出栈转移元素
MyQueue.prototype.in2out = function () {
  while (this.inStack.length !== 0) {
    this.outStack.push(this.inStack.pop())
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */