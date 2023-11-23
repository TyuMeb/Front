/*! For license information please see shared-ui-slider-slider-stories.9fe0876b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [914],
    {
        "./src/shared/ui/slider/slider.stories.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, { Default: () => Default, default: () => slider_stories });
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
                slider_module = __webpack_require__(
                    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/slider/slider.module.scss"
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, "head")),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(slider_module.Z, options);
            const slider_slider_module = slider_module.Z && slider_module.Z.locals ? slider_module.Z.locals : void 0;
            var _Default$parameters,
                _Default$parameters2,
                classnames = __webpack_require__("./node_modules/classnames/index.js"),
                classnames_default = __webpack_require__.n(classnames),
                card_example = __webpack_require__("./src/shared/ui/card-example/card-example.tsx"),
                sliderControl = __webpack_require__("./src/shared/ui/sllderControl/sliderControl.tsx"),
                __jsx = react.createElement,
                Slider = function Slider(_ref) {
                    var slides = _ref.slides,
                        _useState = (0, react.useState)(0),
                        currentSlide = _useState[0],
                        setCurrentSlide = _useState[1];
                    function slideForward() {
                        slides && setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
                    }
                    function slideBackward() {
                        slides && setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
                    }
                    return slides
                        ? __jsx(
                              "div",
                              { className: slider_slider_module.inner },
                              __jsx(
                                  "h2",
                                  { className: classnames_default()("title-h2", slider_slider_module.title) },
                                  "Примеры работ"
                              ),
                              __jsx(
                                  "ul",
                                  { className: slider_slider_module.examples },
                                  slides[currentSlide].slideItems.map(function (el, i) {
                                      return __jsx(
                                          "li",
                                          { className: slider_slider_module.examples_item, key: i },
                                          __jsx(card_example.T, {
                                              src: el.src,
                                              alt: el.alt,
                                              object: el.object,
                                              price: el.price,
                                          }),
                                          !i &&
                                              __jsx(sliderControl.z, {
                                                  onRightArrowClick: slideForward,
                                                  onLeftArrowClick: slideBackward,
                                              })
                                      );
                                  })
                              )
                          )
                        : __jsx(react.Fragment, null);
                };
            Slider.__docgenInfo = { description: "", methods: [], displayName: "Slider" };
            try {
                (Slider.displayName = "Slider"),
                    (Slider.__docgenInfo = {
                        description: "",
                        displayName: "Slider",
                        props: {
                            slides: {
                                defaultValue: null,
                                description: "",
                                name: "slides",
                                required: !0,
                                type: { name: "SlideItem[]" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["src/shared/ui/slider/slider.tsx#Slider"] = {
                            docgenInfo: Slider.__docgenInfo,
                            name: "Slider",
                            path: "src/shared/ui/slider/slider.tsx#Slider",
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
            const slider_stories = { title: "UI/Slider", component: Slider, parameters: { layout: "padded" } };
            var Default = {
                args: {
                    slides: [
                        {
                            slideItems: [
                                {
                                    src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-16.jpg",
                                    alt: "Какой-то текст 1",
                                    object: "Товар 1",
                                    price: "1001 р",
                                },
                                {
                                    src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-2.jpg",
                                    alt: "Какой-то текст 2",
                                    object: "Товар 2",
                                    price: "1002 р",
                                },
                                {
                                    src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-3.jpg",
                                    alt: "Какой-то текст 3",
                                    object: "Товар 3",
                                    price: "1003 р",
                                },
                                {
                                    src: "https://ekbkupe.ru/images/stories/virtuemart/product/4179-1-1-2.jpg",
                                    alt: "Какой-то текст 4",
                                    object: "Товар 4",
                                    price: "1004 р",
                                },
                            ],
                        },
                        {
                            slideItems: [
                                {
                                    src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-4.jpg",
                                    alt: "Какой-то текст 5",
                                    object: "Товар 5",
                                    price: "1005 р",
                                },
                                {
                                    src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-6.jpg",
                                    alt: "Какой-то текст 6",
                                    object: "Товар 6",
                                    price: "1006 р",
                                },
                                {
                                    src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg",
                                    alt: "Какой-то текст 7",
                                    object: "Товар 7",
                                    price: "1007 р",
                                },
                                {
                                    src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-3.jpg",
                                    alt: "Какой-то текст 8",
                                    object: "Товар 8",
                                    price: "1008 р",
                                },
                            ],
                        },
                    ],
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
                                        '{\n  args: {\n    slides: [{\n      slideItems: [{\n        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-16.jpg",\n        alt: "Какой-то текст 1",\n        object: "Товар 1",\n        price: "1001 р"\n      }, {\n        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-2.jpg",\n        alt: "Какой-то текст 2",\n        object: "Товар 2",\n        price: "1002 р"\n      }, {\n        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-3.jpg",\n        alt: "Какой-то текст 3",\n        object: "Товар 3",\n        price: "1003 р"\n      }, {\n        src: "https://ekbkupe.ru/images/stories/virtuemart/product/4179-1-1-2.jpg",\n        alt: "Какой-то текст 4",\n        object: "Товар 4",\n        price: "1004 р"\n      }]\n    }, {\n      slideItems: [{\n        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-4.jpg",\n        alt: "Какой-то текст 5",\n        object: "Товар 5",\n        price: "1005 р"\n      }, {\n        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0003-6.jpg",\n        alt: "Какой-то текст 6",\n        object: "Товар 6",\n        price: "1006 р"\n      }, {\n        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-1.jpg",\n        alt: "Какой-то текст 7",\n        object: "Товар 7",\n        price: "1007 р"\n      }, {\n        src: "https://ekbkupe.ru/images/stories/virtuemart/product/shk-0005-3.jpg",\n        alt: "Какой-то текст 8",\n        object: "Товар 8",\n        price: "1008 р"\n      }]\n    }]\n  }\n}',
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
        "./src/shared/ui/card-example/card-example.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { T: () => CardExample });
            var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
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
                card_example_module = __webpack_require__(
                    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/card-example/card-example.module.scss"
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, "head")),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(card_example_module.Z, options);
            const card_example_card_example_module =
                card_example_module.Z && card_example_module.Z.locals ? card_example_module.Z.locals : void 0;
            var priceItem = __webpack_require__("./src/shared/ui/priceItem/priceItem.tsx"),
                cn = __webpack_require__("./src/shared/lib/cn.ts"),
                __jsx = react.createElement,
                CardExample = function CardExample(_ref) {
                    var _ref$width = _ref.width,
                        width = void 0 === _ref$width ? "100%" : _ref$width,
                        _ref$height = _ref.height,
                        height = void 0 === _ref$height ? "100%" : _ref$height,
                        src = _ref.src,
                        alt = _ref.alt,
                        object = _ref.object,
                        price = _ref.price,
                        _useState = (0, react.useState)(!1),
                        isVisible = _useState[0],
                        setIsVisible = _useState[1];
                    return (
                        (0, react.useEffect)(
                            function () {
                                isVisible ||
                                    setTimeout(function () {
                                        return setIsVisible(!0);
                                    }, 100);
                            },
                            [, isVisible]
                        ),
                        (0, react.useEffect)(
                            function () {
                                setIsVisible(!1);
                            },
                            [src, alt, object, price]
                        ),
                        __jsx(
                            "div",
                            {
                                className: (0, cn.cn)(
                                    card_example_card_example_module.inner,
                                    isVisible ? card_example_card_example_module.inner_visible : null
                                ),
                            },
                            __jsx("img", {
                                style: {
                                    backgroundColor: "#F5F3F1",
                                    borderRadius: "44px",
                                    objectFit: "cover",
                                    width,
                                    height,
                                },
                                src,
                                alt,
                            }),
                            __jsx(
                                "div",
                                { className: card_example_card_example_module.description },
                                object && __jsx(priceItem.g, { caption: object }),
                                price && __jsx(priceItem.g, { caption: price })
                            )
                        )
                    );
                };
            (CardExample.displayName = "CardExample"),
                (CardExample.__docgenInfo = {
                    description: "",
                    methods: [],
                    displayName: "CardExample",
                    props: {
                        width: { defaultValue: { value: '"100%"', computed: !1 }, required: !1 },
                        height: { defaultValue: { value: '"100%"', computed: !1 }, required: !1 },
                    },
                });
            try {
                (CardExample.displayName = "CardExample"),
                    (CardExample.__docgenInfo = {
                        description: "",
                        displayName: "CardExample",
                        props: {
                            width: {
                                defaultValue: { value: "100%" },
                                description: "",
                                name: "width",
                                required: !1,
                                type: { name: "string" },
                            },
                            height: {
                                defaultValue: { value: "100%" },
                                description: "",
                                name: "height",
                                required: !1,
                                type: { name: "string" },
                            },
                            src: {
                                defaultValue: null,
                                description: "",
                                name: "src",
                                required: !0,
                                type: { name: "string" },
                            },
                            alt: {
                                defaultValue: null,
                                description: "",
                                name: "alt",
                                required: !0,
                                type: { name: "string" },
                            },
                            object: {
                                defaultValue: null,
                                description: "",
                                name: "object",
                                required: !0,
                                type: { name: "string" },
                            },
                            price: {
                                defaultValue: null,
                                description: "",
                                name: "price",
                                required: !0,
                                type: { name: "string" },
                            },
                        },
                    }),
                    "undefined" != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES["src/shared/ui/card-example/card-example.tsx#CardExample"] = {
                            docgenInfo: CardExample.__docgenInfo,
                            name: "CardExample",
                            path: "src/shared/ui/card-example/card-example.tsx#CardExample",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "./src/shared/ui/icons/arrow-left-icon/arrow-left-icon.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            "use strict";
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
            "use strict";
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
        "./src/shared/ui/priceItem/priceItem.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { g: () => PriceItem });
            var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
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
                priceItem_module = __webpack_require__(
                    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/priceItem/priceItem.module.scss"
                ),
                options = {};
            (options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, "head")),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default());
            injectStylesIntoStyleTag_default()(priceItem_module.Z, options);
            const priceItem_priceItem_module =
                priceItem_module.Z && priceItem_module.Z.locals ? priceItem_module.Z.locals : void 0;
            var __jsx = react.createElement,
                PriceItem = function PriceItem(_ref) {
                    var caption = _ref.caption;
                    return __jsx("span", { className: priceItem_priceItem_module.priceItem }, caption);
                };
            (PriceItem.displayName = "PriceItem"),
                (PriceItem.__docgenInfo = {
                    description: "",
                    methods: [],
                    displayName: "PriceItem",
                    props: { caption: { required: !0, tsType: { name: "string" }, description: "" } },
                });
            try {
                (PriceItem.displayName = "PriceItem"),
                    (PriceItem.__docgenInfo = {
                        description: "",
                        displayName: "PriceItem",
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
                        (STORYBOOK_REACT_CLASSES["src/shared/ui/priceItem/priceItem.tsx#PriceItem"] = {
                            docgenInfo: PriceItem.__docgenInfo,
                            name: "PriceItem",
                            path: "src/shared/ui/priceItem/priceItem.tsx#PriceItem",
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        "./src/shared/ui/sllderControl/sliderControl.tsx": (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            "use strict";
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
        "./node_modules/classnames/index.js": (module, exports) => {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            !(function () {
                "use strict";
                var hasOwn = {}.hasOwnProperty;
                function classNames() {
                    for (var classes = [], i = 0; i < arguments.length; i++) {
                        var arg = arguments[i];
                        if (arg) {
                            var argType = typeof arg;
                            if ("string" === argType || "number" === argType) classes.push(arg);
                            else if (Array.isArray(arg)) {
                                if (arg.length) {
                                    var inner = classNames.apply(null, arg);
                                    inner && classes.push(inner);
                                }
                            } else if ("object" === argType) {
                                if (
                                    arg.toString !== Object.prototype.toString &&
                                    !arg.toString.toString().includes("[native code]")
                                ) {
                                    classes.push(arg.toString());
                                    continue;
                                }
                                for (var key in arg) hasOwn.call(arg, key) && arg[key] && classes.push(key);
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
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/card-example/card-example.module.scss":
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
                    ".card-example_inner__0fDYc{position:relative;display:flex;overflow:hidden;height:100%;width:100%;opacity:0}.card-example_inner_visible__mNIfF{opacity:1;transition:opacity 1s}.card-example_description__wZXNG{display:flex;gap:20px;position:absolute;top:28px;left:28px}",
                    "",
                    {
                        version: 3,
                        sources: ["webpack://./src/shared/ui/card-example/card-example.module.scss"],
                        names: [],
                        mappings:
                            "AACA,2BACI,iBAAA,CACA,YAAA,CACA,eAAA,CACA,WAAA,CACA,UAAA,CACA,SAAA,CAEA,mCACI,SAAA,CACA,qBAAA,CAIR,iCACI,YAAA,CACA,QAAA,CACA,iBAAA,CACA,QAAA,CACA,SAAA",
                        sourcesContent: [
                            '@import "@src/styles/index.scss";\n.inner {\r\n    position: relative;\r\n    display: flex;\r\n    overflow: hidden;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n\r\n    &_visible {\r\n        opacity: 1;\r\n        transition: opacity 1s;\r\n    }\r\n}\r\n\r\n.description {\r\n    display: flex;\r\n    gap: 20px;\r\n    position: absolute;\r\n    top: 28px;\r\n    left: 28px;\r\n}\r\n',
                        ],
                        sourceRoot: "",
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        inner: "card-example_inner__0fDYc",
                        inner_visible: "card-example_inner_visible__mNIfF",
                        description: "card-example_description__wZXNG",
                    });
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            },
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/priceItem/priceItem.module.scss":
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
                    '.priceItem_priceItem__hWees{border:none;padding:10px 20px;border-radius:30px;background-color:#fff2cc;color:inherit;font-family:"Source Sans Pro",Arial,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:normal}',
                    "",
                    {
                        version: 3,
                        sources: [
                            "webpack://./src/shared/ui/priceItem/priceItem.module.scss",
                            "webpack://./src/styles/colors.scss",
                            "webpack://./src/styles/mixins.scss",
                        ],
                        names: [],
                        mappings:
                            "AACA,4BACI,WAAA,CACA,iBAAA,CACA,kBAAA,CACA,wBCHK,CDIL,aAAA,CE8CA,8CAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA",
                        sourcesContent: [
                            '@import "@src/styles/index.scss";\n.priceItem {\r\n    border: none;\r\n    padding: 10px 20px;\r\n    border-radius: 30px;\r\n    background-color: $almond;\r\n    color: inherit;\r\n    @include textPriceItem;\r\n}\r\n',
                            "$black: #000;\r\n$white: #fff;\r\n$almond: #fff2cc;\r\n$light-gray: #bcbc;\r\n$asphalt: #b5b3b2;\r\n$mustard: #fccf55;\r\n$pink-pig: #ff6894;\r\n$pale-pink: #fef7f9;\r\n$graphite-black: #1c1c1c;\r\n",
                            '@mixin background {\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n@mixin beforeOrAfter {\r\n    content: "";\r\n    position: absolute;\r\n}\r\n\r\n@mixin reset-button {\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n@mixin headline {\r\n    font-family: "Raleway", Arial, sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    color: $black;\r\n}\r\n\r\n@mixin headline2 {\r\n    font-size: 30px;\r\n    line-height: 130%;\r\n}\r\n\r\n@mixin text {\r\n    font-family: "Open Sans", Arial, sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n}\r\n\r\n@mixin textSmall {\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n}\r\n\r\n@mixin textTiny {\r\n    font-size: 14px;\r\n    line-height: 21px;\r\n}\r\n\r\n@mixin textNumberItem {\r\n    font-family: "Open Sans", Arial, sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n}\r\n\r\n@mixin textPriceItem {\r\n    font-family: "Source Sans Pro", Arial, sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n}\r\n',
                        ],
                        sourceRoot: "",
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = { priceItem: "priceItem_priceItem__hWees" });
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            },
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/slider/slider.module.scss":
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
                    '.slider_inner__ySlxH{width:100%}.slider_title__8yZ_I{padding-left:28px;padding-bottom:40px}.slider_examples__NoSXi{list-style:none;padding:0;display:grid;grid-template-areas:"small1 small2 aside" "big big aside";grid-template-columns:1fr 1fr 1fr;grid-template-rows:208px 326px;gap:28px}.slider_examples_item__nhXX1{height:100%;position:relative;padding:0;opacity:1}.slider_examples_item__nhXX1:first-of-type{grid-area:aside;display:flex;flex-direction:column;justify-content:space-between;align-items:center;gap:28px}.slider_examples_item__nhXX1:nth-of-type(2){grid-area:small1}.slider_examples_item__nhXX1:nth-of-type(3){grid-area:small2}.slider_examples_item__nhXX1:nth-of-type(4){grid-area:big}.slider_button__bhuff{outline:none;border:none;background:none}.slider_button__bhuff:hover{opacity:.7;transition:opacity ease-in-out .2s;cursor:pointer}',
                    "",
                    {
                        version: 3,
                        sources: ["webpack://./src/shared/ui/slider/slider.module.scss"],
                        names: [],
                        mappings:
                            "AACA,qBACI,UAAA,CAGJ,qBACI,iBAAA,CACA,mBAAA,CAGJ,wBACI,eAAA,CACA,SAAA,CACA,YAAA,CACA,yDACI,CAEJ,iCAAA,CACA,8BAAA,CACA,QAAA,CAEA,6BACI,WAAA,CACA,iBAAA,CACA,SAAA,CACA,SAAA,CAEA,2CACI,eAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,kBAAA,CACA,QAAA,CAGJ,4CACI,gBAAA,CAGJ,4CACI,gBAAA,CAGJ,4CACI,aAAA,CAKZ,sBACI,YAAA,CACA,WAAA,CACA,eAAA,CAGJ,4BACI,UAAA,CACA,kCAAA,CACA,cAAA",
                        sourcesContent: [
                            '@import "@src/styles/index.scss";\n.inner {\r\n    width: 100%;\r\n}\r\n\r\n.title {\r\n    padding-left: 28px;\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.examples {\r\n    list-style: none;\r\n    padding: 0;\r\n    display: grid;\r\n    grid-template-areas:\r\n        "small1 small2 aside"\r\n        "big big aside";\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 208px 326px;\r\n    gap: 28px;\r\n\r\n    &_item {\r\n        height: 100%;\r\n        position: relative;\r\n        padding: 0;\r\n        opacity: 1;\r\n\r\n        &:first-of-type {\r\n            grid-area: aside;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            gap: 28px;\r\n        }\r\n\r\n        &:nth-of-type(2) {\r\n            grid-area: small1;\r\n        }\r\n\r\n        &:nth-of-type(3) {\r\n            grid-area: small2;\r\n        }\r\n\r\n        &:nth-of-type(4) {\r\n            grid-area: big;\r\n        }\r\n    }\r\n}\r\n\r\n.button {\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n.button:hover {\r\n    opacity: 0.7;\r\n    transition: opacity ease-in-out 0.2s;\r\n    cursor: pointer;\r\n}\r\n',
                        ],
                        sourceRoot: "",
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        inner: "slider_inner__ySlxH",
                        title: "slider_title__8yZ_I",
                        examples: "slider_examples__NoSXi",
                        examples_item: "slider_examples_item__nhXX1",
                        button: "slider_button__bhuff",
                    });
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            },
        "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/sllderControl/sliderControl.module.scss":
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
