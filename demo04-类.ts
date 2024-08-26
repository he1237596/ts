/*
 * @Author: Chris
 * @Date: 2024-08-20 00:22:18
 * @LastEditors: Chris
 * @LastEditTime: 2024-08-20 03:28:32
 * @Descripttion: **
 */
/* 复习一下 类 */
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name} ${this.age}`);
  }
}

class Man extends Person {
  sex: string

  constructor(name: string, age: number, sex: string) {
    super(name, age);
    this.sex = sex;
  }
  override speak(): void {
    console.log(`${this.name} ${this.age}`);
  }
}

const xiaoming = new Man('xiaoming', 18, 'man');

// 工厂函数
class Woman extends Person {
  static number: number = 0 //类属性
  height: number = 10 //实例属性
  constructor(name: string, age: number) {
    super(name, age);
  }

  static createWoman(name: string, age: number): Woman {
    this.number++;
    return new Woman(name, age);
  }
}

const xiaomei = Woman.createWoman('xiaomei', 18);
console.log(Woman.number)
console.log(xiaomei.height)
// 属性修饰符 public private protected readonly

function HeiPerson<T extends { new (...args: any[]): {} }>(classA: T) {
  return class extends classA {
    sayHi() {
      console.log('hi')
      console.log('hi')
    }
  }
}
@HeiPerson
class Personn {
  private _age: number = 18
  get age(): number {
    return this._age> 18 ? 18 : this._age
  }
  set age(val: number){
    this._age = val
  }
}
const ee = new Personn()
// ee.sayHi() //有问题晚点再看
console.log(ee.age)
ee.age = 20
console.log(ee.age)




