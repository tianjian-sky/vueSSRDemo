
exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(false);
exports.push([module.i, "body {  background: aquamarine;}", ""]);







var content = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/template/global.less");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__("./node_modules/vue-style-loader/lib/addStylesServer.js").default("64a342ed", content, false)