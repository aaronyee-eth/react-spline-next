"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
typeof window === 'object' && require('../viewer/spline-viewer.js');
var Spline = function (props) {
    var className = props.className, style = props.style, hideLogo = props.hideLogo, anchorElement = props.anchorElement, rest = __rest(props, ["className", "style", "hideLogo", "anchorElement"]);
    if (!rest.unloadable)
        delete rest.unloadable;
    var viewerRef = (0, react_1.useRef)();
    var _a = (0, react_1.useState)(), viewer = _a[0], setViewer = _a[1];
    (0, react_1.useEffect)(function () {
        if (!viewer && viewerRef.current && viewerRef.current._spline) {
            setViewer(viewerRef.current);
        }
    });
    (0, react_1.useEffect)(function () {
        if (!viewer)
            return;
        var onLoad = function () {
            viewer._spline.eventManager.eventContext.anchorElement = anchorElement;
        };
        viewer._spline.addEventListener('init', onLoad);
        return function () {
            viewer._spline.removeEventListener('init', onLoad);
        };
    }, [anchorElement, viewer]);
    (0, react_1.useEffect)(function () {
        if (!viewer)
            return;
        hideLogo && viewer._logo.remove();
    }, [hideLogo, viewer]);
    (0, react_1.useEffect)(function () {
        if (!viewer || !props.url)
            return;
        viewer._spline.load(props.url).then(viewer.onLoaded);
    }, [props.url, viewer]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: className, style: style }, { children: (0, jsx_runtime_1.jsx)("spline-viewer", __assign({}, rest, { ref: viewerRef })) })));
};
exports.default = Spline;
