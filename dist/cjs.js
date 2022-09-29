/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./cjs/module.js":
/*!***********************!*\
  !*** ./cjs/module.js ***!
  \***********************/
/***/ ((module) => {

var name = "cjs";
var obj = {
  a: 1
};
module.exports = {
  name: name,
  age: 1,
  obj: obj,
  say: function say() {
    console.log("i am cjs");
  },
  changeName: function changeName() {
    name = "change cjs name";
  },
  changeObj: function changeObj() {
    obj.a = 2;
  },
  getRealName: function getRealName() {
    return name;
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./cjs/index.js ***!
  \**********************/
var _require = __webpack_require__(/*! ./module */ "./cjs/module.js"),
    name = _require.name,
    getRealName = _require.getRealName,
    changeName = _require.changeName,
    changeObj = _require.changeObj,
    obj = _require.obj;

console.log("================commonjs测试=======================");
console.log("===结论：commonjs基础类型会被缓存， commonjs引入的是基础值的copy=======");
console.log(name);
changeName();
console.log(name);
console.log("commonjs重新引入模块测试", (__webpack_require__(/*! ./module */ "./cjs/module.js").name));
console.log("commonjs通过函数获取,避免缓存", getRealName());
console.log("===结论：commonjs引用类型不会被缓存， commonjs引入的是基础值的copy=======");
console.log(obj);
changeObj();
console.log(obj);
})();

/******/ })()
;
//# sourceMappingURL=cjs.js.map