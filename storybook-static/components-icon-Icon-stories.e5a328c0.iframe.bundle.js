"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [957],
    {
        "./src/components/icon/Icon.stories.tsx": (
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
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    "./node_modules/next/dist/compiled/react/index.js"
                ),
                _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/icon/Icon.tsx"),
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
                title: "UI/Icon",
                component: _Icon__WEBPACK_IMPORTED_MODULE_2__.J,
                parameters: { layout: "padded" },
                tags: ["autodocs"],
                argTypes: { glyph: { options: _Icon__WEBPACK_IMPORTED_MODULE_2__.I, control: { type: "select" } } },
            };
            var Default = {
                args: { glyph: "exit" },
                render: function render(args) {
                    return __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__.J, args);
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
                                        '{\n  args: {\n    glyph: "exit"\n  },\n  render: args => <Icon {...args} />\n}',
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
