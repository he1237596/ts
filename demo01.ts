let a: string = '123'

// a = 9
let b: number = 123
let c: boolean = true
let d: null = null
let e: undefined = undefined



const g = <T>(a:T, b: T): T => {

  return (a as any) + (b as any)
}


g<number>(1, 2)

let w: symbol
w = Symbol('w');

let dd: bigint = 123123123123123123n;


let a1:unknown
let a2:any
console.log(a1, a2)

a1 =1
a2 =1

let b1:string
b1 = a1 as string
b1 = a2 // 破坏，走哪破坏哪,破坏原有类型，包括提前报错 a.b.c没有属性报错

let b2: string
if (typeof a1 === 'string')
b2 = a1

function ggdf(): never {
  // never不能结束
  // 或者永远不会执行的自动推断
  throw new Error('ggdf')
}

 // void 函数返回值，可以显示返回 return undefined , return, 不写
//  告诉别人不要关注我的返回值


