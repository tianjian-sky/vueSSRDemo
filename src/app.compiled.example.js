__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ 
__webpack_require__.d(__webpack_exports__, createApp, function() { return createApp; });
/* harmony import */ 
var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ 
var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ 
var _module_page_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/page.vue */ "./src/module/page.vue");
/* harmony import */ 
var _route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route */ "./src/route/index.js");
/* harmony import */ 
var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ 
var _global_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.less */ "./src/global.less");
/* harmony import */ 
var _global_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_global_less__WEBPACK_IMPORTED_MODULE_4__);

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
function createApp () {
    const router = Object(_route__WEBPACK_IMPORTED_MODULE_2__["default"])(vue__WEBPACK_IMPORTED_MODULE_0___default.a)
    const store = Object(_store__WEBPACK_IMPORTED_MODULE_3__["default"])(vue__WEBPACK_IMPORTED_MODULE_0___default.a)
    const app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({ 
        // 根实例简单的渲染应用程序组件。
        render: h => h(_module_page_vue__WEBPACK_IMPORTED_MODULE_1__["default"]),
        router,
        store
    })
    return { app }
}

