const { name, getRealName, changeName, changeObj, obj } = require("./module");
console.log("================commonjs测试=======================");
console.log("===结论：基础类型会被缓存， commonjs引入的是基础值的copy=======");
console.log(name);
changeName();
console.log(name);
console.log("重新引入模块测试", require("./module").name);
console.log("通过函数获取,避免缓存", getRealName());
console.log(
  "===结论：引用类型不会被缓存， commonjs引入的是基础值的copy======="
);
console.log(obj);
changeObj();
console.log(obj);
