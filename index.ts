// 声明一个number类型
let num:number = 11
console.log(num)

function func(arg1: number, arg2: string): string {
    return arg1 + arg2
}

console.log(func(1, '1'))

let arr: number[] = [1]
let arr1: (number | string)[] = ['1', 1]

// 联合类型
let league: string | boolean = true

// 定义一个接口  ＋  泛型
// 定义一个T类型，这个类型在定义时不能确定其具体类型，但是在调用时，你可以传递一个具体的类型进去，这时T类型就可以确认为是你传入的那个类型，按照你传入的类型来使用
interface Person<T> {
    name: string,
    age: number,
    family: T[],
    sex?: '男' | '女'
}

let libin: Person<string> = {
    name: 'libin',
    age: 12,
    family: ['awei', 'mom', 'dad', 'sister'],
    sex: '男'
}
    
var obj = {a: 1, b: '1', c: true}
// 想要得到obj的类型
type objType = typeof obj
// 可选类型
// 某个值传递时，不是必须传递的，就可以使用可选定义，用一个 ? 表示
