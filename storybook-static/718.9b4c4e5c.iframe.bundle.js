"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [718],
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
        "./src/shared/lib/cn.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, { cn: () => cn });
            var cn = function cn() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
                    args[_key] = arguments[_key];
                return args.filter(Boolean).join(" ");
            };
        },
        "./src/shared/ui/button/button.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, { z: () => Button });
            var esm_extends = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                objectWithoutProperties = __webpack_require__(
                    "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
                ),
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
                button_module = __webpack_require__(
                    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/button/button.module.scss"
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, "head")),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(button_module.Z, options);
            const button_button_module = button_module.Z && button_module.Z.locals ? button_module.Z.locals : void 0;
            var cn = __webpack_require__("./src/shared/lib/cn.ts"),
                _excluded = ["children", "icon", "variant"],
                __jsx = react.createElement,
                Button = function Button(_ref) {
                    var children = _ref.children,
                        icon = _ref.icon,
                        variant = _ref.variant,
                        props = (0, objectWithoutProperties.Z)(_ref, _excluded);
                    return __jsx(
                        "button",
                        (0, esm_extends.Z)({}, props, {
                            className: (0, cn.cn)(
                                button_button_module.btn,
                                button_button_module["btn_".concat(variant)],
                                props.className
                            ),
                        }),
                        icon,
                        children
                    );
                };
            (Button.displayName = "Button"),
                (Button.__docgenInfo = {
                    description: "",
                    methods: [],
                    displayName: "Button",
                    props: {
                        icon: {
                            required: !1,
                            tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
                            description: "",
                        },
                        variant: {
                            required: !1,
                            tsType: {
                                name: "union",
                                raw: '"cancel" | "exit" | "slider" | undefined',
                                elements: [
                                    { name: "literal", value: '"cancel"' },
                                    { name: "literal", value: '"exit"' },
                                    { name: "literal", value: '"slider"' },
                                    { name: "undefined" },
                                ],
                            },
                            description: "",
                        },
                    },
                });
            try {
                (Button.displayName = "Button"),
                    (Button.__docgenInfo = {
                        description: "",
                        displayName: "Button",
                        props: {
                            icon: {
                                defaultValue: null,
                                description: "",
                                name: "icon",
                                required: !1,
                                type: { name: "ReactNode" },
                            },
                            variant: {
                                defaultValue: null,
                                description: "",
                                name: "variant",
                                required: !1,
                                type: {
                                    name: "enum",
                                    value: [{ value: '"exit"' }, { value: '"slider"' }, { value: '"cancel"' }],
                                },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["src/shared/ui/button/button.tsx#Button"] = {
                            docgenInfo: Button.__docgenInfo,
                            name: "Button",
                            path: "src/shared/ui/button/button.tsx#Button",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/button/button.module.scss":
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
                    ".button_btn__oQAw_{padding:12px 40px;border:0;border-radius:10px;color:inherit;background-color:#fccf55;font-size:inherit;line-height:inherit;cursor:pointer;box-sizing:border-box;display:flex;align-items:center;gap:8px}.button_btn__oQAw_:focus{background-color:#fff2cc;outline:2px solid #fccf55}.button_btn__oQAw_:hover{border:0;background-color:#fdb675;outline:none}.button_btn__oQAw_:active{background-color:#f5a13f;outline:none}.button_btn__oQAw_:disabled{background-color:#b5b3b2}.button_btn__oQAw_:disabled svg>path{fill:#b5b3b2}.button_btn_cancel__ijBQJ{background-color:#fff;border-radius:10px;outline:1px solid #fccf55}.button_btn_cancel__ijBQJ:focus{background-color:#fff2cc;outline:1px solid #fccf55}.button_btn_cancel__ijBQJ:hover{background-color:rgba(253,182,116,.18);outline:2px solid #fdb675}.button_btn_cancel__ijBQJ:active{background-color:rgba(245,161,63,.4);outline:2px solid #f5a13f}.button_btn_cancel__ijBQJ:disabled{outline:1px solid #bcbcbc;color:#b5b3b2;background-color:#fff}.button_btn_exit__hXuVJ{padding:12px 20px;border-radius:0px 4px 4px 0px;background-color:#f5f3f1;min-width:224px}.button_btn_exit__hXuVJ:focus{background-color:#fccf55}.button_btn_exit__hXuVJ:hover{background-color:#eae5e1}.button_btn_exit__hXuVJ:active{background-color:#fccf55}.button_btn_exit__hXuVJ:disabled{color:#b5b3b2;background-color:#f5f3f1}.button_btn_slider__MPej8{padding:0;border-radius:0;background-color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.button_btn_slider__MPej8:hover{opacity:.7;transition:opacity ease-in-out .2s}.button_btn_slider__MPej8:active{background-color:rgba(0,0,0,0)}.button_btn_slider__MPej8:active svg>path{fill:#de8317}.button_btn_slider__MPej8:focus{background-color:rgba(0,0,0,0);outline:none}",
                    "",
                    {
                        version: 3,
                        sources: [
                            "webpack://./src/shared/ui/button/button.module.scss",
                            "webpack://./src/styles/variables.scss",
                        ],
                        names: [],
                        mappings:
                            "AACA,mBACI,iBAAA,CACA,QAAA,CACA,kBCqBc,CDpBd,aAAA,CACA,wBCLW,CDMX,iBAAA,CACA,mBAAA,CACA,cAAA,CACA,qBAAA,CACA,YAAA,CACA,kBAAA,CACA,OAAA,CAEA,yBACI,wBCTU,CDUV,yBAAA,CAGJ,yBACI,QAAA,CACA,wBCTU,CDUV,YAAA,CAGJ,0BACI,wBCbW,CDcX,YAAA,CAGJ,4BACI,wBC5BS,CD6BT,qCACI,YC9BK,CDkCb,0BACI,qBClCQ,CDmCR,kBCfU,CDgBV,yBAAA,CAEA,gCACI,wBCrCM,CDsCN,yBAAA,CAGJ,gCACI,sCAAA,CACA,yBAAA,CAGJ,iCACI,oCAAA,CACA,yBAAA,CAGJ,mCACI,yBAAA,CACA,aCxDK,CDyDL,qBCxDI,CD4DZ,wBACI,iBAAA,CACA,6BAAA,CACA,wBCjEY,CDkEZ,eAAA,CAEA,8BACI,wBCvEG,CD0EP,8BACI,wBC1EE,CD6EN,+BACI,wBC/EG,CDkFP,iCACI,aChFK,CDiFL,wBClFQ,CDsFhB,0BACI,SAAA,CACA,eAAA,CACA,8BAAA,CACA,wBAAA,CACA,gCACI,UAAA,CACA,kCAAA,CAEJ,iCACI,8BAAA,CACA,0CACI,YCtFS,CDyFjB,gCACI,8BAAA,CACA,YAAA",
                        sourcesContent: [
                            '@import "@src/styles/index.scss";\n.btn {\r\n    padding: 12px 40px;\r\n    border: 0;\r\n    border-radius: $border-radius-s;\r\n    color: inherit;\r\n    background-color: $accent-color;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n\r\n    &:focus {\r\n        background-color: $bg-accent-color;\r\n        outline: 2px solid $accent-color;\r\n    }\r\n\r\n    &:hover {\r\n        border: 0;\r\n        background-color: $btn-hover-color;\r\n        outline: none;\r\n    }\r\n\r\n    &:active {\r\n        background-color: $btn-active-color;\r\n        outline: none;\r\n    }\r\n\r\n    &:disabled {\r\n        background-color: $disabled-color;\r\n        & svg > path {\r\n            fill: $disabled-color;\r\n        }\r\n    }\r\n\r\n    &_cancel {\r\n        background-color: $bg-main-color;\r\n        border-radius: $border-radius-s;\r\n        outline: 1px solid $accent-color;\r\n\r\n        &:focus {\r\n            background-color: $bg-accent-color;\r\n            outline: 1px solid $accent-color;\r\n        }\r\n\r\n        &:hover {\r\n            background-color: rgba(253, 182, 116, 0.18);\r\n            outline: 2px solid $btn-hover-color;\r\n        }\r\n\r\n        &:active {\r\n            background-color: rgba(245, 161, 63, 0.4);\r\n            outline: 2px solid $btn-active-color;\r\n        }\r\n\r\n        &:disabled {\r\n            outline: 1px solid $bg-disabled-color;\r\n            color: $disabled-color;\r\n            background-color: $bg-main-color;\r\n        }\r\n    }\r\n\r\n    &_exit {\r\n        padding: 12px 20px;\r\n        border-radius: 0px 4px 4px 0px;\r\n        background-color: $light-latte-color;\r\n        min-width: 224px;\r\n\r\n        &:focus {\r\n            background-color: $accent-color;\r\n        }\r\n\r\n        &:hover {\r\n            background-color: $latte-color;\r\n        }\r\n\r\n        &:active {\r\n            background-color: $accent-color;\r\n        }\r\n\r\n        &:disabled {\r\n            color: $disabled-color;\r\n            background-color: $light-latte-color;\r\n        }\r\n    }\r\n\r\n    &_slider {\r\n        padding: 0;\r\n        border-radius: 0;\r\n        background-color: transparent;\r\n        background: transparent;\r\n        &:hover {\r\n            opacity: 0.7;\r\n            transition: opacity ease-in-out 0.2s;\r\n        }\r\n        &:active {\r\n            background-color: transparent;\r\n            & svg > path {\r\n                fill: $btn-arrow-active-color;\r\n            }\r\n        }\r\n        &:focus {\r\n            background-color: transparent;\r\n            outline: none;\r\n        }\r\n    }\r\n}\r\n',
                            "$text-main-color: #1c1c1c;\r\n$accent-color: #fccf55;\r\n$latte-color: #eae5e1;\r\n$light-latte-color: #f5f3f1;\r\n$disabled-color: #b5b3b2;\r\n$bg-main-color: #ffffff;\r\n$bg-secondary-color: #fffaee;\r\n$bg-accent-color: #fff2cc;\r\n$bg-disabled-color: #bcbcbc;\r\n$error-accent-color: #ff6894;\r\n$error-light-color: #fef7f9;\r\n$success-accent-color: #7cc19e;\r\n$success-light-color: #f7fbf9;\r\n$btn-hover-color: #fdb675;\r\n$btn-active-color: #f5a13f;\r\n$btn-arrow-active-color: #de8317;\r\n$container-width: 1440px;\r\n$gap-xs: 8px;\r\n$gap-s: 20px;\r\n$gap-default: 28px;\r\n$gap-m: 36px;\r\n$gap-l: 44px;\r\n$gap-xl: 64px;\r\n$gap-xxl: 110px;\r\n$gap-xxxl: 140px;\r\n$border-radius-s: 10px;\r\n$border-radius-m: 45px;\r\n",
                        ],
                        sourceRoot: "",
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        btn: "button_btn__oQAw_",
                        btn_cancel: "button_btn_cancel__ijBQJ",
                        btn_exit: "button_btn_exit__hXuVJ",
                        btn_slider: "button_btn_slider__MPej8",
                    });
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
