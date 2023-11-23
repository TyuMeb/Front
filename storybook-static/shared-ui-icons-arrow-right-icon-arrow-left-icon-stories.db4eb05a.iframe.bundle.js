"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [394],
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
        "./src/shared/ui/icons/arrow-right-icon/arrow-left-icon.stories.ts": (
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
                title: "UI/Icons/ArrowRightIcon",
                component: __webpack_require__("./src/shared/ui/icons/arrow-right-icon/arrow-right-icon.tsx").L,
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
        "./src/shared/ui/icons/arrow-right-icon/arrow-right-icon.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            __webpack_require__.d(__webpack_exports__, { L: () => ArrowRightIcon });
            var __jsx = __webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement,
                ArrowRightIcon = function ArrowRightIcon() {
                    return __jsx(
                        "svg",
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "14",
                            height: "28",
                            viewBox: "0 0 14 28",
                            fill: "none",
                        },
                        __jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.2165 18.6067C10.2728 19.7818 8.93052 21.1138 7.22814 22.801L2.74131 27.248C2.32823 27.6574 1.66146 27.6544 1.25204 27.2413C0.842625 26.8282 0.845601 26.1615 1.25868 25.7521L5.66611 21.3838C7.44079 19.6249 8.70797 18.3667 9.57436 17.2879C10.4274 16.2257 10.805 15.4399 10.9056 14.6502C10.9607 14.2185 10.9607 13.7816 10.9056 13.3498C10.805 12.5601 10.4274 11.7743 9.57436 10.7121C8.70797 9.6333 7.44079 8.37515 5.66611 6.61624L1.25869 2.24797C0.8456 1.83855 0.842625 1.17179 1.25204 0.7587C1.66146 0.345615 2.32822 0.342641 2.74131 0.752056L7.22813 5.19902L7.22814 5.19903C8.93053 6.88623 10.2728 8.21821 11.2165 9.39331C12.1886 10.6038 12.825 11.7504 12.9949 13.0835C13.0725 13.6921 13.0725 14.3079 12.9949 14.9165C12.825 16.2497 12.1886 17.3962 11.2165 18.6067Z",
                            fill: "#1C1C1C",
                        })
                    );
                };
            (ArrowRightIcon.displayName = "ArrowRightIcon"),
                (ArrowRightIcon.__docgenInfo = { description: "", methods: [], displayName: "ArrowRightIcon" });
        },
    },
]);
