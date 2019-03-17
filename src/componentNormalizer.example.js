__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

/**
 * 
 * @param {*} scriptExports  _page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"]
 * @param {*} render         _page_vue_vue_type_template_id_3cbd9fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]
 * @param {*} staticRenderFns _page_vue_vue_type_template_id_3cbd9fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
 * @param {*} functionalTemplate false
 * @param {*} injectStyles injectStyles
 * @param {*} scopeId "3cbd9fee"
 * @param {*} moduleIdentifier "cb5391c4"
 * @param {*} shadowMode 
 */

function normalizeComponent (scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode) {
    // Vue.extend constructor export interop
    var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports
     // render functions
     if (render) { 
         options.render = render
         options.staticRenderFns = staticRenderFns
        options._compiled = true
     }
    // functional template
    if (functionalTemplate) {
         options.functional = true 
    }
    // scopedId
     if (scopeId) {
          options._scopeId = 'data-v-' + scopeId
    }
    var hook
    if (moduleIdentifier) { 
        // server build
        hook = function (context) {
             // 2.3 injection
            context = context || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) 
            // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__
            }
            // inject component styles
            if (injectStyles) {
                injectStyles.call(this, context)
            }
            // register component module identifier for async chunk inferrence\n 
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier)
            }
        }
    // used by ssr in case component is cached and beforeCreate\n 
    // never gets called\n 
    options._ssrRegister = hook
    } else if (injectStyles) {
        hook = shadowMode ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) } : injectStyles
    }
    if (hook) {
        if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't\n 
            // go through the normalizer\n 
            options._injectStyles = hook
            // register for functioal component in vue file\n 
            var originalRender = options.render
            options.render = function renderWithStyleInjection (h, context) {
                hook.call(context)
                return originalRender(h, context)
            }
        } else {
            // inject component registration as beforeCreate hook\n 
            var existing = options.beforeCreate
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
        }
    }
    return {
        exports: scriptExports,
        options: options
    }
}