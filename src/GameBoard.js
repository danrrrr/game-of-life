import React from 'react';
import Paper from 'material-ui/Paper';

const GameBoard = (props) => (
    <div>
        {props.cells.map((row, x) => (
            <div key={x}>
                {row.map((cell, y) => {
                    const styles = {width: props.size,height: props.size,
                        margin:props.margin, display: 'inline-block', background: cell === 0 ? 'white' : 'black'};
                    return (<Paper key={`${x}${y}`} style={styles} circle={true}
                        onClick={() => props.updateCellState(x, y)}/>);
                })
                }
            </div>
        ))}
    </div>
)

export default GameBoard;