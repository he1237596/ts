// type 可以为任意类型创建别名
(()=>{
// 类型别名
type myString = string;
let a: myString
a = '123'
console.log(a)

// 联合类型
type myType = string | number;
let b: myType = 123;
let c: myType = 'abc'
// 交叉类型，相当于合并，并且需要满足所有类型的条件
type myType2 = string & number; //没有意义
// let a: myType2 = 123
type P1 = {
  name: string
  age: number
}
type P2 = {
  color: string
}

type P3 = P1 & P2

let person1: P1 & P2 = {
  name: '张三',
  age: 18,
  color: 'red'
}
let person2: P3 = {
  name: '李四',
  age: 20,
  color: 'blue'
}

//#region

//#endregion

})();

