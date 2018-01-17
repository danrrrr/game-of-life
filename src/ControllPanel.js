import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Rules from './Rules';
import TextField from 'material-ui/TextField';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import face from 'material-ui/svg-icons/action/face';
import event from 'material-ui/svg-icons/action/event';
const ControllPanel = (props) => (
    <Drawer width={400} openSecondary={true} open={props.showControllPanel}>
        <Rules />
        <Table>
            <TableBody>
                <TableRow selectable={false}>
                    <TableRowColumn>Cell Rows</TableRowColumn>
                    <TableRowColumn>
                        <Slider min={2} max={80} step={1} value={props.rows} onChange={props.rowsChange}/>
                    </TableRowColumn>
                </TableRow>
                <TableRow selectable={false}>
                    <TableRowColumn>Cell Columns</TableRowColumn>
                    <TableRowColumn>
                        <Slider min={2} max={40} step={1} value={props.columns} onChange={props.columnsChange}/>
                    </TableRowColumn>
                </TableRow>
                <TableRow selectable={false}>
                    <TableRowColumn>Cell Size</TableRowColumn>
                    <TableRowColumn>
                        <Slider min={1} max={30} step={1} value={props.size} onChange={props.sizeChange}/>
                    </TableRowColumn>
                </TableRow>
                <TableRow selectable={false}> 
                    <TableRowColumn>
                        <TextField value={props.duration} onChange={props.changeDuration} floatingLabelText='duration in ms'/>
                    </TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    </Drawer>
)
export default ControllPanel;