"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mount = void 0;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
var history_1 = require("history");
// Mount function to start up the app
var mount = function (el, _a) {
    var onNavigate = _a.onNavigate, defaultHistory = _a.defaultHistory, initialPath = _a.initialPath;
    var history = defaultHistory || history_1.createMemoryHistory({
        initialEntries: [initialPath]
    });
    if (onNavigate) {
        history.listen(onNavigate);
    }
    react_dom_1.default.render(<App_1.default history={history}/>, el);
    return {
        onParentNavigate: function (_a) {
            var nextPathname = _a.pathname;
            console.log(nextPathname);
            var pathname = history.location.pathname;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};
exports.mount = mount;
// If in development and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
    var devRoot = document.querySelector('#_auth-dev-root');
    if (devRoot) {
        mount(devRoot, { onNavigate: function () { }, defaultHistory: history_1.createBrowserHistory(), initialPath: '' });
    }
}
