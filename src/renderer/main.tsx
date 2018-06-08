import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';

import configureStore from './configureStore';
import Shell from './Shell';
import lightTheme from './themes/lightTheme';

const Main = () => {
    const { store } = configureStore();

    return (
        <Provider store={store}>
            <MuiThemeProvider muiTheme={lightTheme}>
                <Shell />
            </MuiThemeProvider>
        </Provider>
    );
};

ReactDOM.render(<Main />, document.getElementById('applicationRoot'));