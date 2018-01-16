import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import './AppBar.css';

const MyAppBar = (props) => (
    <AppBar title="Conway's Game of Life"
        iconElementLeft={<IconButton onClick={props.displayControllPanelState }><Menu /></IconButton>}
        iconElementRight={<IconButton iconClassName='muidocs-icon-custom-github' href='https://github.com/danrrrr/game-of-life' />} />
)

export default MyAppBar;