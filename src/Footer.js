import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar,ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
const Footer = (props) => (
    <Toolbar  style={{ position: 'fixed', bottom: 0, right: 0, left: 0 }}>
        <ToolbarGroup>
            <ToolbarTitle text='Please mark the alive cells'/>
            <RaisedButton label='START' primary={true} onClick={props.start}/>
            <RaisedButton label='STOP' secondary={true} onClick={props.stop}/>
            <RaisedButton label='CLEAR' secondary={true} onClick={props.clear}/>
        </ToolbarGroup>
        
    </Toolbar>
)
export default Footer;