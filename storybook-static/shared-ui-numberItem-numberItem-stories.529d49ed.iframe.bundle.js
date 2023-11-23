"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [710],
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
        "./src/shared/ui/numberItem/numberItem.stories.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Default: () => Default,
                    default: () => numberItem_stories,
                });
            var defineProperty = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
                injectStylesIntoStyleTag = __webpack_require__(
                    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
                ),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__(
                    "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
                ),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__(
                    "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
                ),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__(
                    "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
                ),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                numberItem_module = __webpack_require__(
                    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/numberItem/numberItem.module.scss"
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, "head")),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(numberItem_module.Z, options);
            const numberItem_numberItem_module =
                numberItem_module.Z && numberItem_module.Z.locals ? numberItem_module.Z.locals : void 0;
            var _Default$parameters,
                _Default$parameters2,
                __jsx = react.createElement,
                NumberItem = function NumberItem(_ref) {
                    var caption = _ref.caption;
                    return __jsx("span", { className: numberItem_numberItem_module.numberItem }, caption.slice(0, 3));
                };
            (NumberItem.displayName = "NumberItem"),
                (NumberItem.__docgenInfo = {
                    description: "",
                    methods: [],
                    displayName: "NumberItem",
                    props: { caption: { required: !0, tsType: { name: "string" }, description: "" } },
                });
            try {
                (NumberItem.displayName = "NumberItem"),
                    (NumberItem.__docgenInfo = {
                        description: "",
                        displayName: "NumberItem",
                        props: {
                            caption: {
                                defaultValue: null,
                                description: "",
                                name: "caption",
                                required: !0,
                                type: { name: "string" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["src/shared/ui/numberItem/numberItem.tsx#NumberItem"] = {
                            docgenInfo: NumberItem.__docgenInfo,
                            name: "NumberItem",
                            path: "src/shared/ui/numberItem/numberItem.tsx#NumberItem",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
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
            const numberItem_stories = {
                title: "UI/NumberItem",
                component: NumberItem,
                parameters: { layout: "centered" },
                tags: ["autodocs"],
                argTypes: {
                    caption: {
                        name: "caption",
                        defaultValue: "1",
                        description: "Отображаемое значение (макс первые 3 цифры)",
                        table: { type: { summary: "string" }, defaultValue: { summary: "1" } },
                    },
                },
            };
            var Default = { args: { caption: "1" } };
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
                                { originalSource: '{\n  args: {\n    caption: "1"\n  }\n}' },
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
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/numberItem/numberItem.module.scss":
            (module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
                        __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
                        __webpack_require__.n(
                            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                        ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        "./node_modules/css-loader/dist/runtime/api.js"
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
                    )()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.numberItem_numberItem__NX8Kr{border:none;width:48px;height:48px;border-radius:24px;background-color:#fff2cc;color:inherit;font-family:"Open Sans",Arial,sans-serif;font-size:16px;font-style:normal;font-weight:600;line-height:normal;display:flex;align-items:center;justify-content:center}',
                    "",
                    {
                        version: 3,
                        sources: [
                            "webpack://./src/shared/ui/numberItem/numberItem.module.scss",
                            "webpack://./src/styles/colors.scss",
                            "webpack://./src/styles/mixins.scss",
                        ],
                        names: [],
                        mappings:
                            "AACA,8BACI,WAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,wBCJK,CDKL,aAAA,CEqCA,wCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA,CFvCA,YAAA,CACA,kBAAA,CACA,sBAAA",
                        sourcesContent: [
                            '@import "@src/styles/index.scss";\n.numberItem { \r\n    border: none;\r\n    width: 48px;\r\n    height: 48px;\r\n    border-radius: 24px;\r\n    background-color: $almond;\r\n    color: inherit;\r\n    @include textNumberItem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n',
                            "$black: #000;\r\n$white: #fff;\r\n$almond: #fff2cc;\r\n$light-gray: #bcbc;\r\n$asphalt: #b5b3b2;\r\n$mustard: #fccf55;\r\n$pink-pig: #ff6894;\r\n$pale-pink: #fef7f9;\r\n$graphite-black: #1c1c1c;\r\n",
                            '@mixin background {\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n@mixin beforeOrAfter {\r\n    content: "";\r\n    position: absolute;\r\n}\r\n\r\n@mixin reset-button {\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n@mixin headline {\r\n    font-family: "Raleway", Arial, sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    color: $black;\r\n}\r\n\r\n@mixin headline2 {\r\n    font-size: 30px;\r\n    line-height: 130%;\r\n}\r\n\r\n@mixin text {\r\n    font-family: "Open Sans", Arial, sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n}\r\n\r\n@mixin textSmall {\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n}\r\n\r\n@mixin textTiny {\r\n    font-size: 14px;\r\n    line-height: 21px;\r\n}\r\n\r\n@mixin textNumberItem {\r\n    font-family: "Open Sans", Arial, sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n}\r\n\r\n@mixin textPriceItem {\r\n    font-family: "Source Sans Pro", Arial, sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n}\r\n',
                        ],
                        sourceRoot: "",
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = { numberItem: "numberItem_numberItem__NX8Kr" });
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            },
        "./node_modules/css-loader/dist/runtime/api.js": (module) => {
            module.exports = function (cssWithMappingToString) {
                var list = [];
                return (
                    (list.toString = function toString() {
                        return this.map(function (item) {
                            var content = "",
                                needLayer = void 0 !== item[5];
                            return (
                                item[4] && (content += "@supports (".concat(item[4], ") {")),
                                item[2] && (content += "@media ".concat(item[2], " {")),
                                needLayer &&
                                    (content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")),
                                (content += cssWithMappingToString(item)),
                                needLayer && (content += "}"),
                                item[2] && (content += "}"),
                                item[4] && (content += "}"),
                                content
                            );
                        }).join("");
                    }),
                    (list.i = function i(modules, media, dedupe, supports, layer) {
                        "string" == typeof modules && (modules = [[null, modules, void 0]]);
                        var alreadyImportedModules = {};
                        if (dedupe)
                            for (var k = 0; k < this.length; k++) {
                                var id = this[k][0];
                                null != id && (alreadyImportedModules[id] = !0);
                            }
                        for (var _k = 0; _k < modules.length; _k++) {
                            var item = [].concat(modules[_k]);
                            (dedupe && alreadyImportedModules[item[0]]) ||
                                (void 0 !== layer &&
                                    (void 0 === item[5] ||
                                        (item[1] = "@layer"
                                            .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                                            .concat(item[1], "}")),
                                    (item[5] = layer)),
                                media &&
                                    (item[2]
                                        ? ((item[1] = "@media ".concat(item[2], " {").concat(item[1], "}")),
                                          (item[2] = media))
                                        : (item[2] = media)),
                                supports &&
                                    (item[4]
                                        ? ((item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}")),
                                          (item[4] = supports))
                                        : (item[4] = "".concat(supports))),
                                list.push(item));
                        }
                    }),
                    list
                );
            };
        },
        "./node_modules/css-loader/dist/runtime/sourceMaps.js": (module) => {
            module.exports = function (item) {
                var content = item[1],
                    cssMapping = item[3];
                if (!cssMapping) return content;
                if ("function" == typeof btoa) {
                    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),
                        data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),
                        sourceMapping = "/*# ".concat(data, " */");
                    return [content].concat([sourceMapping]).join("\n");
                }
                return [content].join("\n");
            };
        },
        "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": (module) => {
            var stylesInDOM = [];
            function getIndexByIdentifier(identifier) {
                for (var result = -1, i = 0; i < stylesInDOM.length; i++)
                    if (stylesInDOM[i].identifier === identifier) {
                        result = i;
                        break;
                    }
                return result;
            }
            function modulesToDom(list, options) {
                for (var idCountMap = {}, identifiers = [], i = 0; i < list.length; i++) {
                    var item = list[i],
                        id = options.base ? item[0] + options.base : item[0],
                        count = idCountMap[id] || 0,
                        identifier = "".concat(id, " ").concat(count);
                    idCountMap[id] = count + 1;
                    var indexByIdentifier = getIndexByIdentifier(identifier),
                        obj = { css: item[1], media: item[2], sourceMap: item[3], supports: item[4], layer: item[5] };
                    if (-1 !== indexByIdentifier)
                        stylesInDOM[indexByIdentifier].references++, stylesInDOM[indexByIdentifier].updater(obj);
                    else {
                        var updater = addElementStyle(obj, options);
                        (options.byIndex = i), stylesInDOM.splice(i, 0, { identifier, updater, references: 1 });
                    }
                    identifiers.push(identifier);
                }
                return identifiers;
            }
            function addElementStyle(obj, options) {
                var api = options.domAPI(options);
                api.update(obj);
                return function updater(newObj) {
                    if (newObj) {
                        if (
                            newObj.css === obj.css &&
                            newObj.media === obj.media &&
                            newObj.sourceMap === obj.sourceMap &&
                            newObj.supports === obj.supports &&
                            newObj.layer === obj.layer
                        )
                            return;
                        api.update((obj = newObj));
                    } else api.remove();
                };
            }
            module.exports = function (list, options) {
                var lastIdentifiers = modulesToDom((list = list || []), (options = options || {}));
                return function update(newList) {
                    newList = newList || [];
                    for (var i = 0; i < lastIdentifiers.length; i++) {
                        var index = getIndexByIdentifier(lastIdentifiers[i]);
                        stylesInDOM[index].references--;
                    }
                    for (
                        var newLastIdentifiers = modulesToDom(newList, options), _i = 0;
                        _i < lastIdentifiers.length;
                        _i++
                    ) {
                        var _index = getIndexByIdentifier(lastIdentifiers[_i]);
                        0 === stylesInDOM[_index].references &&
                            (stylesInDOM[_index].updater(), stylesInDOM.splice(_index, 1));
                    }
                    lastIdentifiers = newLastIdentifiers;
                };
            };
        },
        "./node_modules/style-loader/dist/runtime/insertBySelector.js": (module) => {
            var memo = {};
            module.exports = function insertBySelector(insert, style) {
                var target = (function getTarget(target) {
                    if (void 0 === memo[target]) {
                        var styleTarget = document.querySelector(target);
                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement)
                            try {
                                styleTarget = styleTarget.contentDocument.head;
                            } catch (e) {
                                styleTarget = null;
                            }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                })(insert);
                if (!target)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                target.appendChild(style);
            };
        },
        "./node_modules/style-loader/dist/runtime/insertStyleElement.js": (module) => {
            module.exports = function insertStyleElement(options) {
                var element = document.createElement("style");
                return (
                    options.setAttributes(element, options.attributes),
                    options.insert(element, options.options),
                    element
                );
            };
        },
        "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js": (
            module,
            __unused_webpack_exports,
            __webpack_require__
        ) => {
            module.exports = function setAttributesWithoutAttributes(styleElement) {
                var nonce = __webpack_require__.nc;
                nonce && styleElement.setAttribute("nonce", nonce);
            };
        },
        "./node_modules/style-loader/dist/runtime/styleDomAPI.js": (module) => {
            module.exports = function domAPI(options) {
                if ("undefined" == typeof document)
                    return { update: function update() {}, remove: function remove() {} };
                var styleElement = options.insertStyleElement(options);
                return {
                    update: function update(obj) {
                        !(function apply(styleElement, options, obj) {
                            var css = "";
                            obj.supports && (css += "@supports (".concat(obj.supports, ") {")),
                                obj.media && (css += "@media ".concat(obj.media, " {"));
                            var needLayer = void 0 !== obj.layer;
                            needLayer &&
                                (css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {")),
                                (css += obj.css),
                                needLayer && (css += "}"),
                                obj.media && (css += "}"),
                                obj.supports && (css += "}");
                            var sourceMap = obj.sourceMap;
                            sourceMap &&
                                "undefined" != typeof btoa &&
                                (css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                                    btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                                    " */"
                                )),
                                options.styleTagTransform(css, styleElement, options.options);
                        })(styleElement, options, obj);
                    },
                    remove: function remove() {
                        !(function removeStyleElement(styleElement) {
                            if (null === styleElement.parentNode) return !1;
                            styleElement.parentNode.removeChild(styleElement);
                        })(styleElement);
                    },
                };
            };
        },
        "./node_modules/style-loader/dist/runtime/styleTagTransform.js": (module) => {
            module.exports = function styleTagTransform(css, styleElement) {
                if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
                else {
                    for (; styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
                    styleElement.appendChild(document.createTextNode(css));
                }
            };
        },
    },
]);
