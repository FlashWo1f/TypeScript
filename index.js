// 声明一个number类型
var num = 11;
console.log(num);
function func(arg1, arg2) {
    return arg1 + arg2;
}
console.log(func(1, '1'));
var arr = [1];
var arr1 = ['1', 1];
// 联合类型
var league = true;
var libin = {
    name: 'libin',
    age: 12,
    family: ['awei', 'mom', 'dad', 'sister'],
    sex: '男'
};
var obj = { a: 1, b: '1', c: true };
// 可选类型
// 某个值传递时，不是必须传递的，就可以使用可选定义，用一个 ? 表示
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
// 数组的二种定义方法
var list = [1, 23, 3];
var list1 = [{ name: 'libin', age: 12 }];
// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 
// 比如，你可以定义一对值分别为string和number类型的元组
var x;
// init it
x = ['Bob', 12];
// error
// x = [12, 'Bob']
// 当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substr(1)); // OK
// 上面的Red 好像没有被下面的Red给引用到
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var a = Color.Red;
