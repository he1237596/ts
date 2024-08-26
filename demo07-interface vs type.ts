(()=>{
// 都可以定义对象的类型
// interface 和 type 的区别
// 1. interface: 更专注于定义对象和类的结构,支持继承(可以被类继承,也可以被接口继承)和合并
// type 不可以
interface Person {
  name: string;
  readonly age: number;
  sex: string;
  sayHello?(): void;
}
// // 合并
// interface Person {
// }
// // 继承
// interface Person4 extends Person {
// }

type Person2 = {
  name: string;
  readonly age: number;
  sex: string;
  sayHello?(): void;
}

const person: Person = {
  name: 'Tom',
  age: 20,
  sex: 'male',
  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}
class Person3 extends Person {
}
const a = new Person3('dd', 19)

// 2. type: 更专注于定义类型,支持联合类型,交叉类型,元组类型等,不支持继承和合并 可以使用& 实现
type Animal = {
  a: string
} & { c: string }
type B = {
  b: number
}

type C = Animal & B

})();
