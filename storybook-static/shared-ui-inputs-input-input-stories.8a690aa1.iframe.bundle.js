"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [882],
    {
        "./src/shared/ui/inputs/input/input.stories.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Default: () => Default,
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                });
            var _Default$parameters,
                _Default$parameters2,
                D_Yandex_HTML_CSS_ACCELERATOR_Front_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                D_Yandex_HTML_CSS_ACCELERATOR_Front_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                D_Yandex_HTML_CSS_ACCELERATOR_Front_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),
                D_Yandex_HTML_CSS_ACCELERATOR_Front_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    "./node_modules/next/dist/compiled/react/index.js"
                ),
                _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/shared/ui/inputs/input/input.tsx"),
                _storybook_client_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@storybook/client-api"),
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
            function ownKeys(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    r &&
                        (o = o.filter(function (r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable;
                        })),
                        t.push.apply(t, o);
                }
                return t;
            }
            function _objectSpread(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2
                        ? ownKeys(Object(t), !0).forEach(function (r) {
                              (0,
                              D_Yandex_HTML_CSS_ACCELERATOR_Front_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                  e,
                                  r,
                                  t[r]
                              );
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : ownKeys(Object(t)).forEach(function (r) {
                              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                          });
                }
                return e;
            }
            const __WEBPACK_DEFAULT_EXPORT__ = {
                title: "UI/Inputs",
                component: _input__WEBPACK_IMPORTED_MODULE_2__.I,
                parameters: { layout: "padded" },
                tags: ["autodocs"],
                args: { disabled: !1, autoFocus: !0, value: "", onChange: function onChange() {} },
            };
            var TemplateInput = function TemplateInput(args) {
                var restArgs = (0,
                    D_Yandex_HTML_CSS_ACCELERATOR_Front_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                        {},
                        ((0,
                        D_Yandex_HTML_CSS_ACCELERATOR_Front_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                            args
                        ),
                        args)
                    ),
                    _useArgs = (0, _storybook_client_api__WEBPACK_IMPORTED_MODULE_3__.useArgs)(),
                    _useArgs2 = (0,
                    D_Yandex_HTML_CSS_ACCELERATOR_Front_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                        _useArgs,
                        2
                    ),
                    value = _useArgs2[0].value,
                    updateArgs = _useArgs2[1];
                return __jsx(
                    "div",
                    { style: { width: "296px" } },
                    __jsx(
                        _input__WEBPACK_IMPORTED_MODULE_2__.I,
                        (0,
                        D_Yandex_HTML_CSS_ACCELERATOR_Front_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                            {},
                            restArgs,
                            {
                                value,
                                onChange: function onChange(e) {
                                    return (function handleChange(e) {
                                        return updateArgs({ value: e.target.value });
                                    })(e);
                                },
                            }
                        )
                    )
                );
            };
            TemplateInput.displayName = "TemplateInput";
            var Default = {
                args: {
                    id: "name",
                    className: "",
                    disabled: !1,
                    placeholder: "Введите свое имя",
                    label: "Имя",
                    error: !1,
                    errorMessage: "Пример ошибки",
                },
                render: function render(args) {
                    return TemplateInput(args);
                },
            };
            Default.parameters = _objectSpread(
                _objectSpread({}, Default.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null === (_Default$parameters = Default.parameters) || void 0 === _Default$parameters
                                ? void 0
                                : _Default$parameters.docs
                        ),
                        {},
                        {
                            source: _objectSpread(
                                {
                                    originalSource:
                                        '{\n  args: {\n    id: "name",\n    className: "",\n    disabled: false,\n    placeholder: "Введите свое имя",\n    label: "Имя",\n    error: false,\n    errorMessage: "Пример ошибки"\n  },\n  render: args => TemplateInput(args)\n}',
                                },
                                null === (_Default$parameters2 = Default.parameters) ||
                                    void 0 === _Default$parameters2 ||
                                    null === (_Default$parameters2 = _Default$parameters2.docs) ||
                                    void 0 === _Default$parameters2
                                    ? void 0
                                    : _Default$parameters2.source
                            ),
                        }
                    ),
                }
            );
        },
    },
]);
