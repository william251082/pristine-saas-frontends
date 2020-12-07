"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var Signin_1 = require("/components/Signin");
var Signup_1 = require("/components/Signup");
var generateClassName = styles_1.createGenerateClassName({
    productionPrefix: 'au'
});
exports.default = (function (_a) {
    var history = _a.history, onSignIn = _a.onSignIn;
    return (<div>
            <styles_1.StylesProvider generateClassName={generateClassName}>
                <react_router_dom_1.Router history={history}>
                    <react_router_dom_1.Switch>
                        <react_router_dom_1.Route exact path="/auth/signin">
                            <Signin_1.default onSignIn={onSignIn}/>
                        </react_router_dom_1.Route>
                        <react_router_dom_1.Route exact path="/auth/signup">
                            <Signup_1.default onSignIn={onSignIn}/>
                        </react_router_dom_1.Route>
                    </react_router_dom_1.Switch>
                </react_router_dom_1.Router>
            </styles_1.StylesProvider>
        </div>);
});
