"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
// import Landing from "/components/Landing";
// import Pricing from "/components/Pricing";
var generateClassName = styles_1.createGenerateClassName({
    productionPrefix: 'au'
});
exports.default = (function (_a) {
    var history = _a.history;
    return (<div>
            <styles_1.StylesProvider generateClassName={generateClassName}>
                <react_router_dom_1.Router history={history}>
                    <react_router_dom_1.Switch>
                        
                        
                    </react_router_dom_1.Switch>
                </react_router_dom_1.Router>
            </styles_1.StylesProvider>
        </div>);
});
