import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {createMemoryHistory} from "history";

// Mount function to start up the app
const mount = (el, { onNavigate }) => {
    const history = createMemoryHistory();

    history.listen(onNavigate);

    ReactDOM.render(
        <App history={history} />, el
    );
};

// If in development and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// If running through a container then export the mount function
export {mount} ;