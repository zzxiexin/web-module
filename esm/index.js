import log, { name, changeName } from "./module";
import * as obj from "./module";
console.log("====================es6 module测试=================");
console.warn("default不能跟变量申明原因", obj);
changeName("test");
setTimeout(() => {
  import("./import_async").then(({ name: async_name }) => {
    console.log("异步引入测似====>", async_name);
    console.log(name);
  });
}, 3000);
