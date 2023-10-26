try {
    var r = "storybook/measure-addon",
        u = `${r}/tool`;
    var a = __REACT__,
        {
            Children: M,
            Component: B,
            Fragment: P,
            Profiler: D,
            PureComponent: x,
            StrictMode: N,
            Suspense: v,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: H,
            cloneElement: F,
            createContext: K,
            createElement: W,
            createFactory: Y,
            createRef: G,
            forwardRef: w,
            isValidElement: U,
            lazy: V,
            memo: q,
            useCallback: p,
            useContext: z,
            useDebugValue: Z,
            useEffect: S,
            useImperativeHandle: $,
            useLayoutEffect: j,
            useMemo: J,
            useReducer: Q,
            useRef: X,
            useState: ee,
            version: oe,
        } = __REACT__;
    var se = __STORYBOOKAPI__,
        {
            ActiveTabs: le,
            Consumer: ue,
            ManagerContext: ce,
            Provider: me,
            addons: c,
            combineParameters: ie,
            controlOrMetaKey: pe,
            controlOrMetaSymbol: Se,
            eventMatchesShortcut: de,
            eventToShortcut: _e,
            isMacLike: Te,
            isShortcutTaken: be,
            keyToSymbol: Oe,
            merge: ye,
            mockChannel: Ce,
            optionOrAltSymbol: Ee,
            shortcutMatchesShortcut: he,
            shortcutToHumanString: fe,
            types: d,
            useAddonState: Ae,
            useArgTypes: ge,
            useArgs: Ie,
            useChannel: Re,
            useGlobalTypes: ke,
            useGlobals: _,
            useParameter: Le,
            useSharedState: Me,
            useStoryPrepared: Be,
            useStorybookApi: T,
            useStorybookState: Pe,
        } = __STORYBOOKAPI__;
    var He = __STORYBOOKCOMPONENTS__,
        {
            A: Fe,
            ActionBar: Ke,
            AddonPanel: We,
            Badge: Ye,
            Bar: Ge,
            Blockquote: we,
            Button: Ue,
            ClipboardCode: Ve,
            Code: qe,
            DL: ze,
            Div: Ze,
            DocumentWrapper: $e,
            ErrorFormatter: je,
            FlexBar: Je,
            Form: Qe,
            H1: Xe,
            H2: eo,
            H3: oo,
            H4: to,
            H5: ro,
            H6: ao,
            HR: no,
            IconButton: b,
            IconButtonSkeleton: so,
            Icons: O,
            Img: lo,
            LI: uo,
            Link: co,
            ListItem: mo,
            Loader: io,
            OL: po,
            P: So,
            Placeholder: _o,
            Pre: To,
            ResetWrapper: bo,
            ScrollArea: Oo,
            Separator: yo,
            Spaced: Co,
            Span: Eo,
            StorybookIcon: ho,
            StorybookLogo: fo,
            Symbols: Ao,
            SyntaxHighlighter: go,
            TT: Io,
            TabBar: Ro,
            TabButton: ko,
            TabWrapper: Lo,
            Table: Mo,
            Tabs: Bo,
            TabsState: Po,
            TooltipLinkList: Do,
            TooltipMessage: xo,
            TooltipNote: No,
            UL: vo,
            WithTooltip: Ho,
            WithTooltipPure: Fo,
            Zoom: Ko,
            codeCommon: Wo,
            components: Yo,
            createCopyToClipboardFunction: Go,
            getStoryHref: wo,
            icons: Uo,
            interleaveSeparators: Vo,
            nameSpaceClassNames: qo,
            resetComponents: zo,
            withReset: Zo,
        } = __STORYBOOKCOMPONENTS__;
    var y = () => {
        let [n, m] = _(),
            { measureEnabled: s } = n,
            i = T(),
            l = p(() => m({ measureEnabled: !s }), [m, s]);
        return (
            S(() => {
                i.setAddonShortcut(r, {
                    label: "Toggle Measure [M]",
                    defaultShortcut: ["M"],
                    actionName: "measure",
                    showInMenu: !1,
                    action: l,
                });
            }, [l, i]),
            a.createElement(
                b,
                { key: u, active: s, title: "Enable measure", onClick: l },
                a.createElement(O, { icon: "ruler" })
            )
        );
    };
    c.register(r, () => {
        c.add(u, {
            type: d.TOOL,
            title: "Measure",
            match: ({ viewMode: n }) => n === "story",
            render: () => a.createElement(y, null),
        });
    });
} catch (e) {
    console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e);
}
