// style-loader: Adds some css to the DOM by adding a <style> tag\

// load the styles

var content = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/global.less");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js").default("5196dc72", content, false)