"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [990],
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
        "./src/shared/ui/icons/arrow-left-icon/arrow-left-icon.stories.ts": (
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
                title: "UI/Icons/ArrowLeftIcon",
                component: __webpack_require__("./src/shared/ui/icons/arrow-left-icon/arrow-left-icon.tsx").Y,
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
        "./src/shared/ui/icons/arrow-left-icon/arrow-left-icon.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            __webpack_require__.d(__webpack_exports__, { Y: () => ArrowLeftIcon });
            var __jsx = __webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement,
                ArrowLeftIcon = function ArrowLeftIcon() {
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
                            d: "M2.14264 19.1214L2.78348 18.6067C1.81136 17.3962 1.17502 16.2497 1.00509 14.9165C0.927526 14.3079 0.927526 13.6921 1.00509 13.0835C1.17502 11.7504 1.81136 10.6038 2.78348 9.39332C3.7272 8.21822 5.06947 6.88623 6.77185 5.19904L6.77186 5.19903L11.2587 0.752056C11.6718 0.34264 12.3385 0.345615 12.748 0.7587C13.1574 1.17179 13.1544 1.83855 12.7413 2.24797L8.33389 6.61624C6.55921 8.37515 5.29203 9.63331 4.42564 10.7121C3.5726 11.7743 3.19501 12.5601 3.09436 13.3498C3.03932 13.7816 3.03932 14.2185 3.09436 14.6502C3.19501 15.4399 3.5726 16.2257 4.42564 17.2879C5.29203 18.3667 6.55921 19.6249 8.33389 21.3838L12.7413 25.7521C13.1544 26.1615 13.1574 26.8282 12.748 27.2413C12.3385 27.6544 11.6718 27.6574 11.2587 27.248L6.77182 22.801L6.77181 22.801C5.06945 21.1138 3.7272 19.7818 2.78349 18.6067L2.14264 19.1214Z",
                            fill: "#1C1C1C",
                        })
                    );
                };
            (ArrowLeftIcon.displayName = "ArrowLeftIcon"),
                (ArrowLeftIcon.__docgenInfo = { description: "", methods: [], displayName: "ArrowLeftIcon" });
        },
    },
]);
