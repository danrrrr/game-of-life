import React from 'react';
import _ from 'lodash';
import MyAppBar from './AppBar';
import ControllPanel from './ControllPanel';
import GameBoard from './GameBoard';
import NextScene from './GameLogic';
import Footer from './Footer';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: [],
            initSceneSize: 20,
            size: 20,
            margin:1,
            showControllPanel: false,
            inProgress: false,
            timer: null,
            duration: 1000,
        };
    }
    componentWillMount() {
        //初始化cells
        this.setState({
            cells: _.fill(Array(this.state.initSceneSize), _.fill(Array(this.state.initSceneSize), 0))
        })
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
        const _this = this;
        const timer = setInterval(function() {
            const newCells = NextScene(_this.state.cells);
            _this.setState({
            cells: newCells
        });
        }, this.state.duration);
        this.setState({
            timer: timer,
            inProgress: true
        })
        
    }
    stop() {
        clearInterval(this.state.timer);
        this.setState({
            inProgress: false
        })
    }
    clear() {
        clearInterval(this.state.timer);
        //清零
        const newCells = this.state.cells.map((row, x) => {
            return row.map((cell, y) => {
                return cell = 0;
            })
        })

        this.setState({
            inProgress: false,
            cells: newCells
        })
    }
    changeDuration(value) {
        this.setState({
            duration: value
        })
    }
    sizeChange(value) {
        this.setState({
            size: value
        })
    }
    render() {
        return (
            <div>
                <MyAppBar displayControllPanelState={() => this.updateControllPanelState()}/>
                <ControllPanel showControllPanel={this.state.showControllPanel} 
                    rows={this.state.cells.length} columns={this.state.cells[0].length}
                    rowsChange={(value) => this.handleCellRowsChange(value)}
                    columnsChange={(value) => this.handleCellColumnsChange(value)}
                    duration={this.state.duration} changeDuration={(event, value) => this.changeDuration(value)}
                    size={this.state.size} sizeChange={(event,value) => this.sizeChange(value)}/>
                <GameBoard cells={this.state.cells} size={this.state.size}
                    margin={this.state.margin} updateCellState={(x, y) => this.updateCellState(x, y)}/>
                <Footer className='footer' start={() => this.start()} stop={() => this.stop()} clear={() => this.clear()}/>
            </div>
        );
    }
}

export default App;