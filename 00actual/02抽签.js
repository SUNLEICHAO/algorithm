/* 
  每次抽人汇报，前一次汇报过的人，第二次几率便小了（降低60%）。
*/

// const lottery = function(number){
//   // 第一个数字是人数，后面的数字为之前抽到过的人
//   // console.log(arguments);

// }
// lottery(10,2)

let people = ['张三', '李四', '王五', '赵六', '钱七'];
let reported = [];

function pickPerson() {
  let total = people.length;
  let reportedCount = reported.length;
  let chance = Math.random();

  if (chance < 0.4) {
    // 随机选择一个人
    let index = Math.floor(Math.random() * total);
    let person = people[index];

    // 如果这个人已经汇报过，则降低其被选中的几率
    if (reported.includes(person)) {
      total--;
      chance = Math.random();
      if (chance < 0.4) {
        index = Math.floor(Math.random() * total);
        person = people[index];
      }
    }

    // 将这个人添加到已汇报的列表中
    reported.push(person);

    return person;
  } else {
    // 如果没有人可以被选中，则返回 null
    return null;
  }
}

// 测试算法
for (let i = 0; i < 10; i++) {
  let person = pickPerson();
  if (person) {
    console.log(`第 ${i + 1} 次汇报的人是：${person}`);
  } else {
    console.log(`第 ${i + 1} 次没有人可以被选中`);
  }
}
