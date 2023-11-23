"use strict";
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [87],
    {
        "./src/shared/ui/inputs/phone/phone.stories.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, { Default: () => Default, default: () => phone_stories });
            var defineProperty = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                objectDestructuringEmpty = __webpack_require__(
                    "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"
                ),
                esm_extends = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
                console = __webpack_require__("./node_modules/console-browserify/index.js"),
                PATTERN = /\D/g,
                phoneNumberMask = function phoneNumberMask(e) {
                    var input = e.target,
                        inputNumbersValue = (function getInputNumbersValue(value) {
                            return value.replace(PATTERN, "");
                        })(input.value),
                        formattedInputValue = "";
                    return (
                        "+" === input.value[0] && (input.value = "+7"),
                        inputNumbersValue[0]
                            ? (inputNumbersValue.length > 0 && (formattedInputValue += "+7"),
                              inputNumbersValue.length > 1 &&
                                  (formattedInputValue += " ".concat(inputNumbersValue.substring(1, 4))),
                              inputNumbersValue.length > 4 &&
                                  (formattedInputValue += " ".concat(inputNumbersValue.substring(4, 7))),
                              inputNumbersValue.length > 7 &&
                                  (formattedInputValue += " ".concat(inputNumbersValue.substring(7, 9))),
                              inputNumbersValue.length > 9 &&
                                  (formattedInputValue += " ".concat(inputNumbersValue.substring(9, 11))),
                              (input.value = formattedInputValue))
                            : "+" === input.value[0]
                            ? (input.value = "+7")
                            : (input.value = ""),
                        e
                    );
                },
                phoneMask = function phoneMask(e) {
                    var event = (function changePhoneNumber(e, previousValue) {
                        var input = e.target,
                            selectionStart = input.selectionEnd;
                        if (input.value.length !== selectionStart) {
                            if ("+7" !== e.target.value.slice(0, 2)) return (input.value = previousValue), e;
                            if (e.target.value.length > 16) return (input.value = previousValue), e;
                            if (e.target.value.split(" ").length < 5 || e.target.value.split(" ").length > 5)
                                return (input.value = previousValue), e;
                            if (
                                e.target.value.split(" ").some(function (str) {
                                    return str.length > 3;
                                })
                            )
                                return (input.value = previousValue), e;
                            if (/^[+][\d]+$/.test(e.target.value.split(" ").join(""))) return console.log("yes"), e;
                        }
                    })(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "");
                    return event || phoneNumberMask(e);
                },
                input = __webpack_require__("./src/shared/ui/inputs/input/index.ts"),
                __jsx = react.createElement,
                PhoneInput = function PhoneInput(props) {
                    return __jsx(
                        input.I,
                        (0, esm_extends.Z)({}, props, {
                            onChange: function onChange(e) {
                                return (function handlePhoneChange(e) {
                                    var _props$onChange;
                                    null === (_props$onChange = props.onChange) ||
                                        void 0 === _props$onChange ||
                                        _props$onChange.call(props, phoneMask(e, String(props.value)));
                                })(e);
                            },
                        })
                    );
                };
            (PhoneInput.displayName = "PhoneInput"),
                (PhoneInput.__docgenInfo = { description: "", methods: [], displayName: "PhoneInput" });
            try {
                (PhoneInput.displayName = "PhoneInput"),
                    (PhoneInput.__docgenInfo = {
                        description: "",
                        displayName: "PhoneInput",
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
                                defaultValue: null,
                                description: "",
                                name: "error",
                                required: !1,
                                type: { name: "boolean" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["src/shared/ui/inputs/phone/phone.tsx#PhoneInput"] = {
                            docgenInfo: PhoneInput.__docgenInfo,
                            name: "PhoneInput",
                            path: "src/shared/ui/inputs/phone/phone.tsx#PhoneInput",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var _Default$parameters,
                _Default$parameters2,
                external_STORYBOOK_MODULE_CLIENT_API_ = __webpack_require__("@storybook/client-api"),
                phone_stories_jsx = react.createElement;
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
            const phone_stories = {
                title: "UI/Inputs/InputPhone",
                component: PhoneInput,
                parameters: { layout: "padded" },
                tags: ["autodocs"],
                args: { disabled: !1, autoFocus: !0, value: "", onChange: function onChange() {} },
            };
            var TemplateInput = function TemplateInput(args) {
                var restArgs = (0, esm_extends.Z)({}, ((0, objectDestructuringEmpty.Z)(args), args)),
                    _useArgs = (0, external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),
                    _useArgs2 = (0, slicedToArray.Z)(_useArgs, 2),
                    value = _useArgs2[0].value,
                    updateArgs = _useArgs2[1];
                return phone_stories_jsx(
                    "div",
                    { style: { width: "296px" } },
                    phone_stories_jsx(
                        PhoneInput,
                        (0, esm_extends.Z)({}, restArgs, {
                            value,
                            onChange: function handlePhoneChange(e) {
                                return updateArgs({ value: e.target.value });
                            },
                        })
                    )
                );
            };
            TemplateInput.displayName = "TemplateInput";
            var Default = {
                args: {
                    id: "phone",
                    className: "",
                    disabled: !1,
                    placeholder: "Введите ваш телефон",
                    label: "Телефон",
                    error: !1,
                    errorMessage: "Неверный формат телефона",
                    value: "8922812222",
                },
                render: function render(args) {
                    return TemplateInput(args);
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
                                        '{\n  args: {\n    id: "phone",\n    className: "",\n    disabled: false,\n    placeholder: "Введите ваш телефон",\n    label: "Телефон",\n    error: false,\n    errorMessage: "Неверный формат телефона",\n    value: "8922812222"\n  },\n  render: args => TemplateInput(args)\n}',
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
        "./src/shared/ui/inputs/input/index.ts": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            __webpack_require__.d(__webpack_exports__, { I: () => _input__WEBPACK_IMPORTED_MODULE_0__.I });
            var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/shared/ui/inputs/input/input.tsx");
        },
    },
]);
