/*
 * @Author: Chris
 * @Date: 2024-08-20 01:03:13
 * @LastEditors: Chris
 * @LastEditTime: 2024-08-20 01:41:28
 * @Descripttion: **
 */
class Animal {
  // 简写 不用一一赋值，不用类开头声明类型，直接绑定this(需要加上修饰符 public, private, protected)
  constructor(public name: string, private readonly age: number, protected color: string){}
}
// public 公开的，类的内部，子类，实例都可以用
// protected 保护的，类的内部，子类可以访问，实例不能访问
// private 私有的，类的内部可以访问，子类，实例都不能访问
// readonly 只读的，不能修改 可以和其他修饰符同时用，跟在其后面

// 抽象类 abstract 抽象类不能被实例化，只能被继承
abstract class Animal2 {
  // 抽象属性
  public abstract color: string;
  constructor(public name: string){}
  // 抽象方法 只能定义，不能实现，实现由子类实现(必须)
  abstract say(): void
  // 具体方法
  eat(): void {
    console.log('吃饭')
    console.log(this.name)
  }
}

class Dog extends Animal2 {
  color: string = 'red'
  constructor(name: string, public age: number) {
    super(name)
  }
  say(): void {
    console.log('汪汪汪')
  }
  print() {
    console.log(this.age)
  }
}

const dog = new Dog('小黑', 3)
console.log(dog.color)