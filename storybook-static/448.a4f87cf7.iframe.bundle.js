/*! For license information please see 448.a4f87cf7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [448],
    {
        "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            "use strict";
            function _objectDestructuringEmpty(obj) {
                if (null == obj) throw new TypeError("Cannot destructure " + obj);
            }
            __webpack_require__.d(__webpack_exports__, { Z: () => _objectDestructuringEmpty });
        },
        "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            "use strict";
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
                return arr2;
            }
            function _slicedToArray(arr, i) {
                return (
                    (function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr;
                    })(arr) ||
                    (function _iterableToArrayLimit(r, l) {
                        var t =
                            null == r ? null : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
                        if (null != t) {
                            var e,
                                n,
                                i,
                                u,
                                a = [],
                                f = !0,
                                o = !1;
                            try {
                                if (((i = (t = t.call(r)).next), 0 === l)) {
                                    if (Object(t) !== t) return;
                                    f = !1;
                                } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
                            } catch (r) {
                                (o = !0), (n = r);
                            } finally {
                                try {
                                    if (!f && null != t.return && ((u = t.return()), Object(u) !== u)) return;
                                } finally {
                                    if (o) throw n;
                                }
                            }
                            return a;
                        }
                    })(arr, i) ||
                    (function _unsupportedIterableToArray(o, minLen) {
                        if (o) {
                            if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
                            var n = Object.prototype.toString.call(o).slice(8, -1);
                            return (
                                "Object" === n && o.constructor && (n = o.constructor.name),
                                "Map" === n || "Set" === n
                                    ? Array.from(o)
                                    : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                    ? _arrayLikeToArray(o, minLen)
                                    : void 0
                            );
                        }
                    })(arr, i) ||
                    (function _nonIterableRest() {
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                    })()
                );
            }
            __webpack_require__.d(__webpack_exports__, { Z: () => _slicedToArray });
        },
        "./src/components/icon/index.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { J: () => _Icon__WEBPACK_IMPORTED_MODULE_0__.J });
            var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/icon/Icon.tsx");
        },
        "./src/shared/ui/inputs/input/input.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { I: () => Input });
            var esm_extends = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                objectWithoutProperties = __webpack_require__(
                    "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
                ),
                react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
                bind = __webpack_require__("./node_modules/classnames/bind.js"),
                bind_default = __webpack_require__.n(bind),
                icon = __webpack_require__("./src/components/icon/index.ts"),
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
                input_module = __webpack_require__(
                    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/inputs/input/input.module.scss"
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, "head")),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(input_module.Z, options);
            const input_input_module = input_module.Z && input_module.Z.locals ? input_module.Z.locals : void 0;
            var _excluded = ["id", "errorMessage", "error", "label", "disabled", "className"],
                __jsx = react.createElement,
                cx = bind_default().bind(input_input_module),
                Input = function Input(_ref) {
                    var id = _ref.id,
                        errorMessage = _ref.errorMessage,
                        _ref$error = _ref.error,
                        error = void 0 !== _ref$error && _ref$error,
                        label = _ref.label,
                        disabled = _ref.disabled,
                        className = _ref.className,
                        props = (0, objectWithoutProperties.Z)(_ref, _excluded);
                    return __jsx(
                        react.Fragment,
                        null,
                        label &&
                            __jsx(
                                "label",
                                { className: cx("text", "label", { warning: error && !disabled }), htmlFor: id },
                                error && __jsx(icon.J, { glyph: "warning", className: cx("warningIcon") }),
                                label
                            ),
                        __jsx(
                            "input",
                            (0, esm_extends.Z)(
                                { disabled, className: cx("input", "text", { disabled }, { error }, className) },
                                props
                            )
                        ),
                        errorMessage && error && __jsx("span", { className: cx("message") }, errorMessage)
                    );
                };
            Input.__docgenInfo = {
                description: "",
                methods: [],
                displayName: "Input",
                props: {
                    error: {
                        defaultValue: { value: "false", computed: !1 },
                        required: !1,
                        tsType: { name: "boolean" },
                        description: "",
                    },
                    label: { required: !1, tsType: { name: "string" }, description: "" },
                    errorMessage: { required: !1, tsType: { name: "string" }, description: "" },
                },
            };
            try {
                (Input.displayName = "Input"),
                    (Input.__docgenInfo = {
                        description: "",
                        displayName: "Input",
                        props: {
                            label: {
                                defaultValue: null,
                                description: "",
                                name: "label",
                                required: !1,
                                type: { name: "string" },
                            },
                            errorMessage: {
                                defaultValue: null,
                                description: "",
                                name: "errorMessage",
                                required: !1,
                                type: { name: "string" },
                            },
                            error: {
                                defaultValue: { value: "false" },
                                description: "",
                                name: "error",
                                required: !1,
                                type: { name: "boolean" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["src/shared/ui/inputs/input/input.tsx#Input"] = {
                            docgenInfo: Input.__docgenInfo,
                            name: "Input",
                            path: "src/shared/ui/inputs/input/input.tsx#Input",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "./node_modules/classnames/bind.js": (module, exports) => {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            !(function () {
                "use strict";
                var hasOwn = {}.hasOwnProperty;
                function classNames() {
                    for (var classes = [], i = 0; i < arguments.length; i++) {
                        var arg = arguments[i];
                        if (arg) {
                            var argType = typeof arg;
                            if ("string" === argType || "number" === argType) classes.push((this && this[arg]) || arg);
                            else if (Array.isArray(arg)) classes.push(classNames.apply(this, arg));
                            else if ("object" === argType) {
                                if (
                                    arg.toString !== Object.prototype.toString &&
                                    !arg.toString.toString().includes("[native code]")
                                ) {
                                    classes.push(arg.toString());
                                    continue;
                                }
                                for (var key in arg)
                                    hasOwn.call(arg, key) && arg[key] && classes.push((this && this[key]) || key);
                            }
                        }
                    }
                    return classes.join(" ");
                }
                module.exports
                    ? ((classNames.default = classNames), (module.exports = classNames))
                    : void 0 ===
                          (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                              return classNames;
                          }.apply(exports, [])) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            })();
        },
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/inputs/input/input.module.scss":
            (module, __webpack_exports__, __webpack_require__) => {
                "use strict";
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
                    '.input_text__I3Z3r{font-size:16px;line-height:24px;font-family:"Open Sans",Arial,sans-serif;font-style:normal;font-weight:400;color:#000;cursor:text}.input_label___S_Ju{margin:0 0 8px 16px;display:flex;align-items:center}.input_warning___rGpP{color:#ff6894;margin:0 0 8px}.input_warningIcon__2PWkk{margin-right:8px;width:24px;height:24px}.input_input__KBN_g{display:block;width:100%;min-height:48px;padding:0 16px;background:rgba(0,0,0,0);border:1px solid #b5b3b2;border-radius:10px;box-sizing:border-box}.input_input__KBN_g::placeholder{color:#b5b3b2}.input_error__0bDVN{border:1px solid #ff6894}.input_disabled__EkFaS{border:1px solid #e2e8f0;background-color:#f8fafc}.input_message__qyDDi{font-size:14px;line-height:21px;font-family:"Open Sans",Arial,sans-serif;font-style:normal;font-weight:400;display:inline-block;margin-top:4px;color:#ff6894}',
                    "",
                    {
                        version: 3,
                        sources: [
                            "webpack://./src/shared/ui/inputs/input/input.module.scss",
                            "webpack://./src/styles/mixins.scss",
                            "webpack://./src/styles/colors.scss",
                            "webpack://./src/styles/variables.scss",
                        ],
                        names: [],
                        mappings:
                            "AACA,mBCiCI,cAAA,CACA,gBAAA,CAPA,wCAAA,CACA,iBAAA,CACA,eAAA,CDzBA,UELI,CFMJ,WAAA,CAGJ,oBACI,mBAAA,CACA,YAAA,CACA,kBAAA,CAGJ,sBACI,aEVO,CFWP,cAAA,CAGJ,0BACI,gBAAA,CACA,UAAA,CACA,WAAA,CAGJ,oBACI,aAAA,CACA,UAAA,CACA,eAAA,CACA,cAAA,CACA,wBAAA,CACA,wBAAA,CACA,kBGRc,CHSd,qBAAA,CAEA,iCACI,aEjCE,CFqCV,oBACI,wBAAA,CAGJ,uBACI,wBAAA,CACA,wBAAA,CAGJ,sBCXI,cAAA,CACA,gBAAA,CAZA,wCAAA,CACA,iBAAA,CACA,eAAA,CDwBA,oBAAA,CACA,cAAA,CACA,aG/CiB",
                        sourcesContent: [
                            '@import "@src/styles/index.scss";\n.text {\r\n    @include textSmall;\r\n    @include text;\r\n\r\n    color: $black;\r\n    cursor: text;\r\n}\r\n\r\n.label {\r\n    margin: 0 0 8px 16px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.warning {\r\n    color: $pink-pig;\r\n    margin: 0 0 8px;\r\n}\r\n\r\n.warningIcon {\r\n    margin-right: 8px;\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\n.input {\r\n    display: block;\r\n    width: 100%;\r\n    min-height: 48px;\r\n    padding: 0 16px;\r\n    background: transparent;\r\n    border: 1px solid $disabled-color;\r\n    border-radius: $border-radius-s;\r\n    box-sizing: border-box;\r\n\r\n    &::placeholder {\r\n        color: $asphalt;\r\n    }\r\n}\r\n\r\n.error {\r\n    border: 1px solid $pink-pig;\r\n}\r\n\r\n.disabled {\r\n    border: 1px solid #e2e8f0;\r\n    background-color: #f8fafc;\r\n}\r\n\r\n.message {\r\n    @include textTiny;\r\n    @include text;\r\n\r\n    display: inline-block;\r\n    margin-top: 4px;\r\n    color: $error-accent-color;\r\n}\r\n',
                            '@mixin background {\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n@mixin beforeOrAfter {\r\n    content: "";\r\n    position: absolute;\r\n}\r\n\r\n@mixin reset-button {\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n@mixin headline {\r\n    font-family: "Raleway", Arial, sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    color: $black;\r\n}\r\n\r\n@mixin headline2 {\r\n    font-size: 30px;\r\n    line-height: 130%;\r\n}\r\n\r\n@mixin text {\r\n    font-family: "Open Sans", Arial, sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n}\r\n\r\n@mixin textSmall {\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n}\r\n\r\n@mixin textTiny {\r\n    font-size: 14px;\r\n    line-height: 21px;\r\n}\r\n\r\n@mixin textNumberItem {\r\n    font-family: "Open Sans", Arial, sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n}\r\n\r\n@mixin textPriceItem {\r\n    font-family: "Source Sans Pro", Arial, sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n}\r\n',
                            "$black: #000;\r\n$white: #fff;\r\n$almond: #fff2cc;\r\n$light-gray: #bcbc;\r\n$asphalt: #b5b3b2;\r\n$mustard: #fccf55;\r\n$pink-pig: #ff6894;\r\n$pale-pink: #fef7f9;\r\n$graphite-black: #1c1c1c;\r\n",
                            "$text-main-color: #1c1c1c;\r\n$accent-color: #fccf55;\r\n$latte-color: #eae5e1;\r\n$light-latte-color: #f5f3f1;\r\n$disabled-color: #b5b3b2;\r\n$bg-main-color: #ffffff;\r\n$bg-secondary-color: #fffaee;\r\n$bg-accent-color: #fff2cc;\r\n$bg-disabled-color: #bcbcbc;\r\n$error-accent-color: #ff6894;\r\n$error-light-color: #fef7f9;\r\n$success-accent-color: #7cc19e;\r\n$success-light-color: #f7fbf9;\r\n$btn-hover-color: #fdb675;\r\n$btn-active-color: #f5a13f;\r\n$btn-arrow-active-color: #de8317;\r\n$container-width: 1440px;\r\n$gap-xs: 8px;\r\n$gap-s: 20px;\r\n$gap-default: 28px;\r\n$gap-m: 36px;\r\n$gap-l: 44px;\r\n$gap-xl: 64px;\r\n$gap-xxl: 110px;\r\n$gap-xxxl: 140px;\r\n$border-radius-s: 10px;\r\n$border-radius-m: 45px;\r\n",
                        ],
                        sourceRoot: "",
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        text: "input_text__I3Z3r",
                        label: "input_label___S_Ju",
                        warning: "input_warning___rGpP",
                        warningIcon: "input_warningIcon__2PWkk",
                        input: "input_input__KBN_g",
                        error: "input_error__0bDVN",
                        disabled: "input_disabled__EkFaS",
                        message: "input_message__qyDDi",
                    });
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            },
        "./node_modules/css-loader/dist/runtime/api.js": (module) => {
            "use strict";
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
            "use strict";
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
            "use strict";
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
            "use strict";
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
            "use strict";
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
            "use strict";
            module.exports = function setAttributesWithoutAttributes(styleElement) {
                var nonce = __webpack_require__.nc;
                nonce && styleElement.setAttribute("nonce", nonce);
            };
        },
        "./node_modules/style-loader/dist/runtime/styleDomAPI.js": (module) => {
            "use strict";
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
            "use strict";
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
