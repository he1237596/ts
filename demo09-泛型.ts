(()=>{
  function test<T>(a: T) {
    console.log(a)
  }
  test<string>('1')
  test<number>(2)

  function test2<T, U>(a: T, b: U): T | U {
    console.log(a)
    return Date.now()%2 ? a : b
  }
  test2<string, number>('1', 2)
  test2<number, string>(2, '3')

  // 泛型接口
  interface PersonD<T> {
    name: string,
    age: number,
    sex: T
  }

  const p: PersonD<string> = {
    name: '张三',
    age: 18,
    sex: '男'
  }

  // 泛型类
  class PersonE<T>{
    constructor(public name: string, public age: number, public sex: T) {}
  }

  const p2 = new PersonE<string>('张三', 18, '男')
})();

