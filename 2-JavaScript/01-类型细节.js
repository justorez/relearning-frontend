// undefinded 是一个变量，而非一个关键字
let a = void(0)
console.log('undefinded', a)

// null 表示：定义了但是为空
let b = null
console.log('null', b)

console.log()

// String 的意义并非“字符串”，而是字符串的 UTF16 编码
console.log('String 的最大长度', Math.pow(2, 53)-1)

console.log()

// 浮点数运算的精度问题，导致出现奇怪的不相等
console.log('0.1 + 0.2 = %d', 0.1 + 0.2)
console.log('0.1 + 0.2 == 0.3', 0.1 + 0.2 == 0.3)

// 通过和最小精度比较，才是正确的浮点数比较方法
console.log('Number.EPSILON', Number.EPSILON)
console.log(Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON)

console.log()

// . 运算符提供了装箱操作，它会根据基础类型构造一个临时对象，
// 使得我们能在基础类型上调用对应对象的方法
console.log(`'abc'.charAt(0)`, 'abc'.charAt(0))

console.log(30, 0b11110, 0o36, 0x1E)
