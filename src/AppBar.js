import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import './AppBar.css';

const MyAppBar = (props) => (
    <AppBar title="Conway's Game of Life"
        iconElementLeft={<IconButton onclick={props.displayControllPanelSate }><Menu /></IconButton>}
        iconElementRight={<IconButton iconClassName='muidocs-icon-custom-github' href='' />} />
)

export default MyAppBar;