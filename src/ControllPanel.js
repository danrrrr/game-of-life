import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Rules from './Rules';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
const ControllPanel = (props) => (
    <Drawer width={400} openSecondary={true} open={props.showControllPanel}>
        <Rules />
        <Table>
            <TableBody>
                <TableRow selectable={false}>
                    <TableRowColumn>Cell Rows</TableRowColumn>
                    <TableRowColumn>
                        <Slider min={2} max={40} step={1} value={props.rows} onChange={(event, value) => props.rowsChange(value)}/>
                    </TableRowColumn>
                </TableRow>
                <TableRow selectable={false}>
                    <TableRowColumn>Cell Columns</TableRowColumn>
                    <TableRowColumn>
                        <Slider min={2} max={40} step={1} value={props.columns} onChange={(event, value) => props.columnsChange(value)}/>
                    </TableRowColumn>
                </TableRow>
                <TableRow selectable={false}>
                    <TableRowColumn>
                        <RaisedButton label="START" secondary={true}/>
                    </TableRowColumn>
                    <TableRowColumn>
                        <RaisedButton label="Stop" secondary={true}/>
                    </TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    </Drawer>
)
export default ControllPanel;