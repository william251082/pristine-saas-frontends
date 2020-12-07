import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {createMemoryHistory, createBrowserHistory} from "history";

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} />, el
    );

    return {
        onParentNavigate({pathname: nextPathname}) {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
};

// If in development and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot, { onNavigate: ()=>{}, defaultHistory: createBrowserHistory(), initialPath: '' });
    }
}

// If running through a container then export the mount function
export {mount} ;