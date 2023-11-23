/*! For license information please see shared-ui-inputs-checkbox-checkbox-stories.a011ffd2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [934],
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
        "./src/shared/ui/inputs/checkbox/checkbox.stories.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, { Default: () => Default, default: () => checkbox_stories });
            var defineProperty = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                objectDestructuringEmpty = __webpack_require__(
                    "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"
                ),
                esm_extends = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
                bind = __webpack_require__("./node_modules/classnames/bind.js"),
                bind_default = __webpack_require__.n(bind),
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
                checkbox_module = __webpack_require__(
                    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/inputs/checkbox/checkbox.module.scss"
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, "head")),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(checkbox_module.Z, options);
            const checkbox_checkbox_module =
                checkbox_module.Z && checkbox_module.Z.locals ? checkbox_module.Z.locals : void 0;
            var icon = __webpack_require__("./src/components/icon/index.ts"),
                cn = __webpack_require__("./src/shared/lib/cn.ts"),
                __jsx = react.createElement,
                cx = bind_default().bind(checkbox_checkbox_module),
                CheckboxInput = function CheckboxInput(props) {
                    var textLabel = props.textLabel,
                        error = props.error,
                        errorMessage = props.errorMessage,
                        _props$checked = props.checked,
                        checked = void 0 !== _props$checked && _props$checked,
                        disabled = props.disabled,
                        onClick = props.onClick;
                    return __jsx(
                        react.Fragment,
                        null,
                        __jsx(
                            "label",
                            { className: (0, cn.cn)(checkbox_checkbox_module.container, props.className) },
                            __jsx("input", {
                                type: "checkbox",
                                className: cx("checkboxFieldHide"),
                                onChange: function onChange() {
                                    return null == onClick ? void 0 : onClick();
                                },
                            }),
                            __jsx(
                                "button",
                                {
                                    disabled,
                                    onClick,
                                    className: cx("checkboxField", {
                                        checked,
                                        disabled,
                                        error: error && !disabled && !checked,
                                    }),
                                },
                                !disabled &&
                                    __jsx(icon.J, {
                                        className: cx("checkboxFieldIcon", { checkboxFieldIconHide: !1 === checked }),
                                        glyph: "checked",
                                    })
                            ),
                            __jsx(
                                "span",
                                { className: cx("label", { warning: error && !disabled && !checked }) },
                                textLabel
                            )
                        ),
                        errorMessage &&
                            error &&
                            !disabled &&
                            !checked &&
                            __jsx("span", { className: cx("message", "errorTextMargins") }, errorMessage)
                    );
                };
            CheckboxInput.__docgenInfo = {
                description: "",
                methods: [],
                displayName: "CheckboxInput",
                props: {
                    textLabel: { required: !1, tsType: { name: "string" }, description: "" },
                    error: { required: !1, tsType: { name: "boolean" }, description: "" },
                    errorMessage: { required: !1, tsType: { name: "string" }, description: "" },
                    checked: { required: !1, tsType: { name: "boolean" }, description: "" },
                    disabled: { required: !1, tsType: { name: "boolean" }, description: "" },
                    className: { required: !1, tsType: { name: "string" }, description: "" },
                    onClick: {
                        required: !1,
                        tsType: {
                            name: "signature",
                            type: "function",
                            raw: "() => void",
                            signature: { arguments: [], return: { name: "void" } },
                        },
                        description: "",
                    },
                },
            };
            try {
                (CheckboxInput.displayName = "CheckboxInput"),
                    (CheckboxInput.__docgenInfo = {
                        description: "",
                        displayName: "CheckboxInput",
                        props: {
                            textLabel: {
                                defaultValue: null,
                                description: "",
                                name: "textLabel",
                                required: !1,
                                type: { name: "string" },
                            },
                            error: {
                                defaultValue: null,
                                description: "",
                                name: "error",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            errorMessage: {
                                defaultValue: null,
                                description: "",
                                name: "errorMessage",
                                required: !1,
                                type: { name: "string" },
                            },
                            checked: {
                                defaultValue: null,
                                description: "",
                                name: "checked",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            disabled: {
                                defaultValue: null,
                                description: "",
                                name: "disabled",
                                required: !1,
                                type: { name: "boolean" },
                            },
                            className: {
                                defaultValue: null,
                                description: "",
                                name: "className",
                                required: !1,
                                type: { name: "string" },
                            },
                            onClick: {
                                defaultValue: null,
                                description: "",
                                name: "onClick",
                                required: !1,
                                type: { name: "(() => void)" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["src/shared/ui/inputs/checkbox/checkbox.tsx#CheckboxInput"] = {
                            docgenInfo: CheckboxInput.__docgenInfo,
                            name: "CheckboxInput",
                            path: "src/shared/ui/inputs/checkbox/checkbox.tsx#CheckboxInput",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var _Default$parameters,
                _Default$parameters2,
                external_STORYBOOK_MODULE_CLIENT_API_ = __webpack_require__("@storybook/client-api"),
                checkbox_stories_jsx = react.createElement;
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
            const checkbox_stories = {
                title: "UI/Inputs/Checkbox",
                component: CheckboxInput,
                parameters: { layout: "centered" },
                tags: ["autodocs"],
                args: { textLabel: "Вы соглашаетесь с обработкой персональных данных", onClick: function onClick() {} },
            };
            var TemplateCheckboxField = function TemplateCheckboxField(args) {
                var restArgs = (0, esm_extends.Z)({}, ((0, objectDestructuringEmpty.Z)(args), args)),
                    _useArgs = (0, external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),
                    _useArgs2 = (0, slicedToArray.Z)(_useArgs, 2),
                    checked = _useArgs2[0].checked,
                    updateArgs = _useArgs2[1];
                return checkbox_stories_jsx(
                    "div",
                    { style: { width: "636px" } },
                    checkbox_stories_jsx(
                        CheckboxInput,
                        (0, esm_extends.Z)({ checked }, restArgs, {
                            onClick: function onHandlerClick() {
                                return updateArgs({ checked: !checked });
                            },
                        })
                    )
                );
            };
            TemplateCheckboxField.displayName = "TemplateCheckboxField";
            var Default = {
                args: {
                    errorMessage:
                        "Пожалуйста, согласитесь с обработкой персональных данных, чтобы продолжить пользование сайтом",
                    error: !1,
                    checked: !1,
                    disabled: !1,
                },
                render: function render(args) {
                    return TemplateCheckboxField(args);
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
                                        '{\n  args: {\n    errorMessage: "Пожалуйста, согласитесь с обработкой персональных данных, чтобы продолжить пользование сайтом",\n    error: false,\n    checked: false,\n    disabled: false\n  },\n  render: args => TemplateCheckboxField(args)\n}',
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
        "./src/components/icon/index.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { J: () => _Icon__WEBPACK_IMPORTED_MODULE_0__.J });
            var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/icon/Icon.tsx");
        },
        "./src/shared/lib/cn.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { cn: () => cn });
            var cn = function cn() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
                    args[_key] = arguments[_key];
                return args.filter(Boolean).join(" ");
            };
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
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/inputs/checkbox/checkbox.module.scss":
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
                    '.checkbox_container__ESgdi{display:flex;cursor:pointer}.checkbox_checkboxFieldHide__zWm5P{display:none}.checkbox_checkboxField__jwpIr{position:relative;border-radius:4px;width:24px;height:24px;border:1px solid #b5b3b2;box-sizing:border-box;user-select:none;transition:.2s ease-out}.checkbox_checkboxField__jwpIr:hover{border:1px solid #1c1c1c;transition:.2s ease-in}.checkbox_checked__M7E1K{background-color:#fccf55;border:1px solid #fccf55}.checkbox_disabled__8qcN0{border:1px solid #b5b3b2;background-color:#f5f3f1}.checkbox_disabled__8qcN0:hover{border:1px solid #b5b3b2}.checkbox_error__CNQ_C{border:1px solid #ff6894;background-color:#fef7f9}.checkbox_checkboxFieldIcon__dVfAo{position:absolute;top:24%;left:18%;width:16px;height:13px}.checkbox_checkboxFieldIconHide__dJc8m{display:none}.checkbox_label__g76bZ{font-size:16px;line-height:24px;font-family:"Open Sans",Arial,sans-serif;font-style:normal;font-weight:400;margin-left:20px;color:#000}.checkbox_warning__ATlBW{color:#ff6894}.checkbox_errorTextMargins__UZWaC{margin:8px 0 0 44px}.checkbox_message__AJZGY{font-size:14px;line-height:21px;font-family:"Open Sans",Arial,sans-serif;font-style:normal;font-weight:400;display:inline-block;margin-top:4px;color:#ff6894}',
                    "",
                    {
                        version: 3,
                        sources: [
                            "webpack://./src/shared/ui/inputs/checkbox/checkbox.module.scss",
                            "webpack://./src/styles/colors.scss",
                            "webpack://./src/styles/mixins.scss",
                            "webpack://./src/styles/variables.scss",
                        ],
                        names: [],
                        mappings:
                            "AAGA,2BACI,YAAA,CACA,cAAA,CAGJ,mCACI,YAAA,CAGJ,+BACI,iBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,wBAAA,CACA,qBAAA,CACA,gBAAA,CACA,uBAAA,CAGJ,qCACI,wBAAA,CACA,sBAAA,CAGJ,yBACI,wBCxBM,CDyBN,wBAAA,CAGJ,0BACI,wBAAA,CACA,wBAAA,CAGJ,gCACI,wBAAA,CAGJ,uBACI,wBAAA,CACA,wBAAA,CAGJ,mCACI,iBAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CAGJ,uCACI,YAAA,CAGJ,uBEzBI,cAAA,CACA,gBAAA,CAPA,wCAAA,CACA,iBAAA,CACA,eAAA,CFiCA,gBAAA,CACA,UChEI,CDmER,yBACI,aC9DO,CDiEX,kCACI,mBAAA,CAGJ,yBEpCI,cAAA,CACA,gBAAA,CAZA,wCAAA,CACA,iBAAA,CACA,eAAA,CFiDA,oBAAA,CACA,cAAA,CACA,aGxEiB",
                        sourcesContent: [
                            '@import "@src/styles/index.scss";\n@import "~/src/styles/index.scss";\r\n\r\n.container {\r\n    display: flex;\r\n    cursor: pointer;\r\n}\r\n\r\n.checkboxFieldHide {\r\n    display: none;\r\n}\r\n\r\n.checkboxField {\r\n    position: relative;\r\n    border-radius: 4px;\r\n    width: 24px;\r\n    height: 24px;\r\n    border: 1px solid #b5b3b2;\r\n    box-sizing: border-box;\r\n    user-select: none;\r\n    transition: 0.2s ease-out;\r\n}\r\n\r\n.checkboxField:hover {\r\n    border: 1px solid#1C1C1C;\r\n    transition: 0.2s ease-in;\r\n}\r\n\r\n.checked {\r\n    background-color: $mustard;\r\n    border: 1px solid $mustard;\r\n}\r\n\r\n.disabled {\r\n    border: 1px solid#B5B3B2;\r\n    background-color: #f5f3f1;\r\n}\r\n\r\n.disabled:hover {\r\n    border: 1px solid #b5b3b2;\r\n}\r\n\r\n.error {\r\n    border: 1px solid #ff6894;\r\n    background-color: #fef7f9;\r\n}\r\n\r\n.checkboxFieldIcon {\r\n    position: absolute;\r\n    top: 24%;\r\n    left: 18%;\r\n    width: 16px;\r\n    height: 13px;\r\n}\r\n\r\n.checkboxFieldIconHide {\r\n    display: none;\r\n}\r\n\r\n.label {\r\n    @include textSmall;\r\n    @include text;\r\n\r\n    margin-left: 20px;\r\n    color: $black;\r\n}\r\n\r\n.warning {\r\n    color: $pink-pig;\r\n}\r\n\r\n.errorTextMargins {\r\n    margin: 8px 0 0 44px;\r\n}\r\n\r\n.message {\r\n    @include textTiny;\r\n    @include text;\r\n\r\n    display: inline-block;\r\n    margin-top: 4px;\r\n    color: $error-accent-color;\r\n}\r\n',
                            "$black: #000;\r\n$white: #fff;\r\n$almond: #fff2cc;\r\n$light-gray: #bcbc;\r\n$asphalt: #b5b3b2;\r\n$mustard: #fccf55;\r\n$pink-pig: #ff6894;\r\n$pale-pink: #fef7f9;\r\n$graphite-black: #1c1c1c;\r\n",
                            '@mixin background {\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n@mixin beforeOrAfter {\r\n    content: "";\r\n    position: absolute;\r\n}\r\n\r\n@mixin reset-button {\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n@mixin headline {\r\n    font-family: "Raleway", Arial, sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    color: $black;\r\n}\r\n\r\n@mixin headline2 {\r\n    font-size: 30px;\r\n    line-height: 130%;\r\n}\r\n\r\n@mixin text {\r\n    font-family: "Open Sans", Arial, sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n}\r\n\r\n@mixin textSmall {\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n}\r\n\r\n@mixin textTiny {\r\n    font-size: 14px;\r\n    line-height: 21px;\r\n}\r\n\r\n@mixin textNumberItem {\r\n    font-family: "Open Sans", Arial, sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n}\r\n\r\n@mixin textPriceItem {\r\n    font-family: "Source Sans Pro", Arial, sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n}\r\n',
                            "$text-main-color: #1c1c1c;\r\n$accent-color: #fccf55;\r\n$latte-color: #eae5e1;\r\n$light-latte-color: #f5f3f1;\r\n$disabled-color: #b5b3b2;\r\n$bg-main-color: #ffffff;\r\n$bg-secondary-color: #fffaee;\r\n$bg-accent-color: #fff2cc;\r\n$bg-disabled-color: #bcbcbc;\r\n$error-accent-color: #ff6894;\r\n$error-light-color: #fef7f9;\r\n$success-accent-color: #7cc19e;\r\n$success-light-color: #f7fbf9;\r\n$btn-hover-color: #fdb675;\r\n$btn-active-color: #f5a13f;\r\n$btn-arrow-active-color: #de8317;\r\n$container-width: 1440px;\r\n$gap-xs: 8px;\r\n$gap-s: 20px;\r\n$gap-default: 28px;\r\n$gap-m: 36px;\r\n$gap-l: 44px;\r\n$gap-xl: 64px;\r\n$gap-xxl: 110px;\r\n$gap-xxxl: 140px;\r\n$border-radius-s: 10px;\r\n$border-radius-m: 45px;\r\n",
                        ],
                        sourceRoot: "",
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        container: "checkbox_container__ESgdi",
                        checkboxFieldHide: "checkbox_checkboxFieldHide__zWm5P",
                        checkboxField: "checkbox_checkboxField__jwpIr",
                        checked: "checkbox_checked__M7E1K",
                        disabled: "checkbox_disabled__8qcN0",
                        error: "checkbox_error__CNQ_C",
                        checkboxFieldIcon: "checkbox_checkboxFieldIcon__dVfAo",
                        checkboxFieldIconHide: "checkbox_checkboxFieldIconHide__dJc8m",
                        label: "checkbox_label__g76bZ",
                        warning: "checkbox_warning__ATlBW",
                        errorTextMargins: "checkbox_errorTextMargins__UZWaC",
                        message: "checkbox_message__AJZGY",
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
