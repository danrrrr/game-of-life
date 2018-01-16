import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const AppWithTheme = (<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}><App /></MuiThemeProvider>)

ReactDOM.render(
    AppWithTheme,
    document.getElementById('root')
);