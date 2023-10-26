(self.webpackChunkwhywe = self.webpackChunkwhywe || []).push([
    [179],
    {
        "./node_modules/@storybook/nextjs/dist sync recursive": (module) => {
            function webpackEmptyContext(req) {
                var e = new Error("Cannot find module '" + req + "'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            }
            (webpackEmptyContext.keys = () => []),
                (webpackEmptyContext.resolve = webpackEmptyContext),
                (webpackEmptyContext.id = "./node_modules/@storybook/nextjs/dist sync recursive"),
                (module.exports = webpackEmptyContext);
        },
        "./.storybook/preview.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ });
            const __WEBPACK_DEFAULT_EXPORT__ = {
                parameters: {
                    actions: { argTypesRegex: "^on[A-Z].*" },
                    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
                },
            };
        },
        "./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$":
            (module) => {
                function webpackEmptyAsyncContext(req) {
                    return Promise.resolve().then(() => {
                        var e = new Error("Cannot find module '" + req + "'");
                        throw ((e.code = "MODULE_NOT_FOUND"), e);
                    });
                }
                (webpackEmptyAsyncContext.keys = () => []),
                    (webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext),
                    (webpackEmptyAsyncContext.id =
                        "./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$"),
                    (module.exports = webpackEmptyAsyncContext);
            },
        "./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":
            (module, __unused_webpack_exports, __webpack_require__) => {
                var map = {
                    "./components/icon/Icon.stories": ["./src/components/icon/Icon.stories.tsx", 386, 957],
                    "./components/icon/Icon.stories.tsx": ["./src/components/icon/Icon.stories.tsx", 386, 957],
                    "./shared/ui/PriceItem/priceItem.stories": ["./src/shared/ui/PriceItem/priceItem.stories.tsx", 547],
                    "./shared/ui/PriceItem/priceItem.stories.tsx": [
                        "./src/shared/ui/PriceItem/priceItem.stories.tsx",
                        547,
                    ],
                    "./shared/ui/button/button.stories": ["./src/shared/ui/button/button.stories.tsx", 718, 738],
                    "./shared/ui/button/button.stories.tsx": ["./src/shared/ui/button/button.stories.tsx", 718, 738],
                    "./shared/ui/card-example/card-example.stories": [
                        "./src/shared/ui/card-example/card-example.stories.tsx",
                        85,
                    ],
                    "./shared/ui/card-example/card-example.stories.tsx": [
                        "./src/shared/ui/card-example/card-example.stories.tsx",
                        85,
                    ],
                    "./shared/ui/icons/arrow-left-icon/arrow-left-icon.stories": [
                        "./src/shared/ui/icons/arrow-left-icon/arrow-left-icon.stories.ts",
                        990,
                    ],
                    "./shared/ui/icons/arrow-left-icon/arrow-left-icon.stories.ts": [
                        "./src/shared/ui/icons/arrow-left-icon/arrow-left-icon.stories.ts",
                        990,
                    ],
                    "./shared/ui/icons/arrow-right-icon/arrow-left-icon.stories": [
                        "./src/shared/ui/icons/arrow-right-icon/arrow-left-icon.stories.ts",
                        394,
                    ],
                    "./shared/ui/icons/arrow-right-icon/arrow-left-icon.stories.ts": [
                        "./src/shared/ui/icons/arrow-right-icon/arrow-left-icon.stories.ts",
                        394,
                    ],
                    "./shared/ui/icons/checked-icon/checked.stories": [
                        "./src/shared/ui/icons/checked-icon/checked.stories.ts",
                        732,
                    ],
                    "./shared/ui/icons/checked-icon/checked.stories.ts": [
                        "./src/shared/ui/icons/checked-icon/checked.stories.ts",
                        732,
                    ],
                    "./shared/ui/icons/exit-icon/exit-icon.stories": [
                        "./src/shared/ui/icons/exit-icon/exit-icon.stories.ts",
                        310,
                    ],
                    "./shared/ui/icons/exit-icon/exit-icon.stories.ts": [
                        "./src/shared/ui/icons/exit-icon/exit-icon.stories.ts",
                        310,
                    ],
                    "./shared/ui/icons/eye-icon/eye-icon.stories": [
                        "./src/shared/ui/icons/eye-icon/eye-icon.stories.ts",
                        562,
                    ],
                    "./shared/ui/icons/eye-icon/eye-icon.stories.ts": [
                        "./src/shared/ui/icons/eye-icon/eye-icon.stories.ts",
                        562,
                    ],
                    "./shared/ui/icons/warning-icon/warning-icon.stories": [
                        "./src/shared/ui/icons/warning-icon/warning-icon.stories.ts",
                        785,
                    ],
                    "./shared/ui/icons/warning-icon/warning-icon.stories.ts": [
                        "./src/shared/ui/icons/warning-icon/warning-icon.stories.ts",
                        785,
                    ],
                    "./shared/ui/inputs/checkbox/checkbox.stories": [
                        "./src/shared/ui/inputs/checkbox/checkbox.stories.tsx",
                        386,
                        934,
                    ],
                    "./shared/ui/inputs/checkbox/checkbox.stories.tsx": [
                        "./src/shared/ui/inputs/checkbox/checkbox.stories.tsx",
                        386,
                        934,
                    ],
                    "./shared/ui/inputs/input/input.stories": [
                        "./src/shared/ui/inputs/input/input.stories.tsx",
                        386,
                        448,
                        882,
                    ],
                    "./shared/ui/inputs/input/input.stories.tsx": [
                        "./src/shared/ui/inputs/input/input.stories.tsx",
                        386,
                        448,
                        882,
                    ],
                    "./shared/ui/inputs/password/password.stories": [
                        "./src/shared/ui/inputs/password/password.stories.tsx",
                        386,
                        448,
                        178,
                    ],
                    "./shared/ui/inputs/password/password.stories.tsx": [
                        "./src/shared/ui/inputs/password/password.stories.tsx",
                        386,
                        448,
                        178,
                    ],
                    "./shared/ui/inputs/phone/phone.stories": [
                        "./src/shared/ui/inputs/phone/phone.stories.tsx",
                        386,
                        448,
                        87,
                    ],
                    "./shared/ui/inputs/phone/phone.stories.tsx": [
                        "./src/shared/ui/inputs/phone/phone.stories.tsx",
                        386,
                        448,
                        87,
                    ],
                    "./shared/ui/numberItem/numberItem.stories": [
                        "./src/shared/ui/numberItem/numberItem.stories.tsx",
                        710,
                    ],
                    "./shared/ui/numberItem/numberItem.stories.tsx": [
                        "./src/shared/ui/numberItem/numberItem.stories.tsx",
                        710,
                    ],
                    "./shared/ui/slider/slider.stories": ["./src/shared/ui/slider/slider.stories.tsx", 718, 914],
                    "./shared/ui/slider/slider.stories.tsx": ["./src/shared/ui/slider/slider.stories.tsx", 718, 914],
                    "./shared/ui/sllderControl/sliderControl.stories": [
                        "./src/shared/ui/sllderControl/sliderControl.stories.ts",
                        718,
                        294,
                    ],
                    "./shared/ui/sllderControl/sliderControl.stories.ts": [
                        "./src/shared/ui/sllderControl/sliderControl.stories.ts",
                        718,
                        294,
                    ],
                };
                function webpackAsyncContext(req) {
                    if (!__webpack_require__.o(map, req))
                        return Promise.resolve().then(() => {
                            var e = new Error("Cannot find module '" + req + "'");
                            throw ((e.code = "MODULE_NOT_FOUND"), e);
                        });
                    var ids = map[req],
                        id = ids[0];
                    return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => __webpack_require__(id));
                }
                (webpackAsyncContext.keys = () => Object.keys(map)),
                    (webpackAsyncContext.id =
                        "./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$"),
                    (module.exports = webpackAsyncContext);
            },
        "./storybook-config-entry.js": (
            __unused_webpack_module,
            __unused_webpack___webpack_exports__,
            __webpack_require__
        ) => {
            "use strict";
            var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global"),
                external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("@storybook/preview-api"),
                external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__("@storybook/channels");
            const importers = [
                async (path) => {
                    if (
                        !/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.mdx)$/.exec(
                            path
                        )
                    )
                        return;
                    const pathRemainder = path.substring(6);
                    return __webpack_require__(
                        "./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$"
                    )("./" + pathRemainder);
                },
                async (path) => {
                    if (
                        !/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(
                            path
                        )
                    )
                        return;
                    const pathRemainder = path.substring(6);
                    return __webpack_require__(
                        "./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$"
                    )("./" + pathRemainder);
                },
            ];
            const channel = (0, external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({ page: "preview" });
            external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),
                "DEVELOPMENT" === external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE &&
                    (window.__STORYBOOK_SERVER_CHANNEL__ = channel);
            const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb();
            (window.__STORYBOOK_PREVIEW__ = preview),
                (window.__STORYBOOK_STORY_STORE__ = preview.storyStore),
                (window.__STORYBOOK_ADDONS_CHANNEL__ = channel),
                (window.__STORYBOOK_CLIENT_API__ = new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({
                    storyStore: preview.storyStore,
                })),
                preview.initialize({
                    importFn: async function importFn(path) {
                        for (let i = 0; i < importers.length; i++) {
                            const moduleExports = await ((x = () => importers[i](path)), x());
                            if (moduleExports) return moduleExports;
                        }
                        var x;
                    },
                    getProjectAnnotations: () =>
                        (0, external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([
                            __webpack_require__("./node_modules/@storybook/react/preview.js"),
                            __webpack_require__("./node_modules/@storybook/nextjs/dist/preview.js"),
                            __webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),
                            __webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),
                            __webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),
                            __webpack_require__(
                                "./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"
                            ),
                            __webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),
                            __webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),
                            __webpack_require__(
                                "./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"
                            ),
                            __webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),
                            __webpack_require__("./.storybook/preview.ts"),
                        ]),
                });
        },
        "@storybook/channels": (module) => {
            "use strict";
            module.exports = __STORYBOOK_MODULE_CHANNELS__;
        },
        "@storybook/client-api": (module) => {
            "use strict";
            module.exports = __STORYBOOK_MODULE_CLIENT_API__;
        },
        "@storybook/client-logger": (module) => {
            "use strict";
            module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;
        },
        "@storybook/core-events": (module) => {
            "use strict";
            module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;
        },
        "@storybook/global": (module) => {
            "use strict";
            module.exports = __STORYBOOK_MODULE_GLOBAL__;
        },
        "@storybook/preview-api": (module) => {
            "use strict";
            module.exports = __STORYBOOK_MODULE_PREVIEW_API__;
        },
    },
    (__webpack_require__) => {
        __webpack_require__.O(0, [783], () => {
            return (moduleId = "./storybook-config-entry.js"), __webpack_require__((__webpack_require__.s = moduleId));
            var moduleId;
        });
        __webpack_require__.O();
    },
]);
