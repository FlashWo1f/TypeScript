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
// 可选类型
// 某个值传递时，不是必须传递的，就可以使用可选定义，用一个 ? 表示
