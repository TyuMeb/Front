"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [732],
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
        "./src/shared/ui/icons/checked-icon/checked.stories.ts": (
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
                title: "UI/Icons/CheckedIcon",
                component: __webpack_require__("./src/shared/ui/icons/checked-icon/checked.tsx").Y,
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
        "./src/shared/ui/icons/checked-icon/checked.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            __webpack_require__.d(__webpack_exports__, { Y: () => CheckedIcon });
            var __jsx = __webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement,
                CheckedIcon = function CheckedIcon() {
                    return __jsx(
                        "svg",
                        {
                            width: "16",
                            height: "13",
                            viewBox: "0 0 16 13",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        __jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6.32805 10.7967L1.36568 5.83434C1.05326 5.52192 0.546733 5.52192 0.234314 5.83434C-0.0781047 6.14676 -0.0781047 6.65329 0.234314 6.96571L5.8343 12.5657C6.17344 12.9048 6.73272 12.8714 7.02904 12.4943L15.829 1.29429C16.102 0.946872 16.0416 0.443949 15.6942 0.170979C15.3468 -0.101991 14.8439 -0.0416404 14.5709 0.305776L6.32805 10.7967Z",
                            fill: "black",
                        })
                    );
                };
            (CheckedIcon.displayName = "CheckedIcon"),
                (CheckedIcon.__docgenInfo = { description: "", methods: [], displayName: "CheckedIcon" });
        },
    },
]);
