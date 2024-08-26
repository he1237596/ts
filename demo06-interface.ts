/* interface */
(()=>{
interface Person {
  name: string;
  readonly age: number;
  sex: string;
  sayHello?(): void;
}
// 定义类
// 需要实现所有的属性和方法，不能多也不能少，除非时可选属性或方法
class Man implements Person {
  sex: string = '男';
  constructor(public name: string, public age: number) {}
  sayHello(): void {
    console.log(`${this.name} 您好！`);
  }
}
const xiaoming = new Man('小明', 18);
console.log(xiaoming.sex);

// 定义对象(可以拿去定义传参类型)(type也可以)
// 派生类可以直接当做type类型使用
const xiaohei: Person = {
  name: '小黑',
  age: 18,
  sex: '女',
  sayHello() {
    console.log(`${this.name} 您好！`);
  }
}

// 定义函数
interface FuncInsterface {
  (name: string, age: number): void;
}
const counter: FuncInsterface = function (name, age): void {
  console.log(`${name} ${age}`);
}
counter('小明',18)

// 接口继承接口,二者合并
interface Person2 extends Person {
  sayHello2(): void;
}
// 接口自动合并(可以重复定义)
interface Person2 {
  sayHello3(): void;
}

})();
