"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [785],
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
        "./src/shared/ui/icons/warning-icon/warning-icon.stories.ts": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Default: () => Default,
                    default: () => warning_icon_stories,
                });
            var defineProperty = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                __jsx = __webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement,
                WarningIcon = function WarningIcon() {
                    return __jsx(
                        "svg",
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                        },
                        __jsx("path", {
                            d: "M22.3124 17.4775L13.7258 3.53014C13.5285 3.21646 13.2472 2.95641 12.9095 2.77573C12.5718 2.59505 12.1895 2.5 11.8005 2.5C11.4115 2.5 11.0292 2.59505 10.6915 2.77573C10.3538 2.95641 10.0724 3.21646 9.87523 3.53014L1.28861 17.4775C1.0996 17.7801 1 18.1243 1 18.4749C1 18.8254 1.0996 19.1696 1.28861 19.4722C1.48319 19.7881 1.7642 20.0498 2.10274 20.2304C2.44128 20.411 2.82514 20.504 3.21485 20.4999H20.3861C20.7755 20.5037 21.159 20.4105 21.4971 20.2299C21.8353 20.0493 22.116 19.7878 22.3104 19.4722C22.4997 19.1697 22.5997 18.8256 22.6 18.4751C22.6003 18.1246 22.5011 17.7803 22.3124 17.4775ZM21.2903 18.9203C21.1986 19.0678 21.0664 19.1899 20.9075 19.2738C20.7486 19.3578 20.5686 19.4006 20.3861 19.3978H3.21485C3.03237 19.4006 2.85239 19.3578 2.69347 19.2738C2.53454 19.1899 2.40239 19.0678 2.31064 18.9203C2.22481 18.7852 2.17951 18.631 2.17951 18.4739C2.17951 18.3168 2.22481 18.1626 2.31064 18.0276L10.8963 4.08025C10.9901 3.93439 11.1227 3.81372 11.2812 3.72995C11.4396 3.64618 11.6185 3.60216 11.8005 3.60216C11.9825 3.60216 12.1614 3.64618 12.3198 3.72995C12.4783 3.81372 12.6108 3.93439 12.7047 4.08025L21.2913 18.0276C21.377 18.1627 21.4221 18.317 21.422 18.4741C21.4218 18.6312 21.3763 18.7853 21.2903 18.9203ZM11.2114 13.3365V9.66305C11.2114 9.5169 11.2735 9.37675 11.384 9.27341C11.4944 9.17008 11.6443 9.11202 11.8005 9.11202C11.9567 9.11202 12.1066 9.17008 12.217 9.27341C12.3275 9.37675 12.3896 9.5169 12.3896 9.66305V13.3365C12.3896 13.4827 12.3275 13.6228 12.217 13.7262C12.1066 13.8295 11.9567 13.8876 11.8005 13.8876C11.6443 13.8876 11.4944 13.8295 11.384 13.7262C11.2735 13.6228 11.2114 13.4827 11.2114 13.3365ZM12.7823 16.6427C12.7823 16.8243 12.7247 17.0019 12.6168 17.1529C12.5089 17.3039 12.3556 17.4217 12.1762 17.4912C11.9968 17.5607 11.7994 17.5789 11.609 17.5434C11.4185 17.508 11.2436 17.4205 11.1063 17.2921C10.969 17.1636 10.8755 17 10.8376 16.8219C10.7997 16.6437 10.8191 16.4591 10.8934 16.2912C10.9678 16.1234 11.0936 15.98 11.255 15.8791C11.4165 15.7782 11.6063 15.7243 11.8005 15.7243C12.0609 15.7243 12.3106 15.8211 12.4947 15.9933C12.6788 16.1655 12.7823 16.3991 12.7823 16.6427Z",
                            fill: "#FF6894",
                        })
                    );
                };
            (WarningIcon.displayName = "WarningIcon"),
                (WarningIcon.__docgenInfo = { description: "", methods: [], displayName: "WarningIcon" });
            var _Default$parameters, _Default$parameters2;
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
                              (0, defineProperty.Z)(e, r, t[r]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : ownKeys(Object(t)).forEach(function (r) {
                              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                          });
                }
                return e;
            }
            const warning_icon_stories = {
                title: "UI/Icons/WarningIcon",
                component: WarningIcon,
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
    },
]);
