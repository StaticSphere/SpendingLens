import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import Shell from './Shell';

const Main = () => {
    const { store } = configureStore();

    return (
        <Provider store={store}>
            <Shell />
        </Provider>
    );
};

ReactDOM.render(<Main />, document.getElementById('applicationRoot'));