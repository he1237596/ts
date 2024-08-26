(()=>{
/* interface和抽象类 */
// 都可以定义类的格式
// 1.抽象类 abstract class DD{} 必须使用 extends 继承,不能使用implements
// interface interface AA{} 可以使用implements 也可以使用 extends
// 2.接口只能描述结构,不能有任何实现代码, 一个类可以有多个接口 class BB implements AA,CC{}

interface Person {
  name: string;
  sayHello?(): void;
}

interface Man {
  sex: string;
}
// 一个类实现多个接口
class GoodMan implements Person, Man {
  name: string = '11'
  constructor(public sex: string) {}
  sayHello() {
    console.log('hello');
  }
}


})();
