let name = "cjs";
let obj = { a: 1 };
module.exports = {
  name,
  age: 1,
  obj,
  say: function () {
    console.log("i am cjs");
  },
  changeName: function () {
    name = "change cjs name";
  },
  changeObj: function () {
    obj.a = 2;
  },
  getRealName: function () {
    return name;
  },
};
