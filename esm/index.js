import log, { name, changeName } from "./module";
console.log("====================es6 module测试=================", log, name);
console.log("es6 module===>", log, name);
changeName("test");
setTimeout(() => {
  import("./import_async").then(({ name: async_name }) => {
    console.log("异步引入测似====>", async_name);
    console.log(name);
  });
}, 3000);
