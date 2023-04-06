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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var React = __importStar(require("react"));
var react_1 = require("react");
typeof window === 'object' && require('../viewer/spline-viewer.cjs');
var Spline = function (props) {
    var className = props.className, style = props.style, hideLogo = props.hideLogo, anchorElement = props.anchorElement, rest = __rest(props, ["className", "style", "hideLogo", "anchorElement"]);
    if (!rest.unloadable)
        delete rest.unloadable;
    var id = (0, react_1.useState)('spline-viewer-' + Math.random().toString(36).substr(2, 8))[0];
    var _a = (0, react_1.useState)(), viewer = _a[0], setViewer = _a[1];
    (0, react_1.useEffect)(function () {
        setViewer(document.getElementById(id));
    }, [id]);
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
    return (React.createElement("div", { className: className, style: style },
        React.createElement("spline-viewer", __assign({}, rest, { id: id }))));
};
exports.default = Spline;
//# sourceMappingURL=index.js.map