"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [386],
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
        "./node_modules/@babel/runtime/helpers/esm/extends.js": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            function _extends() {
                return (
                    (_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i];
                                  for (var key in source)
                                      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                              }
                              return target;
                          }),
                    _extends.apply(this, arguments)
                );
            }
            __webpack_require__.d(__webpack_exports__, { Z: () => _extends });
        },
        "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function _objectWithoutPropertiesLoose(source, excluded) {
                        if (null == source) return {};
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                        for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
                        return target;
                    })(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            excluded.indexOf(key) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                                    (target[key] = source[key]));
                }
                return target;
            }
            __webpack_require__.d(__webpack_exports__, { Z: () => _objectWithoutProperties });
        },
        "./src/components/icon/Icon.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, { J: () => Icon, I: () => iconTypes });
            var _path,
                _path2,
                _path3,
                _path4,
                _path5,
                _path6,
                _path7,
                _path8,
                _path9,
                _path10,
                _path11,
                _path12,
                _path13,
                _path14,
                _rect,
                _path15,
                _path16,
                _path17,
                _path18,
                _path19,
                _path20,
                _path21,
                _path22,
                _path23,
                _path24,
                _path25,
                _path26,
                _path27,
                _path28,
                _path29,
                _path30,
                _path31,
                _path32,
                _path33,
                _path34,
                _path35,
                _path36,
                _path37,
                _path38,
                _path39,
                _path40,
                _path41,
                _path42,
                _path43,
                _path44,
                _path45,
                _path46,
                _path47,
                _path48,
                _path49,
                _path50,
                _path51,
                _path52,
                _path53,
                _path54,
                _path55,
                _path56,
                _path57,
                _path58,
                _path59,
                _path60,
                esm_extends = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                objectWithoutProperties = __webpack_require__(
                    "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
                ),
                react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
            function _extends() {
                return (
                    (_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i];
                                  for (var key in source)
                                      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                              }
                              return target;
                          }),
                    _extends.apply(this, arguments)
                );
            }
            var signin_path,
                signin_path2,
                signin_path3,
                signin_path4,
                signin_path5,
                signin_path6,
                signin_path7,
                signin_path8,
                signin_path9,
                signin_path10,
                signin_path11,
                signin_path12,
                signin_path13,
                signin_path14,
                signin_path15,
                signin_path16,
                signin_path17,
                signin_path18,
                signin_path19,
                signin_path20,
                signin_path21,
                signin_path22,
                signin_path23,
                signin_path24,
                signin_path25,
                signin_path26,
                signin_path27,
                signin_path28,
                signin_path29,
                signin_path30,
                signin_path31,
                signin_path32,
                signin_path33,
                signin_path34,
                signin_path35,
                signin_path36,
                signin_path37,
                signin_path38,
                signin_path39,
                signin_path40,
                signin_path41,
                signin_path42,
                signin_path43,
                signin_path44,
                signin_path45,
                signin_path46,
                signin_path47,
                signin_path48,
                signin_path49,
                signin_path50,
                signin_path51,
                signin_path52,
                signin_path53,
                signin_path54,
                signin_path55,
                signin_path56,
                signin_path57,
                signin_path58,
                signin_path59,
                signin_path60,
                _path61,
                _path62,
                _path63,
                _path64,
                _path65,
                _path66,
                _path67,
                _path68,
                _path69,
                _path70,
                _path71,
                _path72,
                _path73,
                _path74,
                _path75,
                _path76,
                _path77,
                _path78,
                _path79,
                _path80,
                _path81,
                _path82,
                _path83,
                _path84,
                _path85,
                _path86,
                _path87,
                _path88,
                _path89,
                _path90,
                _path91,
                _path92,
                _path93,
                _path94,
                _path95,
                _path96,
                _path97,
                _path98,
                _path99,
                _path100,
                _path101,
                _path102,
                signin_rect;
            function signin_extends() {
                return (
                    (signin_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i];
                                  for (var key in source)
                                      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                              }
                              return target;
                          }),
                    signin_extends.apply(this, arguments)
                );
            }
            var warning_path;
            function warning_extends() {
                return (
                    (warning_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i];
                                  for (var key in source)
                                      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                              }
                              return target;
                          }),
                    warning_extends.apply(this, arguments)
                );
            }
            var checked_path;
            function checked_extends() {
                return (
                    (checked_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i];
                                  for (var key in source)
                                      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                              }
                              return target;
                          }),
                    checked_extends.apply(this, arguments)
                );
            }
            var eye_path;
            function eye_extends() {
                return (
                    (eye_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i];
                                  for (var key in source)
                                      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                              }
                              return target;
                          }),
                    eye_extends.apply(this, arguments)
                );
            }
            var _g, _defs;
            function open_eye_extends() {
                return (
                    (open_eye_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i];
                                  for (var key in source)
                                      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                              }
                              return target;
                          }),
                    open_eye_extends.apply(this, arguments)
                );
            }
            var vk_path;
            function vk_extends() {
                return (
                    (vk_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i];
                                  for (var key in source)
                                      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                              }
                              return target;
                          }),
                    vk_extends.apply(this, arguments)
                );
            }
            var exit_path;
            function exit_extends() {
                return (
                    (exit_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i];
                                  for (var key in source)
                                      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                              }
                              return target;
                          }),
                    exit_extends.apply(this, arguments)
                );
            }
            const icons = {
                resetPassword: function SvgResetPassword(props) {
                    return react.createElement(
                        "svg",
                        _extends({ xmlns: "http://www.w3.org/2000/svg", width: 675, height: 549, fill: "none" }, props),
                        _path ||
                            (_path = react.createElement("path", {
                                fill: "#263238",
                                d: "M219 467.085c0 .19-8.671.915-20 .915s-21-.725-21-.915c0-.191 9.671 0 21 0s20-.178 20 0ZM196 496c1.895-2.889 3.738-5.412 6-8 2.082-2.746 4.582-5.568 7-8-1.893 2.895-3.736 5.409-6 8-2.071 2.751-4.572 5.584-7 8Zm-5.996-.002c-.151-.121 3.762-4.918 8.997-10.997 5.235-6.079 9.858-11.171 9.995-10.997.138.175-3.761 4.918-8.996 10.997s-9.845 11.118-9.996 10.997ZM119 467.085c0 .19-9.685.915-21 .915s-20-.725-20-.915c0-.191 8.671 0 20 0s21-.178 21 0Z",
                            })),
                        _path2 ||
                            (_path2 = react.createElement("path", { fill: "#F5F5F5", d: "M288 437h-51v80h51v-80Z" })),
                        _path3 ||
                            (_path3 = react.createElement("path", {
                                fill: "#263238",
                                d: "M287.99 518a16.24 16.24 0 0 1 0-.987v-4.936c0-3.887.096-9.671 0-16.783 0-14.17.069-33.776 0-57.257h-50.864c-.096.067 1.326-1.312.997-.988V518h-.997 51.862-51.862v-80.951c-.315.311.068-.081 0 0h51.862c-.069 23.563.041 44.021 0 58.245 0 7.031.027 12.923 0 16.783v4.936c0 .283-.998.987-.998.987Z",
                            })),
                        _path4 ||
                            (_path4 = react.createElement("path", { fill: "#FAFAFA", d: "M55 471H4v46h51v-46Z" })),
                        _path5 ||
                            (_path5 = react.createElement("path", {
                                fill: "#263238",
                                d: "M54.964 518v-3c0-2.219.081-5.973 0-10 0-8.123-.932-19.123-1-33h1H4h1v46H4h50.964H4v-47h50.964c0 13.945.04 25.836 0 34v13Z",
                            })),
                        _path6 ||
                            (_path6 = react.createElement("path", {
                                fill: "#F5F5F5",
                                d: "M56 447.619V517h182V405L56 447.619Zm62 61.452H80V456.54h38v52.531Zm100 0h-38V456.54h38v52.531Z",
                            })),
                        _path7 ||
                            (_path7 = react.createElement("path", {
                                fill: "#263238",
                                d: "M216.991 510.972c-.006-.091-.006.091 0 0v-3.994c0-2.593.082-6.359 0-10.985 0-9.388.068-23.294 0-38.945l.999.999h-38.986c-.083 0 1.315-1.312.999-.999v53.924h-.999 37.987c.242-.02.757-.02.999 0-.219.022-.78.022-.999 0h-37.987v-53.924h38.986c-.068 15.747.042 29.503 0 38.945 0 4.64.014 8.392 0 10.985v3.994c-.09.086-.889-.059-.999 0Zm-99.033.002c-.006-.091-.006.09 0 0v-3.995c0-2.585.095-6.371 0-10.984 0-9.363-.942-22.34-.996-37.948h.996-38.833c-.095 0 1.322-1.312.996-.999v53.926h-.996 37.837c.235-.021.761-.021.996 0a7.197 7.197 0 0 1-.996 0H79.125v-53.926c-.312.313.068-.081 0 0h38.833c0 15.703.04 29.53 0 38.947 0 4.626.081 8.399 0 10.984v2.996c-.014.3.013.999 0 .999Z",
                            })),
                        _path8 ||
                            (_path8 = react.createElement("path", {
                                fill: "#263238",
                                d: "M55.055 447.623h1l2.998-.991 9.998-1.983 36.988-8.921L237 405v113H55.055c0-21.936-.028-39.512 0-51.544 0-5.989-.069-10.72 0-13.877v-4.956 18.833c0 12.018-.123 29.662 0 51.544v-.991H237l-1 .991V405l1 .991-130.961 29.737-36.989 8.921-9.996 1.983-3 .991h-1Z",
                            })),
                        _path9 ||
                            (_path9 = react.createElement("path", { fill: "#FAFAFA", d: "M163 463h-29v55h29v-55Z" })),
                        _path10 ||
                            (_path10 = react.createElement("path", {
                                fill: "#263238",
                                d: "M164 463.017v1c0-.313 0 .163 0 0v2.999c0 2.717-.097 6.255 0 10.996 0 9.688-.07 24.091 0 39.988h-30v-54.983h29a7.255 7.255 0 0 1 1 0h-30 1V517h-1 29c.07-15.801-.042-29.368 0-38.988 0-4.782-.083-8.333 0-10.996v-3.999c.111-.013.889-.004 1 0ZM96 496c1.895-2.889 3.738-5.412 6-8 2.082-2.746 4.582-5.568 7-8-1.893 2.895-3.736 5.409-6 8-2.071 2.751-4.572 5.584-7 8Zm-5.996-.002c-.15-.121 3.765-4.918 8.997-10.997 5.231-6.079 9.858-11.171 9.995-10.997.138.175-3.765 4.918-8.996 10.997s-9.845 11.118-9.996 10.997ZM317.919 477c.182 0 0 8.95 0 20s.182 20 0 20-.919-8.963-.919-20 .724-20 .919-20Z",
                            })),
                        _path11 ||
                            (_path11 = react.createElement("path", {
                                fill: "#FAFAFA",
                                d: "M325.897 486.872c11.773-4.769 17.381-18.151 12.527-29.89-4.854-11.738-18.334-17.387-30.107-12.618-11.773 4.77-17.382 18.152-12.527 29.89 4.854 11.739 18.334 17.388 30.107 12.618Z",
                            })),
                        _path12 ||
                            (_path12 = react.createElement("path", {
                                fill: "#263238",
                                d: "M339.959 469.507c-.126-1.893-.567-7.192-.999-9.037-.535-2.147-.855-3.134-1.998-5.02-1.493-2.511-3.686-5.267-5.995-7.028-2.987-2.307-6.282-3.444-9.991-4.016-3.709-.573-7.464-.298-10.99 1.004-2.032.737-4.276 1.687-5.995 3.012-.898.673-2.2 1.214-2.997 2.008-.799.838-1.318 2.072-1.998 3.012-2.824 3.899-3.997 11.223-3.997 16.065 0 4.841 1.173 9.153 3.997 13.052 1.311 1.861 3.168 3.682 4.995 5.02 1.719 1.325 3.963 2.275 5.995 3.012 4.908 1.804 10.066 1.77 14.987 0 4.92-1.769 9.288-5.5 11.989-10.04 1.143-1.886 1.463-2.873 1.998-5.02.431-1.841.871-4.137.999-6.024.021.123.021-.123 0 0v1.004c.001.599.091 1.416 0 2.008-.088.812-.799 2.22-.999 3.012-.504 2.189-.869 4.09-1.998 6.024-1.647 2.86-4.332 5.115-6.994 7.028-2.662 1.914-5.79 3.392-8.992 4.016-4.048.778-8.112.414-11.989-1.004-2.1-.745-4.219-1.65-5.995-3.012-1.889-1.369-2.649-3.1-3.996-5.02-2.92-4.015-4.996-9.064-4.996-14.056 0-4.993 2.076-13.054 4.996-17.069 1.347-1.92 2.107-3.651 3.996-5.02 1.776-1.362 3.895-2.267 5.995-3.012 3.872-1.419 7.945-1.783 11.989-1.004 3.205.622 6.327 2.102 8.992 4.016 2.665 1.913 5.346 4.166 6.994 7.028 1.129 1.934 1.494 3.835 1.998 6.024.2.792.911 2.2.999 3.012.091.592.001 1.409 0 2.008v4.017c.029.126.011-.13 0 0ZM353.883 492c.222 4.157.073 8.83 0 13 .073 4.17.222 7.843 0 12-.223-4.157-.951-7.83-.878-12-.073-4.17.655-8.843.878-13Z",
                            })),
                        _path13 ||
                            (_path13 = react.createElement("path", {
                                fill: "#FAFAFA",
                                d: "M354 499c8.008 0 14-5.992 14-14s-5.992-15-14-15-15 6.992-15 15 6.992 14 15 14Z",
                            })),
                        _path14 ||
                            (_path14 = react.createElement("path", {
                                fill: "#263238",
                                d: "M367.842 484.002c-.117-1.103-.738-1.885-.994-2.967-.812-2.922-2.47-6.099-4.973-7.91-1.702-1.247-3.867-1.612-5.967-1.978-2.411-.421-4.66-.81-6.962 0-1.239.434-2.929 1.205-3.979 1.978-1.11.781-2.187 1.883-2.983 2.966-1.722 2.265-1.989 6.087-1.989 8.9 0 2.813.267 5.646 1.989 7.911.799 1.08 1.876 2.182 2.983 2.966 1.045.776 2.737 1.556 3.979 1.978 2.15.769 4.694.323 6.962 0 2.268-.322 4.135-.642 5.967-1.978 2.504-1.816 4.161-4.984 4.973-7.91.258-1.081.88-2.852.994-3.956.092 1.124.295 2.865 0 3.956-.625 2.559-2.017 5.103-3.978 6.922-1.96 1.819-5.29 3.46-7.956 3.955-2.513.475-4.556-.143-6.962-.989-1.303-.435-2.88-1.172-3.979-1.978-1.169-.816-2.14-1.833-2.983-2.966-1.818-2.376-2.984-5.943-2.984-8.9 0-2.957 1.166-5.535 2.984-7.911.839-1.132 1.811-2.158 2.983-2.966 1.102-.805 2.678-1.533 3.979-1.978 2.409-.834 4.449-1.451 6.962-.989 2.175.396 4.208 1.664 5.967 2.967 2.548 1.894 5.241 4.879 5.967 7.91.3 1.107.097 1.827 0 2.967Z",
                            })),
                        _rect ||
                            (_rect = react.createElement("rect", {
                                width: 652,
                                height: 32,
                                y: 517,
                                fill: "#FFF2CC",
                                rx: 3,
                            })),
                        _path15 ||
                            (_path15 = react.createElement("path", {
                                fill: "#263238",
                                d: "M662.299 0H560.701C553.686 0 548 5.665 548 12.653v213.694c0 6.988 5.686 12.653 12.701 12.653h101.598c7.015 0 12.701-5.665 12.701-12.653V12.653C675 5.665 669.314 0 662.299 0Z",
                            })),
                        _path16 ||
                            (_path16 = react.createElement("path", {
                                fill: "#fff",
                                stroke: "#263238",
                                strokeMiterlimit: 10,
                                strokeWidth: 1.337,
                                d: "M670 26H554v187h116V26Z",
                            })),
                        _path17 ||
                            (_path17 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M629.132 101.645c9.781-9.745 9.781-25.545 0-35.29-9.781-9.745-25.64-9.745-35.421 0-9.782 9.745-9.782 25.545 0 35.29 9.781 9.745 25.64 9.745 35.421 0ZM643.877 201h-65.748a1.229 1.229 0 0 1-.431-.074 1.144 1.144 0 0 1-.367-.216 1.007 1.007 0 0 1-.245-.324.903.903 0 0 1-.002-.768c.057-.122.14-.233.245-.326.105-.093.23-.167.367-.217.137-.05.285-.076.433-.075h65.748c.148 0 .295.026.432.076.136.051.26.125.364.218a.984.984 0 0 1 .243.326.894.894 0 0 1 .084.383.943.943 0 0 1-.329.705c-.21.187-.496.292-.794.292Zm2.515-78h-69.784c-1.44 0-2.608 1.129-2.608 2.522v7.956c0 1.393 1.168 2.522 2.608 2.522h69.784c1.44 0 2.608-1.129 2.608-2.522v-7.956c0-1.393-1.168-2.522-2.608-2.522Zm0 25h-69.784c-1.44 0-2.608 1.129-2.608 2.522v7.956c0 1.393 1.168 2.522 2.608 2.522h69.784c1.44 0 2.608-1.129 2.608-2.522v-7.956c0-1.393-1.168-2.522-2.608-2.522Z",
                            })),
                        _path18 ||
                            (_path18 = react.createElement("path", {
                                fill: "#263238",
                                d: "m624.131 96.515-7.464-4.22V88.81a11.408 11.408 0 0 0 2.294-4.395c.257.09.527.136.8.137.925 0 1.514-2.818 1.613-4.83 1.077-2.24-.39-3.552-.39-3.552s.608-.597 1.011-2.992c.404-2.396-1.421-1.396-2.843-3.59-1.421-2.195-2.439-4.584-7.107-4.584a6.501 6.501 0 0 0-3.642.974 6.328 6.328 0 0 0-2.453 2.818c-1.162.004-2.32.137-3.451.396-1.428.396-1.831 4.986-.615 6.784.545.983.835 2.082.846 3.2-.324-.39-.661-.493-.846.39-.403 1.993 1.223 4.784 1.223 4.784l.84-.233a11.611 11.611 0 0 0 2.386 4.693v3.487l-7.464 4.22a5.695 5.695 0 0 0-2.099 2.06 5.555 5.555 0 0 0-.77 2.815v2.415A25.657 25.657 0 0 0 611.5 109c5.61 0 11.061-1.827 15.5-5.194v-2.415a5.537 5.537 0 0 0-.768-2.816 5.68 5.68 0 0 0-2.101-2.06ZM583.339 159a.655.655 0 0 1-.457-.195.611.611 0 0 1-.152-.213.613.613 0 0 1-.053-.257.68.68 0 0 1 .099-.343l1.192-1.934-2.324.073a.61.61 0 0 1-.476-.181.678.678 0 0 1 0-.893.596.596 0 0 1 .476-.188l2.291.087-1.178-1.928a.651.651 0 0 1-.047-.607.61.61 0 0 1 .153-.213.66.66 0 0 1 .456-.195.59.59 0 0 1 .537.35l1.132 2.076 1.119-2.063a.66.66 0 0 1 .576-.376.596.596 0 0 1 .443.202.69.69 0 0 1 .1.806l-1.199 1.948 2.324-.087a.6.6 0 0 1 .477.188.627.627 0 0 1 .172.443.68.68 0 0 1-.172.45.614.614 0 0 1-.477.181l-2.337-.073 1.165 1.914a.677.677 0 0 1-.563 1.028.584.584 0 0 1-.529-.363l-1.106-2.015-1.099 2.015a.625.625 0 0 1-.543.363Zm11.007-.013a.66.66 0 0 1-.456-.195.633.633 0 0 1-.205-.469.676.676 0 0 1 .099-.342l1.19-1.931-2.314.074a.66.66 0 0 1-.483-.181.645.645 0 0 1 .124-.988.63.63 0 0 1 .359-.092l2.281.087-1.177-1.924a.682.682 0 0 1-.099-.349.617.617 0 0 1 .205-.469.661.661 0 0 1 .456-.195.59.59 0 0 1 .536.349l1.131 2.072 1.117-2.059a.654.654 0 0 1 .575-.375.58.58 0 0 1 .444.201.678.678 0 0 1 .191.476.679.679 0 0 1-.092.329l-1.197 1.944 2.327-.074a.594.594 0 0 1 .47.188.627.627 0 0 1 .172.443.68.68 0 0 1-.172.449.615.615 0 0 1-.47.181l-2.34-.074 1.163 1.911a.677.677 0 0 1-.094.83.66.66 0 0 1-.468.196.581.581 0 0 1-.529-.362l-1.104-2.012-1.098 2.012a.621.621 0 0 1-.542.349Zm9.996.013a.656.656 0 0 1-.462-.195.646.646 0 0 1-.106-.813l1.189-1.934-2.311.073a.629.629 0 0 1-.595-.372.65.65 0 0 1 .113-.702.611.611 0 0 1 .482-.188l2.278.087-1.175-1.928a.672.672 0 0 1-.099-.349.676.676 0 0 1 .204-.471.656.656 0 0 1 .462-.195.588.588 0 0 1 .528.35l1.129 2.076 1.116-2.063a.66.66 0 0 1 .574-.376.58.58 0 0 1 .443.202.667.667 0 0 1 .191.477.679.679 0 0 1-.092.329l-1.195 1.948 2.323-.087a.586.586 0 0 1 .472.162.613.613 0 0 1 .189.469.683.683 0 0 1-.165.45.607.607 0 0 1-.476.181l-2.33-.073 1.155 1.914c.065.107.1.23.099.356a.685.685 0 0 1-.204.47.618.618 0 0 1-.449.202.565.565 0 0 1-.315-.102.586.586 0 0 1-.207-.261l-1.109-2.015-1.096 2.015a.605.605 0 0 1-.561.363Zm10.994 0a.672.672 0 0 1-.567-1.008l1.187-1.935-2.308.074a.647.647 0 0 1-.481-.181.677.677 0 0 1 0-.893.649.649 0 0 1 .481-.189l2.281.088-1.167-1.928a.682.682 0 0 1-.098-.35.676.676 0 0 1 .204-.47.654.654 0 0 1 .461-.195.584.584 0 0 1 .317.096c.095.062.17.15.218.254l1.12 2.076 1.115-2.063a.658.658 0 0 1 .573-.376.576.576 0 0 1 .442.202.667.667 0 0 1 .191.476.683.683 0 0 1-.092.33l-1.194 1.948 2.321-.088a.602.602 0 0 1 .66.632.685.685 0 0 1-.165.45.609.609 0 0 1-.475.181l-2.327-.074 1.153 1.915a.676.676 0 0 1 .047.614.617.617 0 0 1-.152.212.622.622 0 0 1-.448.202.57.57 0 0 1-.521-.363l-1.108-2.015-1.094 2.015a.624.624 0 0 1-.234.269.603.603 0 0 1-.34.094Zm10.004 0a.656.656 0 0 1-.648-.584.682.682 0 0 1 .087-.424l1.182-1.934-2.312.073a.652.652 0 0 1-.482-.181.677.677 0 0 1 0-.893.659.659 0 0 1 .482-.188l2.285.087-1.175-1.928a.682.682 0 0 1-.099-.349.673.673 0 0 1 .66-.666.598.598 0 0 1 .535.35l1.123 2.076 1.116-2.063a.66.66 0 0 1 .574-.376.594.594 0 0 1 .449.202.672.672 0 0 1 .093.806l-1.195 1.948 2.324-.087a.586.586 0 0 1 .472.162.626.626 0 0 1 .189.469.678.678 0 0 1-.166.45.61.61 0 0 1-.475.181l-2.331-.073 1.155 1.914a.677.677 0 0 1 .047.614.617.617 0 0 1-.152.212.618.618 0 0 1-.449.202.565.565 0 0 1-.315-.102.586.586 0 0 1-.207-.261l-1.109-2.015-1.097 2.015a.607.607 0 0 1-.561.363Zm11.014 0a.65.65 0 0 1-.456-.195.614.614 0 0 1-.205-.47.68.68 0 0 1 .099-.343l1.183-1.934-2.314.073a.613.613 0 0 1-.467-.167.637.637 0 0 1-.148-.704.611.611 0 0 1 .133-.203.587.587 0 0 1 .476-.188l2.287.087-1.177-1.928a.682.682 0 0 1-.099-.349.682.682 0 0 1 .198-.471.66.66 0 0 1 .463-.195.59.59 0 0 1 .536.35l1.124 2.076 1.124-2.063a.658.658 0 0 1 .568-.376.594.594 0 0 1 .45.202.676.676 0 0 1 .185.477c0 .115-.03.228-.086.329l-1.197 1.948 2.321-.087a.596.596 0 0 1 .476.188.627.627 0 0 1 .172.443.68.68 0 0 1-.172.45.61.61 0 0 1-.476.181l-2.334-.073 1.157 1.914a.672.672 0 0 1-.099.826.654.654 0 0 1-.456.202.581.581 0 0 1-.523-.363l-1.11-2.015-1.098 2.015a.608.608 0 0 1-.535.363Z",
                            })),
                        react.createElement("path", {
                            fill: "#EFC25A",
                            d: "M670 26H554v7h116v-7Z",
                            style: { mixBlendMode: "multiply" },
                        }),
                        _path19 ||
                            (_path19 = react.createElement("path", {
                                fill: "#EFC25A",
                                stroke: "#263238",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 1.337,
                                d: "M624.263 13h-25.526c-.461 0-.902-.158-1.228-.44A1.404 1.404 0 0 1 597 11.5c0-.398.183-.78.509-1.06.326-.282.767-.44 1.228-.44h25.526c.461 0 .902.158 1.228.44.326.28.509.662.509 1.06s-.183.78-.509 1.06c-.326.282-.767.44-1.228.44Z",
                            })),
                        _path20 ||
                            (_path20 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M619 223.007a7.001 7.001 0 1 0-13.466 2.675 7.006 7.006 0 0 0 6.473 4.318 7.001 7.001 0 0 0 6.993-6.993Z",
                            })),
                        _path21 ||
                            (_path21 = react.createElement("path", {
                                fill: "#EFC25A",
                                stroke: "#263238",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 1.337,
                                d: "M615 220h-7v7h7v-7Z",
                            })),
                        _path22 ||
                            (_path22 = react.createElement("path", {
                                fill: "#EBB376",
                                d: "M511 183c7.566 1.194 14.908 24.836 18.096 26.836 3.188 1.999.449-22.14.449-22.14l6.059-.818s7.169 36.389-3.294 36.121c-7.937-.202-17.461-13.713-19.842-20.597L511 183Z",
                            })),
                        _path23 ||
                            (_path23 = react.createElement("path", {
                                fill: "#000",
                                d: "M532.31 222.999c-4.828-.121-10.238-5.163-14.26-10.649a40.792 40.792 0 0 1-5.529-9.989l-.78-9.95L511 183c7.566 1.197 14.908 24.886 18.096 26.89 3.188 2.003.449-22.184.449-22.184l6.059-.82s7.169 36.381-3.294 36.113Z",
                                opacity: 0.1,
                            })),
                        _path24 ||
                            (_path24 = react.createElement("path", {
                                fill: "#000",
                                d: "M518.686 213a40.3 40.3 0 0 1-5.859-10.02L512 193s8.746 8.469 6.686 20Z",
                                opacity: 0.2,
                            })),
                        _path25 ||
                            (_path25 = react.createElement("path", {
                                fill: "#263238",
                                d: "M483.037 134.14s-13.671-.162-13.014 18.725 13.806 19.143 9.392 24.603a31.618 31.618 0 0 0 24.794 0s-2.429-.957-1.275-4.422c1.154-3.464 7.486-8.425 8.05-15.732.563-7.307-13.806-25.062-27.947-23.174Z",
                            })),
                        _path26 ||
                            (_path26 = react.createElement("path", {
                                fill: "#263238",
                                d: "M497.031 170.453s17.572-3.242 14.639-19.869c-2.406-13.628-8.8-18-14.639-19.95a12.217 12.217 0 0 0-7.754-.005 12.162 12.162 0 0 0-6.182 4.659s-11.922-3.363-9.854 16.143c2.068 19.506 15.017 27.928 23.79 19.022Z",
                            })),
                        _path27 ||
                            (_path27 = react.createElement("path", {
                                fill: "#EBB376",
                                d: "M528.659 448 521 444.055l2.783-11.514 2.57-10.541 9.647 3.172-3.883 12.087L528.659 448Z",
                            })),
                        _path28 ||
                            (_path28 = react.createElement("path", {
                                fill: "#263238",
                                d: "M518.977 443.083c.454-.857 10.805 5.171 10.805 5.171s3.242 10.007 8.885 14.736c5.643 4.729.16 6.765-6.977 3.202l-17.662-8.842c-5.003-2.558.253-5.318 4.949-14.267Z",
                            })),
                        _path29 ||
                            (_path29 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M533.125 453.339a18.012 18.012 0 0 1-3.12-2.989.195.195 0 0 1 0-.09.376.376 0 0 1 0-.116.171.171 0 0 1 0-.078.195.195 0 0 1 .084-.116c.097-.09 2.315-2.061 4.16-1.945.271.017.535.088.774.208s.448.286.612.488c.175.15.295.348.342.566a.986.986 0 0 1-.078.645c-.333.528-1.387.695-2.552.734.912.253 1.729.74 2.358 1.404.105.139.178.296.214.463.036.166.034.338-.006.504-.153.695-.555.914-.86.979a2.763 2.763 0 0 1-1.038-.142 2.612 2.612 0 0 1-.89-.515Zm-2.01-2.693c1.289 1.404 3.023 2.925 3.758 2.757.069 0 .263 0 .36-.502a.59.59 0 0 0-.125-.516c-.568-.798-2.62-1.404-3.993-1.739Zm3.688-1.817a1.315 1.315 0 0 0-.679-.219 5.656 5.656 0 0 0-3.092 1.289c1.955.18 3.979.103 4.257-.348.083-.142-.097-.387-.222-.528a1.207 1.207 0 0 0-.264-.194Z",
                            })),
                        _path30 ||
                            (_path30 = react.createElement("path", {
                                fill: "#000",
                                d: "M531.129 439 523 434.082 525.537 423l9.463 3.242L531.129 439Z",
                                opacity: 0.2,
                            })),
                        _path31 ||
                            (_path31 = react.createElement("path", {
                                fill: "#EBB376",
                                d: "M515 458h-9.055l-2.589-11.191L501 436.554 511.589 435l1.808 12.178L515 458Z",
                            })),
                        _path32 ||
                            (_path32 = react.createElement("path", {
                                fill: "#263238",
                                d: "M503.347 457.515c0-1.012 12.182-.221 12.182-.221s7.459 7.763 14.701 9.509c7.242 1.747 3.194 6.197-4.9 6.197h-20.075c-5.78 0-2.152-5.018-1.908-15.485Z",
                            })),
                        _path33 ||
                            (_path33 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M521.416 460.99a16.254 16.254 0 0 1-5.281-1.597l-.114-.085v-.071a.438.438 0 0 1 0-.268c0-.113 1.125-3.068 2.847-3.788a1.976 1.976 0 0 1 1.651 0c.584.282.854.636.84 1.074 0 .664-.954 1.328-1.993 1.88a5.072 5.072 0 0 1 2.847.311 1.408 1.408 0 0 1 .683.848 1.223 1.223 0 0 1-.313 1.413 1.776 1.776 0 0 1-1.167.283Zm-4.114-1.809c1.879.777 4.27 1.484 4.811.989 0 0 .214-.17.086-.664a.67.67 0 0 0-.356-.438c-.925-.538-3.103-.212-4.541.113Zm2.278-3.492a1.354 1.354 0 0 0-.513.114 5.666 5.666 0 0 0-2.192 2.713c1.893-.706 3.715-1.696 3.744-2.261 0-.184-.271-.339-.442-.424a1.318 1.318 0 0 0-.597-.142Z",
                            })),
                        _path34 ||
                            (_path34 = react.createElement("path", {
                                fill: "#000",
                                d: "m513 448-9.709-.415L501 436.687 511.238 435 513 448Z",
                                opacity: 0.2,
                            })),
                        _path35 ||
                            (_path35 = react.createElement("path", {
                                fill: "#263238",
                                d: "m471.661 249.538 21.722-3.5L513.071 242l5.353 32.306s27.718 40.382 34.437 68.165c6.719 27.783-18.483 92.233-18.483 92.233l-11.577-5.155s8.03-61.987 7.843-69.431c-.121-4.846-15.927-27.191-26.982-42.253-.321 3.782 3.266 41.486 3.266 41.486L514.73 442h-14.588c-50.163-156.67-28.481-192.462-28.481-192.462Z",
                            })),
                        _path36 ||
                            (_path36 = react.createElement("path", {
                                fill: "#fff",
                                d: "M500.152 442h14.536l-7.804-82.649s-3.56-37.959-3.266-41.486a976.525 976.525 0 0 1 6.947 9.57c9.731 13.609 19.943 28.78 20.077 32.67.188 7.457-7.843 69.444-7.843 69.444l11.578 5.155s25.203-64.477 18.484-92.246c-6.719-27.77-34.439-68.152-34.439-68.152L513.068 242l-19.689 4.038-21.724 3.5S449.985 285.384 500.152 442Z",
                                opacity: 0.6,
                            })),
                        _path37 ||
                            (_path37 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M521.769 424 539 430.014 535.154 436 521 430.875l.769-6.875ZM498 439.581 516 437l-.896 7.04L500.24 446l-2.24-6.419Z",
                            })),
                        _path38 ||
                            (_path38 = react.createElement("path", {
                                fill: "#000",
                                d: "M503.709 317.52c2.29 2.947 4.776 6.16 7.291 9.48-4.018-19.76-8.752-39-8.752-39-.6 9.861-.11 19.755 1.461 29.52Z",
                                opacity: 0.2,
                            })),
                        _path39 ||
                            (_path39 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M512.406 243.244 472.688 246s-.536-21.323-3.702-32.414a198.498 198.498 0 0 0-1.422-4.719 240.141 240.141 0 0 0-4.05-11.724 8.267 8.267 0 0 1 1.945-8.752 8.041 8.041 0 0 1 4.024-2.191c2.924-.646 5.808-1.251 7.377-1.493A143.43 143.43 0 0 1 494.834 183c5.098 0 10.731.296 13.95.524l2.791.215s1.26.283 2.065 7.691c.725 6.964.376 26.485-1.234 51.814Z",
                            })),
                        _path40 ||
                            (_path40 = react.createElement("path", {
                                fill: "#EBB376",
                                d: "M494.209 192c-10.31-1.834-13.209-6.344-13.209-6.344 6.901-5.788 1.988-16.656 1.988-16.656l12.422 2.921a34.673 34.673 0 0 0-.759 5.149c-.483 7.458 2.94 7.703 2.94 7.703 1.891 4.089-3.382 7.227-3.382 7.227Z",
                            })),
                        _path41 ||
                            (_path41 = react.createElement("path", {
                                fill: "#000",
                                d: "M495 171.896a35.282 35.282 0 0 0-.737 5.104c-5.772-1.657-11.263-8-11.263-8l12 2.896Z",
                                opacity: 0.2,
                            })),
                        _path42 ||
                            (_path42 = react.createElement("path", {
                                fill: "#EBB376",
                                d: "M493.983 137.055c10.366.958 13.206 6.933 13.007 17.926-.25 13.732-4.067 23.161-16.783 19.046-17.273-5.57-13.457-38.55 3.776-36.972Z",
                            })),
                        _path43 ||
                            (_path43 = react.createElement("path", {
                                fill: "#D58745",
                                d: "M500.209 154a23.823 23.823 0 0 0 2.791 4.925 3.04 3.04 0 0 1-1.363.923 2.998 2.998 0 0 1-1.637.07l.209-5.918Z",
                            })),
                        _path44 ||
                            (_path44 = react.createElement("path", {
                                fill: "#263238",
                                d: "M493.996 152.57c0 .817-.549 1.455-1.098 1.429-.549-.025-.945-.74-.894-1.569.051-.83.549-1.455 1.098-1.429.549.025.945.74.894 1.569Z",
                            })),
                        _path45 ||
                            (_path45 = react.createElement("path", {
                                fill: "#263238",
                                d: "m493 150.68 2-.68s-1.048 1.685-2 .68Zm11.995 1.897c-.063.819-.548 1.46-1.096 1.421-.548-.038-.956-.73-.892-1.562.063-.832.535-1.473 1.096-1.434.561.038.943.742.892 1.575Z",
                            })),
                        _path46 ||
                            (_path46 = react.createElement("path", {
                                fill: "#263238",
                                d: "m504 150.668 2-.668s-1.117 1.699-2 .668ZM489.499 146a.624.624 0 0 1-.354-.116.408.408 0 0 1-.145-.303c0-.113.052-.221.145-.303a6.874 6.874 0 0 1 2.561-1.112 7.63 7.63 0 0 1 2.893-.053.565.565 0 0 1 .183.067.473.473 0 0 1 .138.12.368.368 0 0 1 .067.32.384.384 0 0 1-.081.151.499.499 0 0 1-.145.114.61.61 0 0 1-.388.055 6.418 6.418 0 0 0-2.373.03 5.802 5.802 0 0 0-2.12.879.53.53 0 0 1-.171.11.595.595 0 0 1-.21.041Zm17.022 1a.573.573 0 0 1-.303-.094 4.443 4.443 0 0 0-1.679-.882 4.804 4.804 0 0 0-1.943-.13.542.542 0 0 1-.359-.049.449.449 0 0 1-.221-.257.384.384 0 0 1 .046-.319.468.468 0 0 1 .284-.199 5.886 5.886 0 0 1 2.393.121 5.46 5.46 0 0 1 2.085 1.056.426.426 0 0 1 .174.288.406.406 0 0 1-.108.312.459.459 0 0 1-.164.115.526.526 0 0 1-.205.038Z",
                            })),
                        _path47 ||
                            (_path47 = react.createElement("path", {
                                fill: "#263238",
                                d: "M480.564 153.934s5.655-8.145 5.509-14.829c0 0 21.476-6.644 20.611 14.497 0 0 3.699-18.457-14.224-20.49-17.923-2.033-20.225 24.237-11.643 32.888 0-.013-3.765-6.99-.253-12.066Z",
                            })),
                        _path48 ||
                            (_path48 = react.createElement("path", {
                                fill: "#EBB376",
                                d: "M483 155.652a4.384 4.384 0 0 0-.357-1.768 4.592 4.592 0 0 0-1.048-1.505 4.921 4.921 0 0 0-1.58-1.013 5.167 5.167 0 0 0-1.871-.366c-3.492.067-5.778 6.603 2.669 8.942 1.207.335 2.016-.748 2.187-4.29Z",
                            })),
                        _path49 ||
                            (_path49 = react.createElement("path", {
                                fill: "#263238",
                                d: "M499.26 164.957a6.206 6.206 0 0 1-3.835-1.093 6.31 6.31 0 0 1-2.402-3.21.5.5 0 0 1 .034-.384.478.478 0 0 1 .122-.153.515.515 0 0 1 .37-.115.512.512 0 0 1 .44.365 5.331 5.331 0 0 0 2.115 2.764 5.252 5.252 0 0 0 3.355.851.51.51 0 0 1 .071 1.018l-.27-.043ZM506.533 151a.458.458 0 0 1-.276-.096.488.488 0 0 1-.17-.247c-4.019-13.737-19.412-11.594-19.557-11.567a.443.443 0 0 1-.344-.092.492.492 0 0 1-.171-.509.484.484 0 0 1 .213-.298.47.47 0 0 1 .171-.063c.157 0 16.325-2.266 20.581 12.24a.507.507 0 0 1-.036.372.475.475 0 0 1-.28.233l-.131.027Z",
                            })),
                        _path50 ||
                            (_path50 = react.createElement("path", {
                                fill: "#EBB376",
                                d: "M534.247 173.002s5.517-.092 5.704.86c.187.953-.173 8.956-.908 10.081a16.5 16.5 0 0 1-2.739 2.738l.534 14.181-3.286 1.138-2.979-12.977s-3.38-3.268-2.392-7.409c.989-4.14 6.066-8.612 6.066-8.612Z",
                            })),
                        _path51 ||
                            (_path51 = react.createElement("path", {
                                fill: "#000",
                                d: "M534.247 173.002s5.517-.092 5.704.86c.187.953-.173 8.956-.908 10.081a16.5 16.5 0 0 1-2.739 2.738l.534 14.181-3.286 1.138-2.979-12.977s-3.38-3.268-2.392-7.409c.989-4.14 6.066-8.612 6.066-8.612Z",
                                opacity: 0.1,
                            })),
                        _path52 ||
                            (_path52 = react.createElement("path", {
                                fill: "#263238",
                                d: "M525.001 181.106a.867.867 0 0 0 .571.847c.114.04.236.055.356.043l9.404-.74c.262-.025.507-.146.689-.339.182-.194.291-.447.306-.715l.671-19.175a.976.976 0 0 0-.566-.944.947.947 0 0 0-.374-.083l-9.405.74c-.273.055-.52.203-.7.419a1.27 1.27 0 0 0-.294.772l-.658 19.175Z",
                            })),
                        _path53 ||
                            (_path53 = react.createElement("path", {
                                fill: "#fff",
                                d: "m526.626 161.608-.617 18.569a.706.706 0 0 0 .484.786.745.745 0 0 0 .335.03l7.985-.605c.536 0 1.503-.408 1.516-.934l.671-18.622c0-.526-.926-.868-1.463-.829l-8.052.605a.975.975 0 0 0-.633.331.938.938 0 0 0-.226.669Z",
                                opacity: 0.5,
                            })),
                        _path54 ||
                            (_path54 = react.createElement("path", {
                                fill: "#EBB376",
                                d: "m515 195 3.64-8.507s1.186-11.4 1.759-12.629c.573-1.229 9.844-.764 10.907-.833 1.063-.068.818 11.305-.15 12.507-.968 1.201-4.758 2.157-4.758 2.157L520.576 199 515 195Zm-9.219-4.81c-.973 3.894-4.716 6.89-12.458 6.808a20.782 20.782 0 0 1-12.162-4.194 30.353 30.353 0 0 1-7.161-7.516c1.122-.205 2.257-.382 3.392-.559A143.843 143.843 0 0 1 495.498 183c3.202 0 6.594.095 9.459.245a11.268 11.268 0 0 1 .824 6.945Z",
                            })),
                        _path55 ||
                            (_path55 = react.createElement("path", {
                                fill: "#263238",
                                d: "M472.668 243.061 471 250l43-2.151-1.238-6.849-40.094 2.061Z",
                            })),
                        _path56 ||
                            (_path56 = react.createElement("path", {
                                fill: "#fff",
                                d: "M497.118 249a1.653 1.653 0 0 1-1.085-.395 1.52 1.52 0 0 1-.526-.989l-.5-4.477a1.58 1.58 0 0 1 .379-1.178 1.64 1.64 0 0 1 1.136-.543l6.306-.414a1.67 1.67 0 0 1 1.168.367c.324.263.526.638.564 1.043l.433 4.412a1.56 1.56 0 0 1-.365 1.152 1.606 1.606 0 0 1-1.123.543l-6.252.479h-.135Zm-.758-6.004.487 4.477c.01.068.046.129.101.172a.297.297 0 0 0 .197.061l6.251-.466a.292.292 0 0 0 .19-.103.27.27 0 0 0 .068-.194l-.447-4.412a.238.238 0 0 0-.089-.175.263.263 0 0 0-.195-.058l-6.306.414a.256.256 0 0 0-.113.021.255.255 0 0 0-.09.069.235.235 0 0 0 0 .194h-.054Z",
                            })),
                        _path57 ||
                            (_path57 = react.createElement("path", {
                                fill: "#fff",
                                d: "M503.265 245h-2.53a.945.945 0 0 1-.52-.146c-.138-.094-.215-.221-.215-.354.004-.132.082-.258.22-.351a.954.954 0 0 1 .515-.149h2.53a.954.954 0 0 1 .515.149c.138.093.216.219.22.351 0 .133-.077.26-.215.354a.945.945 0 0 1-.52.146Z",
                            })),
                        _path58 ||
                            (_path58 = react.createElement("path", {
                                fill: "#000",
                                d: "M478.677 211.609c-3.84 1.336-8.142-1.002-11.059-3.26a240.605 240.605 0 0 0-4.098-11.651 8.077 8.077 0 0 1-.321-4.635 8.172 8.172 0 0 1 2.288-4.063c7.382 6.854 18.32 21.886 13.19 23.609Z",
                                opacity: 0.2,
                            })),
                        _path59 ||
                            (_path59 = react.createElement("path", {
                                fill: "#EBB376",
                                d: "M465.66 187.599a7.095 7.095 0 0 1 2.584-1.341 7.032 7.032 0 0 1 2.897-.185c.968.14 1.897.481 2.73 1.001a7.153 7.153 0 0 1 2.109 2.021c5.892 8.555 15.783 22.781 16.978 23.474 1.704 1.007 14.561-11.002 26.023-26.235l7.019 2.72s-18.132 37.782-31.002 37.945c-9.65.123-24.158-19.707-30.747-29.676a7.31 7.31 0 0 1-1.175-5.141 7.256 7.256 0 0 1 2.584-4.583Z",
                            })),
                        _path60 ||
                            (_path60 = react.createElement("path", {
                                fill: "#000",
                                d: "M478.764 256s-3.389 8.739-11.764 11.863V271s12.278-4.956 14-13.181L478.764 256Zm-9.451 47.097L480.364 301 483 323.444 472.418 325l-1.526-14.611 9.551-1.371-.548-5.539-.157 4.919-10.738 1.74.313-7.041Z",
                                opacity: 0.2,
                            }))
                    );
                },
                signin: function SvgSignin(props) {
                    return react.createElement(
                        "svg",
                        signin_extends(
                            { xmlns: "http://www.w3.org/2000/svg", width: 696, height: 588, fill: "none" },
                            props
                        ),
                        signin_path ||
                            (signin_path = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M569.97 126.149 558 127l.074.997 11.97-.851-.074-.997zm10.015-.575L574 126l.074.997 5.985-.425-.074-.998z",
                            })),
                        signin_path2 ||
                            (signin_path2 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "m628.977.027-191.952 13.99c-3.998.306-7.374 2.026-9.998 4.998-2.623 2.971-4.266 7.072-3.999 10.993l6.999 87.944c.309 3.923 1.961 7.42 4.998 9.993 3.038 2.573 6.991 4.265 10.998 3.998l10.997-1c.79-.055 1.4.492 1.999 1 .6.507.942 1.224 1 1.998l1 15.99c.02.319-.198.747 0 1 .198.252.691.898 1 .999.308.101.686.086.999 0 .314-.086.789-.756 1-.999l17.996-19.988c.765-.864 1.834-1.913 2.999-1.998l152.962-9.994c4-.303 7.372-3.024 9.998-5.996 2.625-2.972 4.266-6.072 3.999-9.994l-6.999-88.943c-.309-3.92-1.965-7.421-4.998-9.994-3.033-2.573-6.995-4.259-10.998-3.997z",
                            })),
                        signin_path3 ||
                            (signin_path3 = react.createElement("path", {
                                fill: "#fff",
                                d: "M465 54h10l1 11 11-1-1-11 11-1 2 33h-10l-1-13-11 1 1 13-11 1-2-33zm67 19.002-17.979.992c.141 1.161.206 2.099.999 2.976.454.467 1.378.771 1.998.992.619.221 1.341 1.063 1.997.992.901-.063 1.243-.507 1.998-.992.59-.436 1.605-1.371 1.998-1.984H532c-.989 2.187-2.958 4.622-4.994 5.953-1.869 1.154-4.339 1.747-7.991 1.984-2.553.29-5.556-.187-7.99-.993-1.952-.799-3.796-2.266-4.995-3.968-1.374-1.936-1.882-3.6-1.997-5.952-.191-1.634.494-3.391.999-4.96.504-1.57.883-3.726 1.997-4.96 2.225-2.422 5.795-3.67 9.989-3.969 2.776-.322 5.365.053 7.99.992 2.01.838 3.851 2.152 4.994 3.968 1.309 2.257 1.901 5.346 1.998 7.937v.992zm-9.988-3.968c-.13-1.357-.028-2.988-.999-3.969-.489-.367-1.399.147-1.998 0-.598-.146-1.389-.097-1.997 0-.609.098-1.48-.326-1.998 0-.519.327-.657.492-.999.993-.571.981-1.024 2.84-.999 3.968l8.99-.992zM535 49l10-1 2 32-10 1-2-32zm16-1 10-1 2 32-10 1-2-32zm16.03 19.966c-.176-1.636.468-3.398.998-4.961.531-1.564.853-3.742 1.998-4.962 2.32-2.489 5.737-3.67 9.987-3.97 4.842-.334 8.297.44 10.985 2.978 2.233 2.27 3.893 5.802 3.995 8.93.102 3.13-.915 6.53-2.996 8.932-2.298 2.467-5.622 3.648-9.987 3.969-3.391.392-7.133-.175-9.987-1.985-1.518-1.016-2.108-2.407-2.996-3.97-.888-1.561-1.926-3.18-1.997-4.96zm8.988-.992c-.018 1.65.909 2.696 1.997 3.97.439.433 1.41.776 1.998.992.587.215.371 1.034.998.992.627-.042 1.447-.7 1.998-.992.551-.292 1.624-.505 1.997-.993.876-1.455 1.272-3.3.999-4.961.01-1.618-.929-2.723-1.998-3.97-.417-.441-1.42-.775-1.997-.992-.577-.218-.381-1.044-.999-.992-.644.029-1.433.69-1.997.992-.564.3-1.63.481-1.997.992-.874 1.407-1.278 3.345-.999 4.962zM598 45l10-1v22l-6 1-3-15-1-7zm2 24 9-1 1 8-9 1-1-8z",
                            })),
                        signin_path4 ||
                            (signin_path4 = react.createElement("path", {
                                fill: "#263238",
                                d: "M430.02 150.123c-.053 1.742-.235 3.29 0 5.017-10.774 3.6-22.654 4.868-33.861 3.01.538-2.036.886-3.918.996-6.02-.375 2.116-.927 4.153-1.992 6.02-2.116-.405-2.988-1.004-2.988-1.004s1.909-11.548-1.991-20.067c-3.901-8.519-1.953-12.702.996-14.046 5.469-16.824 25.909-14.856 32.865-8.027 8.823 8.662 9.385 33.55 10.955 39.13-1.296.559-2.711.551-3.984 1.004-.637-1.56-.877-3.337-.996-5.017z",
                            })),
                        signin_path5 ||
                            (signin_path5 = react.createElement("path", {
                                fill: "#FFC3BD",
                                d: "m439 176 1 2.998c.392 1.16 1.596 2.894 2 3.997.796 2.321 1.109 4.766 2 6.994.891 2.229 2.073 3.721 3 5.996l1 3.997v.999h1c-.147-.126-.817.066-1 0-.261-.093-.166 0 0 0 .286-.001.727.083 1 0 .929-.288 1.16-1.515 2-1.999 2.026-1.153 4.166-1.57 6-2.997 1.925-1.463 4.147-3.383 6-4.997 1.853-1.613 3.206-3.348 5-4.996l4 2.998c-1.521 2.136-3.372 4.011-5 5.995-1.628 1.985-3.123 4.15-5 5.996-1.932 1.926-3.75 3.432-6 4.996-1.287.881-2.547 1.414-4 1.998-.922.362-2.014.883-3 1-1.339.163-2.754-.494-4-1-1.359-.565-3.189-.792-4-1.998-.178-.267.131-.756 0-.999v-.999l-1-1c-.558-1.16-1.513-1.906-2-2.997-1.081-2.322-2.014-4.674-3-6.995-.986-2.321-2.085-4.604-3-6.995-.428-1.16-.596-2.778-1-3.997-.404-1.218-.608-2.569-1-3.997l9-1.998z",
                            })),
                        signin_path6 ||
                            (signin_path6 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M435.85 164.705c4.166 1.061 7.15 17.2 7.15 17.2L431.764 190s-10.35-16.678-7.15-21.248c3.333-4.751 5.162-5.591 11.236-4.047z",
                            })),
                        signin_path7 ||
                            (signin_path7 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M435.85 164.705c4.166 1.061 7.15 17.2 7.15 17.2L431.764 190s-10.35-16.678-7.15-21.248c3.333-4.751 5.162-5.591 11.236-4.047z",
                            })),
                        signin_path8 ||
                            (signin_path8 = react.createElement("path", {
                                fill: "#fff",
                                d: "M435.85 164.705c4.166 1.061 7.15 17.2 7.15 17.2L431.764 190s-10.35-16.678-7.15-21.248c3.333-4.751 5.162-5.591 11.236-4.047z",
                                opacity: 0.4,
                            })),
                        signin_path9 ||
                            (signin_path9 = react.createElement("path", {
                                fill: "#000",
                                d: "m437 169 3 16-7 4 4-20z",
                                opacity: 0.3,
                            })),
                        signin_path10 ||
                            (signin_path10 = react.createElement("path", {
                                fill: "#FFC3BD",
                                d: "m468 185.875 4-8.875 4 8.875s-3.215 3.976-7 2.958l-1-2.958zm8-9.875 6 2-5 8-5-9 4-1zm-62 269h9l1-23h-9l-1 23zm-68-29 10 4 12-20-10-4-12 20z",
                            })),
                        signin_path11 ||
                            (signin_path11 = react.createElement("path", {
                                fill: "#263238",
                                d: "m356.795 419.1-9.849-6.039c-.159-.106.187-.031 0 0-.187.032-.866-.152-.985 0l-5.909 7.046c-.14.182.054.78 0 1.006-.055.226-.041-.229 0 0 .04.229-.129.816 0 1.007.128.191.791.888.984 1.006 3.283 2.018 4.767 2.423 8.865 5.033 2.526 1.619 6.368 3.815 9.849 6.038 3.48 2.224 6.216-.744 4.924-2.013-5.646-5.594-5.835-8.766-6.894-12.077-.176-.602-.471-.674-.985-1.007zm65.257 24.953h-10.997c-.195-.002.15-.119 0 0-.149.119-.97.811-.999.992l-1 7.932c-.031.216-.068.783 0 .992.068.209-.155-.163 0 0 .156.162.786.905 1 .991.214.087.766.006.999 0 3.971-.056 5.985 0 10.997 0h12.995c4.249 0 4.766-3.603 2.999-3.966-7.929-1.598-11.32-3.852-13.995-5.949-.474-.396-1.365-.985-1.999-.992z",
                            })),
                        signin_path12 ||
                            (signin_path12 = react.createElement("path", {
                                fill: "#000",
                                d: "M424 422v11h-10v-11h10zm-67-26 10 4-6 10-10-4 6-10z",
                                opacity: 0.2,
                            })),
                        signin_path13 ||
                            (signin_path13 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M433.966 165.302s4.413 1.69-4.996 57.698h-39.975c.671-15.774.756-25.317-6.995-57.698 5.592-1.122 11.289-2.662 16.989-2.985a127.648 127.648 0 0 1 17.988 0c7.81.685 16.989 2.985 16.989 2.985z",
                            })),
                        signin_path14 ||
                            (signin_path14 = react.createElement("path", {
                                fill: "#fff",
                                d: "M433.966 165.302s4.413 1.69-4.996 57.698h-39.975c.671-15.774.756-25.317-6.995-57.698 5.592-1.122 11.289-2.662 16.989-2.985a127.648 127.648 0 0 1 17.988 0c7.81.685 16.989 2.985 16.989 2.985z",
                                opacity: 0.4,
                            })),
                        signin_path15 ||
                            (signin_path15 = react.createElement("path", {
                                fill: "#fff",
                                d: "M399.989 162.281a158.867 158.867 0 0 1 18.898 0c1.001.084 1.972.861 2.984.965.422.547.897 1.279.995 1.93.098.651.245 1.308 0 1.929-1.314 2.798-6.524 2.895-9.947 2.895-12.667 0-14.835-6.483-14.919-6.754v-.965h1.989z",
                            })),
                        signin_path16 ||
                            (signin_path16 = react.createElement("path", {
                                fill: "#FFC3BD",
                                d: "M401.996 142c1.184 5.811 2.124 16.153-1.996 20 0 0 2.056 6 12.973 6 12.006 0 4.989-6 4.989-6-6.559-1.534-6.126-6.525-4.989-11l-10.977-9z",
                            })),
                        signin_path17 ||
                            (signin_path17 = react.createElement("path", {
                                fill: "#263238",
                                d: "M403 138c-1.474 4.437.966 14.936 4 19-5.981-3.127-8-13-8-13l4-6z",
                            })),
                        signin_path18 ||
                            (signin_path18 = react.createElement("path", {
                                fill: "#000",
                                d: "m406.141 146 6.859 6c-.285 1.073-.895 1.891-.98 3-2.447-.371-5.6-3.355-5.879-6-.144-1.068-.228-1.947 0-3z",
                                opacity: 0.2,
                            })),
                        signin_path19 ||
                            (signin_path19 = react.createElement("path", {
                                fill: "#FFC3BD",
                                d: "M396.421 132.181c2.244 9.31 3.24 13.04 8.861 17.043 8.455 6.01 20.085 1.774 20.675-8.02.532-8.813-3.894-22.94-13.783-25.063-2.179-.479-3.77.364-5.908 1.003-2.137.639-4.352 1.411-5.907 3.007-1.555 1.596-3.359 3.866-3.938 6.015-.579 2.15-.543 3.857 0 6.015z",
                            })),
                        signin_path20 ||
                            (signin_path20 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M429.963 225s7.695 75.168 6.992 105c-.68 31.025-11.986 102-11.986 102h-13.983s2.192-68.524.999-99C410.685 299.775 400 225 400 225h29.963z",
                            })),
                        signin_path21 ||
                            (signin_path21 = react.createElement("path", {
                                fill: "#000",
                                d: "M429.963 225s7.695 75.168 6.992 105c-.68 31.025-11.986 102-11.986 102h-13.983s2.192-68.524.999-99C410.685 299.775 400 225 400 225h29.963z",
                                opacity: 0.4,
                            })),
                        signin_path22 ||
                            (signin_path22 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M410 433h16l1-5-18-1 1 6z",
                            })),
                        signin_path23 ||
                            (signin_path23 = react.createElement("path", {
                                fill: "#000",
                                d: "M413.056 243.755c10.435 19.667 1.679 54.895-2.012 68.245-1.89-20.043-4.554-44.209-7.044-62.224 1.576-10.127 4.239-15.093 9.056-6.021z",
                                opacity: 0.2,
                            })),
                        signin_path24 ||
                            (signin_path24 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M419 225s-9.083 77.913-16 103c-8.202 29.831-40 81-40 81l-12-5s19.714-58.284 26-74c13.393-33.535 1.298-83.114 12-105h30z",
                            })),
                        signin_path25 ||
                            (signin_path25 = react.createElement("path", {
                                fill: "#000",
                                d: "M419 225s-9.083 77.913-16 103c-8.202 29.831-40 81-40 81l-12-5s19.714-58.284 26-74c13.393-33.535 1.298-83.114 12-105h30z",
                                opacity: 0.4,
                            })),
                        signin_path26 ||
                            (signin_path26 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "m349 404 15 6 4-4-18-8-1 6z",
                            })),
                        signin_path27 ||
                            (signin_path27 = react.createElement("path", {
                                fill: "#263238",
                                d: "M413.035 130.999c.137.539.468 1.061.973.995.504-.065 1.11-.456.972-.995-.137-.538-.468-1.052-.972-.995-.505.058-1.168.448-.973.995zm8.986-1c.128.539.464 1.061.979.995.515-.065 1.12-.456.979-.995-.14-.538-.464-1.052-.979-.995-.515.058-1.12.448-.979.995z",
                            })),
                        signin_path28 ||
                            (signin_path28 = react.createElement("path", {
                                fill: "#263238",
                                d: "m422 128.882 2-.882s-.795 1.409-2 .882z",
                            })),
                        signin_path29 ||
                            (signin_path29 = react.createElement("path", {
                                fill: "#ED847E",
                                d: "M420 133c.826 1.752 1.835 3.53 3 4.924-.285.373-.62.801-1 .985-.38.184-.595.038-1 0L420 133z",
                            })),
                        signin_path30 ||
                            (signin_path30 = react.createElement("path", {
                                fill: "#263238",
                                d: "M414.998 141.97c.5-.001 1.498.068 1.991 0 .037-.001-.034.013 0 0 .033-.013-.024.023 0 0 .023-.023-.01.029 0 0 .009-.028.006.029 0 0-.007-.029.021.024 0 0-.022-.024.032-.962 0-.977-.033-.015.037.004 0 0-.038-.003.035-.009 0 0-1.087.169-2.915.234-3.981 0-1.067-.233-2.172-.391-2.986-.976-.049-.038.069 0 0 0s.05-.038 0 0c-.025.018.014-.025 0 0-.014.024 0-.027 0 0s-.014-.025 0 0c.014.024-.025-.019 0 0 1.378 1.016 3.078 1.968 4.976 1.953zm-16.782-16.155c.251 2.509 1.462 4.642 1.976 7.108 0 0 5.964-7.17 6.918-11.17-.228 1.575-1.328 2.616-1.976 4.062 0 0 8.135-.854 8.894-6.092-.013 2.345-.497 3.802-.989 6.092 0 0 7.596-2.082 6.918-7.108-.678-5.025-12.56-6.776-17.788-5.077-5.229 1.699-10.434 6.642-8.894 14.216 1.539 7.574 4.941 10.154 4.941 10.154s-2.712-7.336 0-12.185z",
                            })),
                        signin_path31 ||
                            (signin_path31 = react.createElement("path", {
                                fill: "#FFC3BD",
                                d: "M396.117 139.945c.731 1.679 2.157 3.171 3.914 3.866 2.369.907 4.328-1.622 3.913-3.866-.367-2.029-2.44-4.878-4.892-4.832-.536.022-.517-.265-.978 0-.461.264-1.683 1.49-1.957 1.932-.274.442.021.454 0 .967-.021.513-.236 1.472 0 1.933z",
                            })),
                        signin_path32 ||
                            (signin_path32 = react.createElement("path", {
                                fill: "#263238",
                                d: "M401 122c-1.143 4.559 1.006 15.045 4 19-5.714-2.884-8-12-8-12l4-7zm7.019 6.975c.074-.017-.059.036 0 0 .059-.037-.035.05 0 0 .304-.475.418-.664.984-.986.566-.323 1.264-.888 1.968-.986.149-.016.891.086.984 0 .094-.087.013-.877 0-.986-.007-.055.036.048 0 0-.036-.049.06.034 0 0-.059-.035.073.014 0 0a14.037 14.037 0 0 0-.984 0c-.893.113-1.246.584-1.968.986-.722.401-1.58.386-1.968.986-.049.073-.014.905 0 .986.013.08-.072-.063 0 0 .072.062-.107-.024 0 0 .106.023.877.022.984 0zm16.957-3.005c.063.002.924.017.983 0 .059-.017-.044.033 0 0 .092-.066 0 .093 0 0s.092-.868 0-.934a5.631 5.631 0 0 0-1.967-.934c-.742-.194-2.162-.063-2.949 0-.066.009.055-.026 0 0-.056.026.037-.039 0 0-.038.039.013-.046 0 0-.014.046-.013.888 0 .934.027.09-.109-.051 0 0 .108.051.854.016.983 0 .621-.049 1.381-.154 1.966 0s.561.61.984.934c.047.041-.068-.023 0 0 .067.023-.076 0 0 0z",
                            })),
                        signin_path33 ||
                            (signin_path33 = react.createElement("path", {
                                fill: "#FFC3BD",
                                d: "M387 179c-1.606 5.142-2.679 10.683-3.985 16-1.314 5.249-2.387 10.619-2.989 16v2c.013.552-.071.452 0 1 .148 1.283-.276 2.739 0 4 .544 2.612 1.207 5.33 1.993 8s2.203 5.306 2.989 8l1.992 8-3.985 2c-2.635-5.106-5.832-10.636-7.97-16-1.028-2.694-1.16-5.131-1.992-8-.416-1.429-1.646-2.407-1.993-4-.164-.843.067-2.143 0-3v-3c.098-2.984.556-6.048.997-9 .381-2.928.383-5.154.996-8 1.202-5.7 3.105-11.49 4.981-17l8.966 3z",
                            })),
                        signin_path34 ||
                            (signin_path34 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M382.864 164.192c-3.912 1.145-8.864 14.889-8.864 14.889L389.757 190s5.585-10.845 3.94-15.882c-1.714-5.242-6.358-11.277-10.833-9.926z",
                            })),
                        signin_path35 ||
                            (signin_path35 = react.createElement("path", {
                                fill: "#fff",
                                d: "M382.864 164.192c-3.912 1.145-8.864 14.889-8.864 14.889L389.757 190s5.585-10.845 3.94-15.882c-1.714-5.242-6.358-11.277-10.833-9.926z",
                                opacity: 0.4,
                            })),
                        signin_path36 ||
                            (signin_path36 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M361.973 421.963c.223-.049-.168.103 0 0 .169-.103.91-.838.992-.976.079-.089 0 .101 0 0 0-.102.079.088 0 0-.824-.751-5.441-.985-5.949-.977-.052.001.044-.018 0 0s.021-.03 0 0c-.027.027 0-.032 0 0s-.027-.027 0 0c1.084.674 3.53 2.124 4.957 1.953zm-3.965-1.953c1.66 0 3.526.576 3.965.977.038.038 0-.045 0 0s.038-.039 0 0c-.06.103.132-.073 0 0-.131.073.172.951 0 .976-.754.12-2.47-1.1-3.965-1.953z",
                            })),
                        signin_path37 ||
                            (signin_path37 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M358.983 420.935c1.199-.304 2.68-1.333 2.953-1.931.068-.156.067.156 0 0-.066-.157.172-.876 0-.966-.152-.102-.792.038-.984 0-.192-.038-.791-.033-.985 0-1.551.22-2.888 2.802-2.953 2.897-.023.032 0-.037 0 0s-.023-.032 0 0c.023.031-.039-.018 0 0 .038.018-.045-.002 0 0 .607-.014 1.392.153 1.969 0zm.984-2.897h.985c.122-.021-.122-.024 0 0 .121.024-.098.902 0 .966.261.168.039-.095 0 0-.261.577-1.637 1.794-2.954 1.931.599-.807.939-2.454 1.969-2.897zm67.012 27.828c.794.041 2.3.28 2.965 0 .155-.09-.07-.765 0-.891.071-.125.03.133 0 0-.008-.078.067-.824 0-.89-.066-.065.109.037 0 0-1.125-.404-5.502.753-5.93.89-.041.011.025-.023 0 0-.025.024 0 .862 0 .891 0 .028-.025-.024 0 0 .025.023-.041-.011 0 0 1.002.145 1.938-.013 2.965 0zm1.977-1.781c.143-.006-.13-.039 0 0 .044.016.963.862.988.89.026.028.001-.032 0 0 .022.083.044-.079 0 0-.043.08-.891-.056-.988 0-.574.332-1.871.224-3.954 0 1.216-.416 2.592-.757 3.954-.89z",
                            })),
                        signin_path38 ||
                            (signin_path38 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M425.011 445.986c.951-.579 3.151-2.719 2.98-3.941 0-.296-.471-.908-.994-.985-.187-.029.18-.075 0 0s-.85-.167-.993 0c-.951 1.132-.984 4.81-.993 4.926-.001.045-.015-.041 0 0 .015.04-.028-.026 0 0 .031.026-.036.01 0 0zm1.986-3.941c.343 0 .994-.051.994 0 .095.733-2.01 2.171-2.98 2.956.076-1.223.407-2.02.993-2.956.175-.214.758.001.993 0z",
                            })),
                        signin_path39 ||
                            (signin_path39 = react.createElement("path", {
                                fill: "#263238",
                                d: "m389.018 222.039-.999 3.883c-.141.291.54.971.999.971H430c.366 0 .976.24 1 0v-3.883c0-.265-.611-.971-1-.971h-39.982c-.127-.011-.884-.058-1 0-.115.057.075-.111 0 0z",
                            })),
                        signin_path40 ||
                            (signin_path40 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M393.998 227.908h-.928c-.153 0-.009.155 0 0v-5.845c0-.142.776 0 .928 0h.928c.162 0 .009-.142 0 0v5.845c0 .206-.767 0-.928 0z",
                            })),
                        signin_path41 ||
                            (signin_path41 = react.createElement("path", {
                                fill: "#000",
                                d: "M393.998 227.908h-.928c-.153 0-.009.155 0 0v-5.845c0-.142.776 0 .928 0h.928c.162 0 .009-.142 0 0v5.845c0 .206-.767 0-.928 0z",
                                opacity: 0.4,
                            })),
                        signin_path42 ||
                            (signin_path42 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M427.997 227.908h-.927c-.153 0-.009.155 0 0v-5.845c0-.142.775 0 .927 0h.928c.16 0 .017-.142 0 0v5.845c-.009.206-.767 0-.928 0z",
                            })),
                        signin_path43 ||
                            (signin_path43 = react.createElement("path", {
                                fill: "#000",
                                d: "M427.997 227.908h-.927c-.153 0-.009.155 0 0v-5.845c0-.142.775 0 .927 0h.928c.16 0 .017-.142 0 0v5.845c-.009.206-.767 0-.928 0z",
                                opacity: 0.4,
                            })),
                        signin_path44 ||
                            (signin_path44 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M410.003 227.908h-.928c-.16 0-.017.155 0 0v-5.845c0-.142.767 0 .928 0h.927c.153 0 .009-.142 0 0v5.845c-.008.206-.775 0-.927 0z",
                            })),
                        signin_path45 ||
                            (signin_path45 = react.createElement("path", {
                                fill: "#000",
                                d: "M410.003 227.908h-.928c-.16 0-.017.155 0 0v-5.845c0-.142.767 0 .928 0h.927c.153 0 .009-.142 0 0v5.845c-.008.206-.775 0-.927 0z",
                                opacity: 0.4,
                            })),
                        signin_path46 ||
                            (signin_path46 = react.createElement("path", {
                                fill: "#263238",
                                d: "m413 129.88 2-.88s-.795 1.413-2 .88z",
                            })),
                        signin_path47 ||
                            (signin_path47 = react.createElement("path", {
                                fill: "#FFC3BD",
                                d: "m386.163 241 7.837 7-8.816 2s-4.23-4.948-2.939-9h3.918z",
                            })),
                        signin_path48 ||
                            (signin_path48 = react.createElement("path", {
                                fill: "#FFC3BD",
                                d: "m396 255-8 1-4-8 10-1 2 8z",
                            })),
                        signin_path49 ||
                            (signin_path49 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M440 36h193v60H440z",
                            })),
                        signin_path50 ||
                            (signin_path50 = react.createElement("path", {
                                fill: "#fff",
                                d: "m456.936 82.596-2.402-31.148 24.611-1.897 2.402 31.147-4.958.383-2.066-26.805-14.74 1.137 2.066 26.804-4.913.379zm44.108-2.96c-1.843.142-3.5-.171-4.971-.94a9.848 9.848 0 0 1-3.598-3.165l1.052 13.643-4.826.373-2.489-32.289 4.255-.328.318 4.124a9.98 9.98 0 0 1 3.168-3.554c1.341-.927 2.874-1.457 4.599-1.59 1.58-.122 3.052.088 4.418.63a10.227 10.227 0 0 1 3.621 2.325 12.192 12.192 0 0 1 2.532 3.644 12.085 12.085 0 0 1 1.179 4.41c.169 2.194-.116 4.23-.853 6.112-.709 1.878-1.796 3.419-3.263 4.62-1.439 1.17-3.154 1.832-5.142 1.985zm-1.898-4.002c1.024-.079 1.928-.369 2.714-.87a6.632 6.632 0 0 0 2.014-1.921 7.811 7.811 0 0 0 1.211-2.61c.249-.96.336-1.937.259-2.932a8.449 8.449 0 0 0-.756-2.942 7.141 7.141 0 0 0-1.725-2.339 7.208 7.208 0 0 0-2.41-1.49c-.88-.345-1.831-.477-2.855-.398-.614.047-1.248.214-1.903.5a7.674 7.674 0 0 0-1.812 1.11 7.257 7.257 0 0 0-1.424 1.566 5.087 5.087 0 0 0-.786 1.826l.464 6.01a9.679 9.679 0 0 0 1.819 2.42 8.72 8.72 0 0 0 2.464 1.619c.911.37 1.82.521 2.726.451zm16.382 2.444-1.766-22.9 4.826-.372 1.268 16.451 10.354-17.39 4.387-.34 1.769 22.945-4.826.372-1.241-16.1-10.253 16.986-4.518.348zm26.604-2.05-1.769-22.945 12.284-.947c1.462-.113 2.683.073 3.662.556 1.005.452 1.775 1.084 2.308 1.897.531.782.835 1.671.912 2.665.097 1.258-.11 2.392-.621 3.402-.51 1.01-1.317 1.808-2.419 2.393 1.346.279 2.465.87 3.358 1.771.921.87 1.438 2.052 1.553 3.543.104 1.346-.13 2.511-.701 3.497-.574.956-1.442 1.714-2.605 2.275-1.136.528-2.494.854-4.073.976l-11.889.916zm4.306-3.687 7.194-.554a3.237 3.237 0 0 0 1.634-.568 3.54 3.54 0 0 0 1.133-1.323 3.381 3.381 0 0 0 .31-1.7c-.049-.644-.239-1.203-.57-1.678a2.97 2.97 0 0 0-1.232-1.096c-.491-.257-1.058-.36-1.701-.31l-7.282.561.514 6.668zm-.755-9.783 6.493-.5c.614-.048 1.144-.236 1.59-.564.443-.358.776-.81.998-1.357a3.687 3.687 0 0 0 .267-1.697c-.066-.848-.4-1.558-1.003-2.13-.603-.57-1.358-.822-2.265-.752l-6.58.508.5 6.492zm31.214 11.23c-1.784.138-3.431-.044-4.94-.546a12.05 12.05 0 0 1-3.929-2.3 12.392 12.392 0 0 1-2.747-3.584 12.55 12.55 0 0 1-1.186-4.498c-.166-2.164.179-4.177 1.035-6.038a11.468 11.468 0 0 1 3.833-4.664c1.698-1.249 3.747-1.966 6.145-2.15 2.398-.186 4.503.211 6.314 1.19 1.838.946 3.309 2.274 4.412 3.984a11.936 11.936 0 0 1 1.89 5.635c.027.351.039.689.034 1.013-.006.294-.017.545-.03.752L569.347 64c.191 1.338.648 2.495 1.37 3.469a7.612 7.612 0 0 0 2.727 2.172 6.815 6.815 0 0 0 3.355.58 7.318 7.318 0 0 0 3.567-1.246c1.12-.733 1.844-1.642 2.172-2.727l4.216.867c-.412 1.15-1.095 2.217-2.048 3.203-.927.954-2.057 1.747-3.391 2.38-1.337.603-2.809.966-4.418 1.09zm-7.929-12.98 13.863-1.07c-.189-1.309-.659-2.435-1.408-3.377a6.71 6.71 0 0 0-2.683-2.176c-1.04-.509-2.174-.716-3.402-.62a6.623 6.623 0 0 0-3.266 1.134c-.952.632-1.71 1.485-2.274 2.558-.567 1.044-.844 2.227-.83 3.55zm29.029 10.912-1.441-18.688-7.59.585-.328-4.256 20.049-1.545.328 4.255-7.633.588 1.44 18.689-4.825.372zm16.132-12.409-1.569-20.355 4.825-.372 1.57 20.355-4.826.372zm.856 11.1-.464-6.01 4.826-.373.463 6.01-4.825.372z",
                            })),
                        signin_path51 ||
                            (signin_path51 = react.createElement("path", {
                                fill: "#263238",
                                d: "M617.121 159.733c-2.81-2.927-8.122-15.153-2.938-20.375 5.185-5.222 10.415-.505 10.772 2.037.356 2.543-1.304 25.126-7.834 18.338z",
                            })),
                        signin_path52 ||
                            (signin_path52 = react.createElement("path", {
                                fill: "#FF8B7B",
                                d: "M616 538h-13l-3-27h13l3 27z",
                            })),
                        signin_path53 ||
                            (signin_path53 = react.createElement("path", {
                                fill: "#263238",
                                d: "M602.882 537.058h14.044c.244.004-.195-.132 0 0 .195.133.931.781 1.003.992l3.01 9.918c.085.227.04-.237 0 0s.156.798 0 .992c-.156.193-.767.885-1.003.992-.237.106-.739.005-1.004 0-4.771 0-11.086-1.041-17.054-.992-7.013 0-9.819.918-18.057.992-4.974 0-7.122-4.54-5.015-4.959 9.338-1.959 14.254-2.299 22.069-6.943.823-.538.993-.951 2.007-.992z",
                            })),
                        signin_path54 ||
                            (signin_path54 = react.createElement("path", {
                                fill: "#000",
                                d: "m600 511 2 14h11l-2-14h-11z",
                                opacity: 0.2,
                            })),
                        signin_path55 ||
                            (signin_path55 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M599.016 538.897c1.346-.019 2.652.241 3.964 0 .062-.007-.043-.885 0-.921.043-.037-.006.05 0 0 .006-.049.03.042 0 0s.055.02 0 0c-.587-.235-6.488-2.548-7.928-1.843-.133.068.074.81 0 .921-.073.112-.005-.126 0 0-.003.216-.116.728 0 .922.117.194.78-.133.991 0 .874.454 1.934.983 2.973.921zm2.973-.921c-2.697.38-5.107.537-5.946 0-.145-.091.076-.787 0-.922-.075-.134-.011.147 0 0-.008-.045-.024.042 0 0 .025-.041-.049.024 0 0 .783-.38 3.808.195 5.946.922z",
                            })),
                        signin_path56 ||
                            (signin_path56 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M602.98 537.985c.065-.004-.052.036 0 0 .041-.028-.018.044 0 0 .017-.044.013.045 0 0 0-.197-1.053-5.268-3.977-4.973-.773.074-.953.724-.994.995-.207 1.23 3.398 3.388 4.971 3.978zm-3.977-3.978c1.765 0 2.679 1.864 2.982 2.983-1.627-.811-3.106-2.245-2.982-2.983 0 0-.524.049 0 0z",
                            })),
                        signin_path57 ||
                            (signin_path57 = react.createElement("path", {
                                fill: "#FF8B7B",
                                d: "m607 217.982-.998.999-.998.999c-.751.715-2.215 1.335-2.993 1.999-1.547 1.344-2.373 2.789-3.991 3.997-3.264 2.51-7.39 4.934-10.975 6.995-1.806 1.033-3.103 2.066-4.989 2.998-1.885.931-3.982 1.182-5.986 1.998-4.11 1.587-8.599 3.337-12.971 3.997h-.998c-.634.079-1.356.003-1.995 0-1.469-.013-2.627-.473-3.991-.999-1.353-.525-2.93-1.032-3.991-1.998-.845-.78-1.388-2.033-1.996-2.998-.842-1.4-1.586-2.427-1.995-3.997-.32-1.217-.852-2.75-.998-3.997-.24-2.157-.108-3.83 0-5.996.092-2.067.76-4.044.998-5.996.501-3.917 1.125-8.163 1.995-11.991.871-3.828 1.714-7.292 2.993-10.992l8.98 1.999c-.316 7.17-1.235 14.044-.998 20.984.044 3.223.34 6.833.998 9.993.13.584.768.445.998.999.185.434.013 1.114 0 1-.077-.195.158.141 0 0-.359-.336-1.535-.813-1.996-1-.473-.193-.484-.964-.997-.999h-.998.998c3.123-.776 6.069-1.653 8.979-2.998 3.045-1.422 6.15-3.206 8.98-4.996 2.862-1.837 5.266-3.891 7.982-5.996 1.319-1.046 2.739-1.888 3.991-2.998l1.996-1.998h.997l.998-.999L607 217.982z",
                            })),
                        signin_path58 ||
                            (signin_path58 = react.createElement("path", {
                                fill: "#263238",
                                d: "M613.984 210.131c-.451-11.842-11.122-16.038-23.99-7.964-5.673 3.405-10.771 6.952-15.994 10.951L581.997 239s15.783-4.543 24.99-13.937c6.195-6.379 7.156-10.901 6.997-14.932z",
                            })),
                        signin_path59 ||
                            (signin_path59 = react.createElement("path", {
                                fill: "#000",
                                d: "M598 218s-7.5 10.665-10 22c3.471-1.564 6.816-3.86 10-6v-16z",
                                opacity: 0.2,
                            })),
                        signin_path60 ||
                            (signin_path60 = react.createElement("path", {
                                fill: "#FF8B7B",
                                d: "M562.101 198 566 188l-12.673-3s-2.152 4.19-.975 12l9.749 1z",
                            })),
                        _path61 ||
                            (_path61 = react.createElement("path", {
                                fill: "#FF8B7B",
                                d: "m567 177-11 1-3 7 13 4 1-12z",
                            })),
                        _path62 ||
                            (_path62 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M599.059 304s-8.096 67.139-8.985 103c-.916 37.254 6.988 112 6.988 112h20.966s1.932-81.136 4.992-118c3.321-40.184 11.98-98 11.98-98l-35.941 1z",
                            })),
                        _path63 ||
                            (_path63 = react.createElement("path", {
                                fill: "#fff",
                                d: "M599.059 304s-8.096 67.139-8.985 103c-.916 37.254 6.988 112 6.988 112h20.966s1.932-81.136 4.992-118c3.321-40.184 11.98-98 11.98-98l-35.941 1z",
                                opacity: 0.6,
                            })),
                        _path64 ||
                            (_path64 = react.createElement("path", {
                                fill: "#000",
                                d: "M623.93 321.817c-9.186 20.592-6.227 66.46-1.009 86.183.192-2.868-.204-5.513 0-8.017 2.131-26.392 6.387-59.968 9.079-80.171-2.501-3.685-5.199-4.444-8.07 2.005z",
                                opacity: 0.2,
                            })),
                        _path65 ||
                            (_path65 = react.createElement("path", { fill: "#EFC25A", d: "M619 519h-25l-2-8h27v8z" })),
                        _path66 ||
                            (_path66 = react.createElement("path", {
                                fill: "#FF8B7B",
                                d: "M671 538h-13l-3-27h13l3 27z",
                            })),
                        _path67 ||
                            (_path67 = react.createElement("path", {
                                fill: "#263238",
                                d: "M657.882 537.058h14.045c.243.005-.195-.133 0 0 .195.134.929.784 1.003.996l3.009 9.955c.082.228.041-.238 0 0-.041.237.156.801 0 .995-.155.195-.768-.107-1.003 0-.235.108-.74.998-1.003.996-4.785 0-11.086-1.045-17.054-.996-7.015 0-9.833.922-18.057.996-4.976 0-7.123-4.556-5.016-4.978 9.326-1.973 14.239-2.289 22.07-6.968.817-.542.997-.954 2.006-.996z",
                            })),
                        _path68 ||
                            (_path68 = react.createElement("path", {
                                fill: "#000",
                                d: "m655 511 2 14h11l-2-14h-11z",
                                opacity: 0.2,
                            })),
                        _path69 ||
                            (_path69 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M653.016 538.898c1.347-.021 2.65.24 3.964 0 .061-.008-.041-.885 0-.922.041-.036-.002.049 0 0 .009-.047.028.043 0 0-.028-.042.054.021 0 0-.602-.235-6.501-2.548-7.929-1.843-.135.066.074.809 0 .922-.074.112-.008-.127 0 0-.003.214-.114.728 0 .921.114.194.783-.135.991 0 .882.453 1.929.982 2.974.922zm2.973-.922c-2.702.381-5.107.538-5.947 0-.144-.092.078-.787 0-.921-.077-.134-.005.147 0 0-.008-.046-.025.042 0 0s-.049.024 0 0c.784-.381 3.763.194 5.947.921z",
                            })),
                        _path70 ||
                            (_path70 = react.createElement("path", {
                                fill: "#EFC25A",
                                d: "M656.987 537.989c.043-.002-.038.016 0 0 .038-.017-.027.029 0 0 .028-.029-.012.036 0 0 .012-.037.006.037 0 0 0-.197-1.053-5.272-3.984-4.977-.774.074-.94.725-.995.996-.194 1.231 3.404 3.389 4.979 3.981zm-3.984-3.981c1.756 0 2.684 1.865 2.988 2.985-1.631-.813-3.112-2.246-2.988-2.985 0 0-.525.049 0 0zM621 302s5.67 71.517 10 107c4.49 36.911 20 108 20 108h21s-5.722-81.167-8-118c-2.491-40.197-3-98-3-98l-40 1z",
                            })),
                        _path71 ||
                            (_path71 = react.createElement("path", {
                                fill: "#fff",
                                d: "M621 302s5.67 71.517 10 107c4.49 36.911 20 108 20 108h21s-5.722-81.167-8-118c-2.491-40.197-3-98-3-98l-40 1z",
                                opacity: 0.6,
                            })),
                        _path72 ||
                            (_path72 = react.createElement("path", { fill: "#EFC25A", d: "M674 519h-25l-2-8h27v8z" })),
                        _path73 ||
                            (_path73 = react.createElement("path", {
                                fill: "#263238",
                                d: "M597.062 202.084S588.989 234.335 599.06 303c18.809-.404 50.798-.83 59.941-.999.235-9.56-7.281-56.725.999-101.915-5.957-1.025-11.939-1.86-17.982-1.998-8.846-.322-18.15.295-26.974.999-6.043.713-12.123 1.358-17.982 2.997z",
                            })),
                        _path74 ||
                            (_path74 = react.createElement("path", {
                                fill: "#000",
                                d: "m658 232-10-8c.658 6.395 6.913 22.065 10 30-.054-6.953-.389-14.477 0-22z",
                                opacity: 0.2,
                            })),
                        _path75 ||
                            (_path75 = react.createElement("path", {
                                fill: "#fff",
                                d: "m622.007 219.105-10.891 20.813c-.218.432-.076 1.503 0 1.982.077.479.649.65.99.991.342.342.515.918.99.991.476.073.563-.767.991-.991l6.93-3.964c.367-.199.575-.027.99 0 .416.027 1.643.746 1.981.991l5.94 4.955c.382.28 1.509.005 1.98 0 .472-.004.615.288.991 0 .376-.287.858-1.525.99-1.982.132-.456.164-.545 0-.991l-7.921-21.804c-.135-.418-.649-1.709-.99-1.982-.342-.274-.556.038-.99 0-.435-.039-.607-.21-.99 0-.384.21-.786.602-.991.991z",
                            })),
                        _path76 ||
                            (_path76 = react.createElement("path", {
                                fill: "#FF8B7B",
                                d: "M638.015 168c-1.49 8.522-3.104 24.479 2.985 30 0 0-1.694 7.324-17.911 10-10.898-3.482-8.955-10-8.955-10 9.461-2.468 9.751-9.452 7.96-16l15.921-14z",
                            })),
                        _path77 ||
                            (_path77 = react.createElement("path", {
                                fill: "#000",
                                d: "m632.79 174-9.79 8c.429 1.522.815 3.426.979 5 3.537-.596 8.518-4.228 8.811-8 .18-1.525.365-3.509 0-5z",
                                opacity: 0.2,
                            })),
                        _path78 ||
                            (_path78 = react.createElement("path", {
                                fill: "#FF8B7B",
                                d: "M642.804 155.977c-3.153 11.116-3.976 19.22-10.936 23.773-10.466 6.837-23.612-2.998-23.86-14.858-.236-10.646 4.839-26.638 16.901-28.726 2.649-.469 5.41.115 7.953.991 2.544.876 5.164 1.963 6.959 3.962s3.384 4.316 3.977 6.934c.593 2.617-.236 5.35-.994 7.924z",
                            })),
                        _path79 ||
                            (_path79 = react.createElement("path", {
                                fill: "#263238",
                                d: "M638.964 162.38c-1.438-3.384-2.049-12.982 3.945-15.72 5.994-2.737 12.428 3.718 10.849 6.878-2.426 4.902-11.457 16.68-14.794 8.842z",
                            })),
                        _path80 ||
                            (_path80 = react.createElement("path", {
                                fill: "#263238",
                                d: "M643.035 148c-1.468-3.52-20.152-6.006-22.602-9.796-2.909-4.506 9.483-5.227 17.689-2.939 7.209 2.018 12.634 4.868 11.792 9.796-.472 2.793-6.879 2.939-6.879 2.939z",
                            })),
                        _path81 ||
                            (_path81 = react.createElement("path", {
                                fill: "#263238",
                                d: "M646 146.993s3.879 1.059 6-1.993c-.672 3.024-3.97 6.154-6 1.993zm-19.983-12.338c-5.388-4.308-12.664.524-11.971 6.138C614.739 146.408 633 150 633 150s.171-9.622-6.983-15.345z",
                            })),
                        _path82 ||
                            (_path82 = react.createElement("path", {
                                fill: "#263238",
                                d: "M614 141c.802 3.595 3.513 6.907 9 9-3.176-2.271-5.669-5.404-7-9h-2zm13.934 16c-.235 1.086-1.197 2.138-1.916 1.985-.719-.153-1.192-.914-.957-1.985.234-1.071 1.196-2.138 1.915-1.985.719.153 1.208.975.958 1.985zm-11.995-3.001c-.25 1.073-1.199 2.14-1.919 1.986-.72-.153-1.194-.913-.959-1.986.234-1.073 1.199-2.125 1.919-1.987.72.138 1.194.914.959 1.987z",
                            })),
                        _path83 ||
                            (_path83 = react.createElement("path", {
                                fill: "#FF5652",
                                d: "M618 156c-1.677 2.666-3.696 4.918-6 7 1.285 1.938 4 2 4 2l2-9z",
                            })),
                        _path84 ||
                            (_path84 = react.createElement("path", {
                                fill: "#263238",
                                d: "M620.027 167.767a8.593 8.593 0 0 0 3.974 0c1.32-.308 2.952-.97 3.974-1.83.028-.026-.015-.88 0-.914.015-.035 0 .037 0 0 0-.038.015.034 0 0-.015-.035.028.026 0 0-.057-.051.078 0 0 0s-.936-.051-.994 0c-.958.774-1.761 1.551-2.98 1.829-1.219.279-2.754.277-3.974 0-.078-.016.067-.042 0 0s.017-.075 0 0-.044.85 0 .915c.043.064-.078-.016 0 0zm10.956-12.798c.106.02.883.034.984 0 .101-.033-.068.077 0 0 .068-.076-.015.098 0 0s.042-.889 0-.98c-.371-.779-1.25-1.425-1.967-1.961-.717-.537-1.063-.805-1.967-.981-.152-.018-.86-.085-.983 0s.024-.14 0 0c-.012.069-.018.913 0 .981.018.067-.045-.057 0 0 .044.056-.065-.037 0 0 .064.036.908-.011.983 0 .713.144 1.406.551 1.967.98.562.429.698 1.343.983 1.961.039.077-.071-.052 0 0 .072.053-.089-.017 0 0zm-19.96-4.998c.097.026.892.032.986 0 .095-.032-.059.079 0 0 .39-.513.402-.691.987-.976.584-.285 1.319-.979 1.972-.976.137.013.88.086.986 0 .107-.086-.013.135 0 0 .014-.134.088-.871 0-.975-.087-.105.138.012 0 0-.826-.024-2.214.622-2.958.975-.745.353-1.479.326-1.973.976-.044.052.019-.064 0 0s-.008.909 0 .976c.008.066-.034-.058 0 0s-.055-.04 0 0c.056.048-.073-.015 0 0z",
                            })),
                        _path85 ||
                            (_path85 = react.createElement("path", {
                                fill: "#FF8B7B",
                                d: "M663.929 208c2.386 4.093 4.898 7.92 6.97 12s4.205 8.804 5.975 13c1.77 4.196 3.484 7.585 4.979 12 1.554 4.403 2.917 9.459 3.983 14l.996 3c.35 1.65.054 3.315 0 5-.111 3.13-.725 6.125-1.992 9-2.226 4.844-6.028 9.345-9.958 13-3.505 3.322-6.871 6.389-10.953 9-1.98 1.287-3.917 2.867-5.975 4-2.059 1.133-4.676 2.009-6.971 3L647 298c1.587-1.287 3.353-2.61 4.979-4 1.626-1.39 3.405-3.584 4.979-5 3.038-2.767 5.392-5.812 7.966-9 2.29-2.734 4.795-5.656 5.975-9 .406-1.246.094-2.695 0-4-.038-.525.162-.499 0-1l-.996-3c-2.649-7.997-6.319-16.386-9.958-24-1.796-3.861-3.064-7.139-4.979-11-1.914-3.861-4.021-8.332-5.974-12l14.937-8z",
                            })),
                        _path86 ||
                            (_path86 = react.createElement("path", {
                                fill: "#263238",
                                d: "M662.807 197.293C674.141 199.579 682 228.104 682 228.104L661.796 245c-6.442-6.698-10.703-14.446-14.142-22.86-5.369-13.83 3.03-27.311 15.153-24.847z",
                            })),
                        _path87 ||
                            (_path87 = react.createElement("path", {
                                fill: "#FF8B7B",
                                d: "M649 299h-13l8 13s9.183-2.436 10-7l-5-6z",
                            })),
                        _path88 ||
                            (_path88 = react.createElement("path", {
                                fill: "#FF8B7B",
                                d: "m629 306 7 10 9-5-8-12-8 7zm20.225-138.102c-1.381 2.464-3.228 4.113-5.998 4.917-3.682 1.043-5.984-2.519-4.999-5.9.895-3.041 4.316-7.324 7.998-6.884 3.681.44 4.645 4.838 2.999 7.867z",
                            })),
                        _path89 ||
                            (_path89 = react.createElement("path", {
                                fill: "#263238",
                                d: "M219 506.085c0 .19-8.671.915-20 .915s-21-.725-21-.915c0-.191 9.671 0 21 0s20-.178 20 0zM196 535c1.895-2.889 3.738-5.412 6-8 2.082-2.746 4.582-5.568 7-8-1.893 2.895-3.736 5.409-6 8-2.071 2.751-4.572 5.584-7 8zm-5.996-.002c-.151-.121 3.762-4.918 8.997-10.997 5.235-6.079 9.858-11.171 9.995-10.997.138.175-3.761 4.918-8.996 10.997s-9.845 11.118-9.996 10.997zM119 506.085c0 .19-9.685.915-21 .915s-20-.725-20-.915c0-.191 8.671 0 20 0s21-.178 21 0z",
                            })),
                        _path90 ||
                            (_path90 = react.createElement("path", { fill: "#F5F5F5", d: "M288 476h-51v80h51v-80z" })),
                        _path91 ||
                            (_path91 = react.createElement("path", {
                                fill: "#263238",
                                d: "M287.99 557a16.24 16.24 0 0 1 0-.987v-4.936c0-3.887.096-9.671 0-16.783 0-14.17.069-33.776 0-57.257h-50.864c-.096.067 1.326-1.312.997-.988V557h-.997 51.862-51.862v-80.951c-.315.311.068-.081 0 0h51.862c-.069 23.563.041 44.021 0 58.245 0 7.031.027 12.923 0 16.783v4.936c0 .283-.998.987-.998.987z",
                            })),
                        _path92 ||
                            (_path92 = react.createElement("path", { fill: "#FAFAFA", d: "M55 510H4v46h51v-46z" })),
                        _path93 ||
                            (_path93 = react.createElement("path", {
                                fill: "#263238",
                                d: "M54.964 557v-3c0-2.219.081-5.973 0-10 0-8.123-.932-19.123-1-33h1H4h1v46H4h50.964H4v-47h50.964c0 13.945.04 25.836 0 34v13z",
                            })),
                        _path94 ||
                            (_path94 = react.createElement("path", {
                                fill: "#F5F5F5",
                                d: "M56 486.619V556h182V444L56 486.619zm62 61.452H80V495.54h38v52.531zm100 0h-38V495.54h38v52.531z",
                            })),
                        _path95 ||
                            (_path95 = react.createElement("path", {
                                fill: "#263238",
                                d: "M216.991 549.972c-.006-.091-.006.091 0 0v-3.994c0-2.593.082-6.359 0-10.985 0-9.388.068-23.294 0-38.945l.999.999h-38.986c-.083 0 1.315-1.312.999-.999v53.924h-.999 37.987c.242-.02.757-.02.999 0-.219.022-.78.022-.999 0h-37.987v-53.924h38.986c-.068 15.747.042 29.503 0 38.945 0 4.64.014 8.392 0 10.985v3.994c-.09.086-.889-.059-.999 0zm-99.033.002c-.006-.091-.006.09 0 0v-3.995c0-2.585.095-6.371 0-10.984 0-9.363-.942-22.34-.996-37.948h.996-38.833c-.095 0 1.322-1.312.996-.999v53.926h-.996 37.837c.235-.021.761-.021.996 0a7.197 7.197 0 0 1-.996 0H79.125v-53.926c-.312.313.068-.081 0 0h38.833c0 15.703.04 29.53 0 38.947 0 4.626.081 8.399 0 10.984v2.996c-.014.3.013.999 0 .999z",
                            })),
                        _path96 ||
                            (_path96 = react.createElement("path", {
                                fill: "#263238",
                                d: "M55.055 486.623h1l2.998-.991 9.998-1.983 36.988-8.921L237 444v113H55.055c0-21.936-.028-39.512 0-51.544 0-5.989-.069-10.72 0-13.877v-4.956 18.833c0 12.018-.123 29.662 0 51.544v-.991H237l-1 .991V444l1 .991-130.961 29.737-36.989 8.921-9.996 1.983-3 .991h-1z",
                            })),
                        _path97 ||
                            (_path97 = react.createElement("path", { fill: "#FAFAFA", d: "M163 502h-29v55h29v-55z" })),
                        _path98 ||
                            (_path98 = react.createElement("path", {
                                fill: "#263238",
                                d: "M164 502.017v1c0 .163 0-.313 0 0v2.999c0 2.717-.097 6.255 0 10.996 0 9.688-.07 24.091 0 39.988h-30v-54.983h29a7.255 7.255 0 0 1 1 0h-30 1V556h-1 29c.07-15.801-.042-29.368 0-38.988 0-4.782-.083-8.333 0-10.996v-3.999c.111-.013.889-.004 1 0zM96 535c1.895-2.889 3.738-5.412 6-8 2.082-2.746 4.582-5.568 7-8-1.893 2.895-3.736 5.409-6 8-2.071 2.751-4.572 5.584-7 8zm-5.996-.002c-.15-.121 3.765-4.918 8.997-10.997 5.231-6.079 9.858-11.171 9.995-10.997.138.175-3.765 4.918-8.996 10.997s-9.845 11.118-9.996 10.997zM317.919 516c.182 0 0 8.95 0 20s.182 20 0 20-.919-8.963-.919-20 .724-20 .919-20z",
                            })),
                        _path99 ||
                            (_path99 = react.createElement("path", {
                                fill: "#FAFAFA",
                                d: "M325.897 525.872c11.773-4.769 17.381-18.151 12.527-29.89-4.854-11.738-18.334-17.387-30.107-12.618-11.773 4.77-17.382 18.152-12.527 29.89 4.854 11.739 18.334 17.388 30.107 12.618z",
                            })),
                        _path100 ||
                            (_path100 = react.createElement("path", {
                                fill: "#263238",
                                d: "M339.959 508.507c-.126-1.893-.567-7.192-.999-9.037-.535-2.147-.855-3.134-1.998-5.02-1.493-2.511-3.686-5.267-5.995-7.028-2.987-2.307-6.282-3.444-9.991-4.016-3.709-.573-7.464-.298-10.99 1.004-2.032.737-4.276 1.687-5.995 3.012-.898.673-2.2 1.214-2.997 2.008-.799.838-1.318 2.072-1.998 3.012-2.824 3.899-3.997 11.223-3.997 16.065 0 4.841 1.173 9.153 3.997 13.052 1.311 1.861 3.168 3.682 4.995 5.02 1.719 1.325 3.963 2.275 5.995 3.012 4.908 1.804 10.066 1.77 14.987 0 4.92-1.769 9.288-5.5 11.989-10.04 1.143-1.886 1.463-2.873 1.998-5.02.431-1.841.871-4.137.999-6.024.021.123.021-.123 0 0v1.004c.001.599.091 1.416 0 2.008-.088.812-.799 2.22-.999 3.012-.504 2.189-.869 4.09-1.998 6.024-1.647 2.86-4.332 5.115-6.994 7.028-2.662 1.914-5.79 3.392-8.992 4.016-4.048.778-8.112.414-11.989-1.004-2.1-.745-4.219-1.65-5.995-3.012-1.889-1.369-2.649-3.1-3.996-5.02-2.92-4.015-4.996-9.064-4.996-14.056 0-4.993 2.076-13.054 4.996-17.069 1.347-1.92 2.107-3.651 3.996-5.02 1.776-1.362 3.895-2.267 5.995-3.012 3.872-1.419 7.945-1.783 11.989-1.004 3.205.622 6.327 2.102 8.992 4.016 2.665 1.913 5.346 4.166 6.994 7.028 1.129 1.934 1.494 3.835 1.998 6.024.2.792.911 2.2.999 3.012.091.592.001 1.409 0 2.008v4.017c.029.126.011-.13 0 0zM353.883 531c.222 4.157.073 8.83 0 13 .073 4.17.222 7.843 0 12-.223-4.157-.951-7.83-.878-12-.073-4.17.655-8.843.878-13z",
                            })),
                        _path101 ||
                            (_path101 = react.createElement("path", {
                                fill: "#FAFAFA",
                                d: "M354 538c8.008 0 14-5.992 14-14s-5.992-15-14-15-15 6.992-15 15 6.992 14 15 14z",
                            })),
                        _path102 ||
                            (_path102 = react.createElement("path", {
                                fill: "#263238",
                                d: "M367.842 523.002c-.117-1.103-.738-1.885-.994-2.967-.812-2.922-2.47-6.099-4.973-7.91-1.702-1.247-3.867-1.612-5.967-1.978-2.411-.421-4.66-.81-6.962 0-1.239.434-2.929 1.205-3.979 1.978-1.11.781-2.187 1.883-2.983 2.966-1.722 2.265-1.989 6.087-1.989 8.9 0 2.813.267 5.646 1.989 7.911.799 1.08 1.876 2.182 2.983 2.966 1.045.776 2.737 1.556 3.979 1.978 2.15.769 4.694.323 6.962 0 2.268-.322 4.135-.642 5.967-1.978 2.504-1.816 4.161-4.984 4.973-7.91.258-1.081.88-2.852.994-3.956.092 1.124.295 2.865 0 3.956-.625 2.559-2.017 5.103-3.978 6.922-1.96 1.819-5.29 3.46-7.956 3.955-2.513.475-4.556-.143-6.962-.989-1.303-.435-2.88-1.172-3.979-1.978-1.169-.816-2.14-1.833-2.983-2.966-1.818-2.376-2.984-5.943-2.984-8.9 0-2.957 1.166-5.535 2.984-7.911.839-1.132 1.811-2.158 2.983-2.966 1.102-.805 2.678-1.533 3.979-1.978 2.409-.834 4.449-1.451 6.962-.989 2.175.396 4.208 1.664 5.967 2.967 2.548 1.894 5.241 4.879 5.967 7.91.3 1.107.097 1.827 0 2.967z",
                            })),
                        signin_rect ||
                            (signin_rect = react.createElement("rect", {
                                width: 652,
                                height: 32,
                                y: 556,
                                fill: "#FFF2CC",
                                rx: 3,
                            }))
                    );
                },
                warning: function SvgWarning(props) {
                    return react.createElement(
                        "svg",
                        warning_extends(
                            { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none" },
                            props
                        ),
                        warning_path ||
                            (warning_path = react.createElement("path", {
                                fill: "#FF6894",
                                d: "M22.312 17.477 13.726 3.53a2.17 2.17 0 0 0-.817-.754A2.354 2.354 0 0 0 11.8 2.5c-.389 0-.77.095-1.109.276-.337.18-.619.44-.816.754L1.29 17.477a1.88 1.88 0 0 0-.289.998c0 .35.1.695.289.997.194.316.475.578.814.758.338.181.722.274 1.112.27h17.171c.39.004.773-.09 1.111-.27a2.13 2.13 0 0 0 .813-.758 1.87 1.87 0 0 0 .002-1.995ZM21.29 18.92a.998.998 0 0 1-.383.354 1.082 1.082 0 0 1-.52.124H3.214a1.082 1.082 0 0 1-.522-.124.998.998 0 0 1-.382-.354.831.831 0 0 1 0-.892L10.896 4.08c.094-.146.227-.266.385-.35a1.112 1.112 0 0 1 1.039 0c.158.084.29.204.385.35l8.586 13.948a.832.832 0 0 1 0 .892Zm-10.079-5.584V9.663c0-.146.063-.286.173-.39a.61.61 0 0 1 .416-.161.61.61 0 0 1 .417.161c.11.104.173.244.173.39v3.673a.534.534 0 0 1-.173.39.61.61 0 0 1-.417.162.61.61 0 0 1-.416-.162.534.534 0 0 1-.173-.39Zm1.571 3.307a.876.876 0 0 1-.165.51.97.97 0 0 1-.44.338c-.18.07-.378.088-.568.052a1.004 1.004 0 0 1-.503-.25.902.902 0 0 1-.268-.471.864.864 0 0 1 .055-.53.935.935 0 0 1 .362-.413 1.031 1.031 0 0 1 1.24.114.89.89 0 0 1 .287.65Z",
                            }))
                    );
                },
                checked: function SvgChecked(props) {
                    return react.createElement(
                        "svg",
                        checked_extends(
                            { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 13, fill: "none" },
                            props
                        ),
                        checked_path ||
                            (checked_path = react.createElement("path", {
                                fill: "#000",
                                d: "M6.328 10.797 1.366 5.834A.8.8 0 1 0 .234 6.966l5.6 5.6a.8.8 0 0 0 1.195-.072l8.8-11.2a.8.8 0 1 0-1.258-.988l-8.243 10.49Z",
                            }))
                    );
                },
                eye: function SvgEye(props) {
                    return react.createElement(
                        "svg",
                        eye_extends(
                            { xmlns: "http://www.w3.org/2000/svg", width: 28, height: 28, fill: "none" },
                            props
                        ),
                        eye_path ||
                            (eye_path = react.createElement("path", {
                                fill: "#B5B3B2",
                                d: "M24.761 19.196a.427.427 0 0 1-.44 0 .449.449 0 0 1-.16-.168l-2.323-4.23a12.949 12.949 0 0 1-4.602 2.233l.717 4.436a.472.472 0 0 1-.076.341.437.437 0 0 1-.359.192.43.43 0 0 1-.283-.108.462.462 0 0 1-.15-.274l-.703-4.4c-1.573.28-3.18.28-4.753 0l-.704 4.4a.462.462 0 0 1-.151.276.429.429 0 0 1-.361.1.437.437 0 0 1-.286-.186.472.472 0 0 1-.076-.34l.712-4.44a12.947 12.947 0 0 1-4.601-2.23l-2.323 4.23a.449.449 0 0 1-.16.167.427.427 0 0 1-.57-.117.465.465 0 0 1-.087-.338.47.47 0 0 1 .055-.17l2.381-4.336a16.64 16.64 0 0 1-2.341-2.465.46.46 0 0 1-.116-.344.471.471 0 0 1 .163-.323.434.434 0 0 1 .338-.096.429.429 0 0 1 .298.191c1.882 2.425 5.18 5.316 10.2 5.316s8.318-2.891 10.2-5.317a.449.449 0 0 1 .298-.191.42.42 0 0 1 .338.096.454.454 0 0 1 .163.323.475.475 0 0 1-.116.344 16.642 16.642 0 0 1-2.341 2.464l2.38 4.339a.47.47 0 0 1-.16.625Z",
                            }))
                    );
                },
                open_eye: function SvgOpenEye(props) {
                    return react.createElement(
                        "svg",
                        open_eye_extends(
                            { xmlns: "http://www.w3.org/2000/svg", width: 28, height: 28, fill: "none" },
                            props
                        ),
                        _g ||
                            (_g = react.createElement(
                                "g",
                                { clipPath: "url(#open_eye_svg__a)" },
                                react.createElement("path", {
                                    fill: "#000",
                                    d: "M26.943 13.235c-.038-.085-.954-2.095-3.001-4.12C22.042 7.238 18.779 5 14 5 9.22 5 5.958 7.238 4.058 9.115c-2.047 2.025-2.963 4.032-3 4.12a.648.648 0 0 0 0 .532c.037.084.953 2.095 3 4.12C5.958 19.762 9.221 22 14 22c4.78 0 8.043-2.237 9.942-4.114 2.047-2.024 2.963-4.032 3-4.119a.649.649 0 0 0 0-.532ZM14 20.692c-3.457 0-6.476-1.244-8.973-3.697a14.699 14.699 0 0 1-2.63-3.495 14.675 14.675 0 0 1 2.63-3.494C7.524 7.552 10.543 6.308 14 6.308c3.457 0 6.476 1.244 8.973 3.698a14.673 14.673 0 0 1 2.63 3.494C24.9 14.83 21.38 20.692 14 20.692Zm0-12.205a5.108 5.108 0 0 0-2.816.845 5.025 5.025 0 0 0-1.866 2.25 4.962 4.962 0 0 0-.288 2.896 4.996 4.996 0 0 0 1.386 2.567 5.084 5.084 0 0 0 2.595 1.371 5.119 5.119 0 0 0 2.928-.285 5.057 5.057 0 0 0 2.275-1.846 4.975 4.975 0 0 0 .854-2.785 4.992 4.992 0 0 0-1.486-3.543A5.103 5.103 0 0 0 14 8.487Zm0 8.718c-.74 0-1.465-.217-2.081-.624a3.714 3.714 0 0 1-1.38-1.663 3.667 3.667 0 0 1-.213-2.14 3.692 3.692 0 0 1 1.025-1.898 3.759 3.759 0 0 1 1.918-1.014 3.784 3.784 0 0 1 2.165.21 3.74 3.74 0 0 1 1.68 1.365 3.677 3.677 0 0 1-.465 4.679A3.767 3.767 0 0 1 14 17.205Z",
                                })
                            )),
                        _defs ||
                            (_defs = react.createElement(
                                "defs",
                                null,
                                react.createElement(
                                    "clipPath",
                                    { id: "open_eye_svg__a" },
                                    react.createElement("path", { fill: "#fff", d: "M0 0h28v28H0z" })
                                )
                            ))
                    );
                },
                vk: function SvgVk(props) {
                    return react.createElement(
                        "svg",
                        vk_extends({ xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none" }, props),
                        vk_path ||
                            (vk_path = react.createElement("path", {
                                fill: "#1C1C1C",
                                d: "m9.489.004.729-.003h3.564l.73.003.914.01.433.007.418.011.403.014.388.016.374.021.36.025.345.03.333.033c1.74.196 2.933.616 3.833 1.516.9.9 1.32 2.092 1.516 3.833l.034.333.029.346.025.36.02.373.025.588.012.41.013.644.009.915.004.98-.001 3.313-.003.73-.01.914-.007.433-.011.418-.014.403-.016.388-.021.374-.025.36-.03.345-.033.333c-.196 1.74-.616 2.933-1.516 3.833-.9.9-2.092 1.32-3.833 1.516l-.333.034-.346.029-.36.025-.373.02-.588.025-.41.012-.644.013-.915.009-.98.004-3.313-.001-.73-.003-.914-.01-.433-.007-.418-.011-.403-.014-.388-.016-.374-.021-.36-.025-.345-.03-.333-.033c-1.74-.196-2.933-.616-3.833-1.516-.9-.9-1.32-2.092-1.516-3.833l-.034-.333-.029-.346-.025-.36-.02-.373-.025-.588-.012-.41-.013-.644-.009-.915-.004-.98.001-3.313.003-.73.01-.914.007-.433.011-.418.014-.403.016-.388.021-.374.025-.36.03-.345.033-.333c.196-1.74.616-2.933 1.516-3.833.9-.9 2.092-1.32 3.833-1.516l.333-.034.346-.029.36-.025.373-.02.588-.025.41-.012.644-.013.915-.009ZM6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z",
                            }))
                    );
                },
                exit: function SvgExit(props) {
                    return react.createElement(
                        "svg",
                        exit_extends(
                            { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none" },
                            props
                        ),
                        exit_path ||
                            (exit_path = react.createElement("path", {
                                fill: "#1C1C1C",
                                d: "M5 21c-.55 0-1.021-.196-1.413-.588A1.922 1.922 0 0 1 3 19V5c0-.55.196-1.021.588-1.413A1.922 1.922 0 0 1 5 3h7v2H5v14h7v2H5Zm11-4-1.375-1.45 2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5-5 5Z",
                            }))
                    );
                },
            };
            var _excluded = ["glyph", "fill", "stroke"],
                __jsx = react.createElement,
                iconTypes = Object.keys(icons),
                Icon = function Icon(props) {
                    var glyph = props.glyph,
                        _props$fill = props.fill,
                        fill = void 0 === _props$fill ? "currentColor" : _props$fill,
                        _props$stroke = props.stroke,
                        stroke = void 0 === _props$stroke ? "currentStroke" : _props$stroke,
                        restIconProps = (0, objectWithoutProperties.Z)(props, _excluded);
                    return __jsx(icons[glyph], (0, esm_extends.Z)({ fill, stroke }, restIconProps));
                };
            (Icon.displayName = "Icon"),
                (Icon.__docgenInfo = {
                    description: "",
                    methods: [],
                    displayName: "Icon",
                    props: { glyph: { required: !0, tsType: { name: "unknown" }, description: "" } },
                    composes: ["SVGProps"],
                });
            try {
                (Icon.displayName = "Icon"),
                    (Icon.__docgenInfo = {
                        description: "",
                        displayName: "Icon",
                        props: {
                            glyph: {
                                defaultValue: null,
                                description: "",
                                name: "glyph",
                                required: !0,
                                type: {
                                    name: "enum",
                                    value: [
                                        { value: '"resetPassword"' },
                                        { value: '"signin"' },
                                        { value: '"warning"' },
                                        { value: '"checked"' },
                                        { value: '"eye"' },
                                        { value: '"open_eye"' },
                                        { value: '"vk"' },
                                        { value: '"exit"' },
                                    ],
                                },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["src/components/icon/Icon.tsx#Icon"] = {
                            docgenInfo: Icon.__docgenInfo,
                            name: "Icon",
                            path: "src/components/icon/Icon.tsx#Icon",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
    },
]);
