"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [294],
    {
        "./src/shared/ui/sllderControl/sliderControl.stories.ts": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Default: () => Default,
                    Disabled: () => Disabled,
                    default: () => __WEBPACK_DEFAULT_EXPORT__,
                });
            var _Default$parameters,
                _Default$parameters2,
                _Disabled$parameters,
                _Disabled$parameters2,
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
                title: "UI/SliderControl",
                component: __webpack_require__("./src/shared/ui/sllderControl/sliderControl.tsx").z,
                parameters: { layout: "padded" },
                tags: ["autodocs"],
                argTypes: {
                    disabled: {
                        name: "disabled",
                        type: { name: "boolean", required: !1 },
                        defaultValue: "false",
                        description: "Вариант disabled",
                        table: { type: { summary: "string" }, defaultValue: { summary: "false" } },
                        options: ["false", "true"],
                    },
                },
            };
            var Default = { args: {} },
                Disabled = { args: { disabled: !0 } };
            (Default.parameters = _objectSpread(
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
            )),
                (Disabled.parameters = _objectSpread(
                    _objectSpread({}, Disabled.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null === (_Disabled$parameters = Disabled.parameters) || void 0 === _Disabled$parameters
                                    ? void 0
                                    : _Disabled$parameters.docs
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    { originalSource: "{\n  args: {\n    disabled: true\n  }\n}" },
                                    null === (_Disabled$parameters2 = Disabled.parameters) ||
                                        void 0 === _Disabled$parameters2 ||
                                        null === (_Disabled$parameters2 = _Disabled$parameters2.docs) ||
                                        void 0 === _Disabled$parameters2
                                        ? void 0
                                        : _Disabled$parameters2.source
                                ),
                            }
                        ),
                    }
                ));
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
        "./src/shared/ui/sllderControl/sliderControl.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            __webpack_require__.d(__webpack_exports__, { z: () => SliderControl });
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
                sliderControl_module = __webpack_require__(
                    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/sllderControl/sliderControl.module.scss"
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, "head")),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(sliderControl_module.Z, options);
            const sllderControl_sliderControl_module =
                sliderControl_module.Z && sliderControl_module.Z.locals ? sliderControl_module.Z.locals : void 0;
            var button_button = __webpack_require__("./src/shared/ui/button/button.tsx"),
                arrow_left_icon = __webpack_require__("./src/shared/ui/icons/arrow-left-icon/arrow-left-icon.tsx"),
                arrow_right_icon = __webpack_require__("./src/shared/ui/icons/arrow-right-icon/arrow-right-icon.tsx"),
                _excluded = ["disabled", "onRightArrowClick", "onLeftArrowClick"],
                __jsx = react.createElement,
                SliderControl = function SliderControl(_ref) {
                    var disabled = _ref.disabled,
                        onRightArrowClick = _ref.onRightArrowClick,
                        onLeftArrowClick = _ref.onLeftArrowClick,
                        props = (0, objectWithoutProperties.Z)(_ref, _excluded);
                    return __jsx(
                        react.Fragment,
                        null,
                        __jsx("input", { className: sllderControl_sliderControl_module.sliderControlHide }),
                        __jsx(
                            "div",
                            (0, esm_extends.Z)({ className: sllderControl_sliderControl_module.sliderControl }, props),
                            __jsx(button_button.z, {
                                disabled,
                                type: "button",
                                icon: __jsx(arrow_left_icon.Y, null),
                                variant: "slider",
                                onClick: onLeftArrowClick,
                            }),
                            __jsx(button_button.z, {
                                disabled,
                                type: "button",
                                icon: __jsx(arrow_right_icon.L, null),
                                variant: "slider",
                                onClick: onRightArrowClick,
                            })
                        )
                    );
                };
            SliderControl.__docgenInfo = {
                description: "",
                methods: [],
                displayName: "SliderControl",
                props: {
                    onRightArrowClick: {
                        required: !0,
                        tsType: {
                            name: "signature",
                            type: "function",
                            raw: "() => void",
                            signature: { arguments: [], return: { name: "void" } },
                        },
                        description: "",
                    },
                    onLeftArrowClick: {
                        required: !0,
                        tsType: {
                            name: "signature",
                            type: "function",
                            raw: "() => void",
                            signature: { arguments: [], return: { name: "void" } },
                        },
                        description: "",
                    },
                    disabled: { required: !1, tsType: { name: "boolean" }, description: "" },
                },
            };
            try {
                (SliderControl.displayName = "SliderControl"),
                    (SliderControl.__docgenInfo = {
                        description: "",
                        displayName: "SliderControl",
                        props: {
                            onRightArrowClick: {
                                defaultValue: null,
                                description: "",
                                name: "onRightArrowClick",
                                required: !0,
                                type: { name: "() => void" },
                            },
                            onLeftArrowClick: {
                                defaultValue: null,
                                description: "",
                                name: "onLeftArrowClick",
                                required: !0,
                                type: { name: "() => void" },
                            },
                            disabled: {
                                defaultValue: null,
                                description: "",
                                name: "disabled",
                                required: !1,
                                type: { name: "boolean" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["src/shared/ui/sllderControl/sliderControl.tsx#SliderControl"] = {
                            docgenInfo: SliderControl.__docgenInfo,
                            name: "SliderControl",
                            path: "src/shared/ui/sllderControl/sliderControl.tsx#SliderControl",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/sllderControl/sliderControl.module.scss":
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
                    ".sliderControl_sliderControl__U4Xfa{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:388px;height:90px;background-color:#fccf55;border-radius:40px;padding:0 28px;box-sizing:border-box}.sliderControl_sliderControl__U4Xfa:disabled{background-color:#b5b3b2;pointer-events:none}.sliderControl_sliderControl_true__Ob0Qv{background-color:#b5b3b2;pointer-events:none}.sliderControl_sliderControl__U4Xfa:hover{border:0;background-color:#fdb675;outline:none}.sliderControl_sliderControlHide__EyyZT{display:none}.sliderControl_disabled__LJHiY{background-color:#b5b3b2;pointer-events:none}",
                    "",
                    {
                        version: 3,
                        sources: [
                            "webpack://./src/shared/ui/sllderControl/sliderControl.module.scss",
                            "webpack://./src/styles/variables.scss",
                        ],
                        names: [],
                        mappings:
                            "AACA,oCACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,UAAA,CACA,eAAA,CACA,WAAA,CACA,wBCPW,CDQX,kBAAA,CACA,cAAA,CACA,qBAAA,CAEA,6CACI,wBCVS,CDWT,mBAAA,CAGJ,yCACI,wBCfS,CDgBT,mBAAA,CAGJ,0CACI,QAAA,CACA,wBCZU,CDaV,YAAA,CAIR,wCACI,YAAA,CAGJ,+BACI,wBC/Ba,CDgCb,mBAAA",
                        sourcesContent: [
                            '@import "@src/styles/index.scss";\n.sliderControl {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    max-width: 388px;\r\n    height: 90px;\r\n    background-color: $accent-color;\r\n    border-radius: 40px;\r\n    padding: 0 28px;\r\n    box-sizing: border-box;\r\n\r\n    &:disabled {\r\n        background-color: $disabled-color;\r\n        pointer-events: none;\r\n    }\r\n\r\n    &_true {\r\n        background-color: $disabled-color;\r\n        pointer-events: none;\r\n    }\r\n\r\n    &:hover {\r\n        border: 0;\r\n        background-color: $btn-hover-color;\r\n        outline: none;\r\n    }\r\n}\r\n\r\n.sliderControlHide {\r\n    display: none;\r\n}\r\n\r\n.disabled {\r\n    background-color: $disabled-color;\r\n    pointer-events: none;\r\n}\r\n',
                            "$text-main-color: #1c1c1c;\r\n$accent-color: #fccf55;\r\n$latte-color: #eae5e1;\r\n$light-latte-color: #f5f3f1;\r\n$disabled-color: #b5b3b2;\r\n$bg-main-color: #ffffff;\r\n$bg-secondary-color: #fffaee;\r\n$bg-accent-color: #fff2cc;\r\n$bg-disabled-color: #bcbcbc;\r\n$error-accent-color: #ff6894;\r\n$error-light-color: #fef7f9;\r\n$success-accent-color: #7cc19e;\r\n$success-light-color: #f7fbf9;\r\n$btn-hover-color: #fdb675;\r\n$btn-active-color: #f5a13f;\r\n$btn-arrow-active-color: #de8317;\r\n$container-width: 1440px;\r\n$gap-xs: 8px;\r\n$gap-s: 20px;\r\n$gap-default: 28px;\r\n$gap-m: 36px;\r\n$gap-l: 44px;\r\n$gap-xl: 64px;\r\n$gap-xxl: 110px;\r\n$gap-xxxl: 140px;\r\n$border-radius-s: 10px;\r\n$border-radius-m: 45px;\r\n",
                        ],
                        sourceRoot: "",
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        sliderControl: "sliderControl_sliderControl__U4Xfa",
                        sliderControl_true: "sliderControl_sliderControl_true__Ob0Qv",
                        sliderControlHide: "sliderControl_sliderControlHide__EyyZT",
                        disabled: "sliderControl_disabled__LJHiY",
                    });
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            },
    },
]);
