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

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person1 {
  firstName: string;
  lastName: string;
}

function greeter(person: Person1) :String {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");


// 数组的二种定义方法
let list: number[] = [1, 23, 3]
interface obj {
  name: string,
  age: number
}
let list1: Array<obj> = [{name: 'libin', age: 12}]

// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 
// 比如，你可以定义一对值分别为string和number类型的元组
let x: [string, number]
// init it
x = ['Bob', 12]
// error
// x = [12, 'Bob']

// 当访问一个已知索引的元素，会得到正确的类型：

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// 当有越界的元素，则使用联合类型替代

// x[3] = 'world' // OK, 字符串可以赋值给(string | number)类型  [但是这里不行，在TS训练营里也不行，有待考证]

// 枚举类型  enum类型像是对JS标准数据类性的一个补充。像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

interface Red {
  a: number
}
// 上面的Red 好像没有被下面的Red给引用到
enum Color {Red = "1", Green = "hao", Blue = "wht"}
let c: Color = Color.Green
let a: Color = Color.Red 
const myArray: Array<string> = ['1','2']

// 这个写法以前没看过。好像很优雅 ...xuqiu
function searchXiaoJieJie3(...xuqiu:string[]):string{

  let  yy:string = '找到了'
  for (let i =0;i<xuqiu.length;i++){
      yy = yy + xuqiu[i]
      if(i<xuqiu.length){
          yy=yy+'、'
      }
  }
  yy=yy+'的小姐姐'
  return yy

}
var result:string  =  searchXiaoJieJie3('22岁','大长腿','瓜子脸','水蛇腰')
console.log(result)

let arr3:number[ ]     //声明一个数值类型的数组
let arr2:Array<string>  //声明一个字符串类型的数组


class MyClass {
  public sex: String
  protected name: String
  private age: number
  public readonly readonly:string = "readonly"
  // readponly
  public constructor (sex: string, name: string, age: number) {
    this.sex = sex
    this.name = name
    this.age = age
  }
  public say() {
    console.log("hello 1")
  }
  protected sayYou() {
    console.log("hello you")
  }
}

const myClass = new MyClass("女", "阿伟", 22)
console.log(myClass.name, myClass.say)
myClass.say()
myClass.sayYou()

// 继承和重写  在子类里将父类的方法重新定义
class Son extends MyClass {
  public sayYou() {
    super.sayYou()
    console.log('继承到了')
  }
}

// 规范函数类型接口
interface SearchMan {
  (source: string,subString: string): boolean
}

let mySearch: SearchMan

mySearch = function(source: string,subString: string): boolean{
  let flag = source.search(subString)
  return (flag != -1)
} 

console.log(mySearch('高、富、帅、德','胖')) //false

