import React from 'react';
import _ from 'lodash';
import MyAppBar from './AppBar';
import ControllPanel from './ControllPanel';
import GameBoard from './GameBoard';
import Footer from './Footer';
import NextScene from './GameLogic';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: [[0,0,0],[0,0,0],[0,0,0]],
            size: 20,
            margin:1,
            showControllPanel: false,
            inProgress: false
        };
    }
    updateControllPanelState() {
        this.setState({
            showControllPanel: !this.state.showControllPanel
        });
    }
    updateCellState(x, y) {
        if(this.state.inProgress) {
            return ;
        }
        const currentCellState = this.state.cells[x][y];
        let newCells = [];
        this.state.cells.map((row) => {
            newCells = _.concat(newCells, [[...row]]);
        });
        newCells[x][y] = currentCellState === 0 ? 1 : 0;
        this.setState({
            cells: newCells
        });
    }
    handleCellRowsChange(value) {
        this.setState({//使用[0,0,0]填充数组
			cells: _.fill(Array(value), [...this.state.cells[0]])
        });
    }
    handleCellColumnsChange(value) {
        this.setState({
            cells: _.fill(Array(this.state.cells.length), _.fill(Array(value), 0))
        })
    }
    start() {
        const newCells = NextScene(this.state.cells);
        this.setState({
            cells: newCells
        })
    }
    // <Footer />
    render() {
        return (
            <div>
                <MyAppBar displayControllPanelState={() => this.updateControllPanelState()}/>
                <ControllPanel showControllPanel={this.state.showControllPanel} 
                    rows={this.state.cells.length} columns={this.state.cells[0].length}
                    rowsChange={(value) => this.handleCellRowsChange(value)}
                    columnsChange={(value) => this.handleCellColumnsChange(value)}
                    start={() => this.start()}/>
                <GameBoard cells={this.state.cells} size={this.state.size}
                    margin={this.state.margin} updateCellState={(x, y) => this.updateCellState(x, y)}/>
            </div>
        );
    }
}

export default App;