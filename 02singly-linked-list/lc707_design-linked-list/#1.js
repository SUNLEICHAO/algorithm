class LinkNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

var MyLinkedList = function () {
  this._size = 0;
  this._head = null;
  this._tail = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
//  先造一个getNode
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this._size) { return null }
  let curr = this._head;
  while (index-- > 0) {
    curr = curr.next
  }
  return curr
};

MyLinkedList.prototype.get = function (index) {
  let dummy = this.getNode(index)

  if (dummy === null) {
    return -1
  } else {
    return dummy.val
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const dummy = new LinkNode(val, this._head)
  this._head = dummy;
  if (this._size === 0) {
    this._tail = dummy
  }
  this._size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const dummy = new LinkNode(val, null)
  // 问题，上下什么区别
  // #1
  // this._tail = dummy
  // if (this._size===0) {
  //   this._head = dummy
  // }else{
  //   this._tail.next = dummy
  // }
  // this._size++
  // #2
  if (this._tail) {
    this._tail.next = dummy
    this._tail = dummy;
    this._size++
    return
  }
  this._head = dummy
  this._tail = dummy
  this._size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= 0) {
    this.addAtHead(val);
    return
  }
  if (index === this._size) {
    this.addAtTail(val)
    return
  }
  if (index > this._size) return

  const dummy = this.getNode(index - 1)
  dummy.next = new LinkNode(val, dummy.next)
  this._size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this._size) return
  if (index === 0) {
    this._head = this._head.next;
    if (this._size === 1) {
      this._tail = this._head
    }
    this._size--
    return
  }
  const dummy = this.getNode(index - 1)

  dummy.next = dummy.next.next
  if (index === this._size - 1) {
    this._tail = dummy;
  }
  this._size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */