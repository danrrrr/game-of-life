import React from 'react';
import _ from 'lodash';
import MyAppBar from './AppBar';
import ControllPanel from './ControllPanel';
import GameBoard from './GameBoard';
import Footer from './Footer';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showControllPanel: true
        };
    }
    updateControllPanelState() {
        this.setState({
            showControllPanel: !this.state.showControllPanel
        })
    }
    // <ControllPanel />
    //             <GameBoard />
    //             <Footer />
    render() {
        return (
            <div>
                <MyAppBar displayControllPanelState={() => this.updateControllPanelState()}/>
                
            </div>
        );
    }
}

export default App;