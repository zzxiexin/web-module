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

console.log("================commonjs??????=======================");
console.log("===?????????commonjs??????????????????????????? commonjs????????????????????????copy=======");
console.log(name);
changeName();
console.log(name);
console.log("commonjs????????????????????????", (__webpack_require__(/*! ./module */ "./cjs/module.js").name));
console.log("commonjs??????????????????,????????????", getRealName());
console.log("===?????????commonjs?????????????????????????????? commonjs????????????????????????copy=======");
console.log(obj);
changeObj();
console.log(obj);
})();

/******/ })()
;
//# sourceMappingURL=cjs.js.map