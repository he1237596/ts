/*
 * @Author: Chris
 * @Date: 2024-08-19 17:43:21
 * @LastEditors: Chris
 * @LastEditTime: 2024-08-19 18:32:16
 * @Descripttion: **
 */
// object 能使用toString()方法的都可以存
// Object 除了null和undefined外，其他类型都可以存

// let person: {
//   name: string;
//   age: string
// }
// let person: {
//   name: string, //逗号，分号，换行 都可以
//   age?: string
// }
// 对象声明
let person: {
  a: string,
  b: number,
  [key: string]: any //索引签名
}

// 函数声明
let count: (a: number, b: number) => number // =>不是箭头函数，只是ts声明函数时表示函数类型，描述其参数类型和返回值

count = function (a, b) {
  return a + b
}
// 函数还可以用 接口，自定义类型 等方式声明

// 数组
let arr: string[]
let arr2: Array<string> //泛型

let arr3: [string, boolean?, ...string[]] // 元组 (存储固定元素，每个元素类型已知) Tuple

// 枚举 enum
// 数字枚举递增性
enum DD {
  Up,
  Down,
  Left = 10,
  Right
}

console.log(DD.Up) // 0
console.log(DD.Down) // 1
console.log(DD[0]) // Up
console.log(DD[1]) // Down
console.log(DD[10]) // Left
console.log(DD.Right) // 11

function test(data: DD): void {
  if (data === DD.Up) {

  }
}

// 字符串枚举递增性 失去反向映射
enum EE {
  Up = 'up',
  Down = 'down',
}


// 使用const 声明枚举，枚举会被内敛（我理解时解析为对应值，转化的js里不包括枚举字典）

const enum FF {
  Up = 'up',
  Down = 'down',
}