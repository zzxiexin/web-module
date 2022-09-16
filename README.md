#### webpack 和 babel 作用

##### 1、babel 是一个 JS 编译器，用来将 ES6/ES7 等语法转换为 ES5 语法（浏览器不认识的语法编译成浏览器认识的语法），从而能够使代码在大部分浏览器中运行。但是 babel 转换语法时有一些新的 api 是不转化的，比如 promise、Object.assign 等，所以 babel 还提供了很多插件，如 babel-polyfill。

.babelrc / babel.config.js / babel.config.json

```javascript
{
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false, // preset-env在转码的时候会把es6模块化的语法转成其它模块化的语法，但在项目中我们希望保留es6模块化的语法，所以 配置modules: false,，告诉babel不需要转成其它模块化的语法
        targets: {
          chrome: '49', // 需要兼容的浏览器最低版本
        },
      },
    ],
    '@babel/preset-react', // react的预设
    '@babel/preset-typescript', // ts预设
  ],
}
```

预设的顺序从右到左

##### 2、webpack 是一个打包工具，打包 js、css、图片、html 等，它可以分析整个项目的文件结构，确认文件之间的依赖，将文件合成、压缩、加入 hash 等，生成最终项目文件。webpack 把所有文件当成模块，但是 webpack 内置默认的加载器是处理 js 的，如果要处理其他类型的文件则需要引入不同的 loader 加载器，用来转化其他文件进行编译打包。webpack 通过使用 babel-loader 使用 Babel

webpack.config.js （module.rules 允许你在 webpack 配置中指定多个 loader）

```javascript
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      { test: /\.ts$/, use: "ts-loader" },
      {
        test: /\.(t|j)sx?$/,
        exclude: { and: [/node_modules/] },
        loader: require.resolve("babel-loader"), // 使用babel
        options: {
          // babel中的配置
          presets: ["@babel/preset-env"], // ...babelConfig.presets,
          plugins: [], // ...babelConfig.plugins,
          // ... babelConfig.others
        },
      },
    ],
  },
};
```

##### 总结：

webpack 和 babel 通常配合起来使用  
babel 是 js 编译工具,能将 es6 或者一些特殊语法做一些转换，只做文件转义，不做文件整合。  
webpack 是一个打包工具，内置只能处理 js，但是它可以加载很多的 loader 处理 css,img,ts,vue 等其他文件,最终输出 js 文件。  
webpack 通过使用 babel-loader 使用 Babel
