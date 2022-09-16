import log, { name } from "./module";
setTimeout(() => {
  import("./import_async").then(({ name: async_name }) => {
    console.log(async_name);
  });
}, 3000);
console.warn("es6 module", log, name);
