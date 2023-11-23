"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [310],
    {
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            function _typeof(o) {
                return (
                    (_typeof =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (o) {
                                  return typeof o;
                              }
                            : function (o) {
                                  return o &&
                                      "function" == typeof Symbol &&
                                      o.constructor === Symbol &&
                                      o !== Symbol.prototype
                                      ? "symbol"
                                      : typeof o;
                              }),
                    _typeof(o)
                );
            }
            function _toPropertyKey(arg) {
                var key = (function _toPrimitive(input, hint) {
                    if ("object" !== _typeof(input) || null === input) return input;
                    var prim = input[Symbol.toPrimitive];
                    if (void 0 !== prim) {
                        var res = prim.call(input, hint || "default");
                        if ("object" !== _typeof(res)) return res;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === hint ? String : Number)(input);
                })(arg, "string");
                return "symbol" === _typeof(key) ? key : String(key);
            }
            function _defineProperty(obj, key, value) {
                return (
                    (key = _toPropertyKey(key)) in obj
                        ? Object.defineProperty(obj, key, { value, enumerable: !0, configurable: !0, writable: !0 })
                        : (obj[key] = value),
                    obj
                );
            }
            __webpack_require__.d(__webpack_exports__, { Z: () => _defineProperty });
        },
        "./src/shared/ui/icons/exit-icon/exit-icon.stories.ts": (
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
                D_Yandex_HTML_CSS_ACCELERATOR_Front_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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
                              D_Yandex_HTML_CSS_ACCELERATOR_Front_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
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
                title: "UI/Icons/ExitIcon",
                component: __webpack_require__("./src/shared/ui/icons/exit-icon/exit-icon.tsx").i,
                parameters: { layout: "padded" },
                tags: ["autodocs"],
            };
            var Default = { args: {} };
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
                                { originalSource: "{\n  args: {}\n}" },
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
        "./src/shared/ui/icons/exit-icon/exit-icon.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            __webpack_require__.d(__webpack_exports__, { i: () => ExitIcon });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    "./node_modules/next/dist/compiled/react/index.js"
                ),
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                ExitIcon = function ExitIcon() {
                    return __jsx(
                        react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                        null,
                        __jsx(
                            "svg",
                            {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                            },
                            __jsx("path", {
                                d: "M5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z",
                                fill: "#1C1C1C",
                            })
                        )
                    );
                };
            ExitIcon.__docgenInfo = { description: "", methods: [], displayName: "ExitIcon" };
        },
    },
]);
