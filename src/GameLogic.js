function getNeibours(cells, x, y) {
    const rowLength = cells.length;
    const columnLength = cells[0].length;
    const rowAbove = x - 1;
    const rowBelow = x + 1;
    const columnLeft = y - 1;
    const columnRight = y + 1;

    const top = rowAbove >= 0 ? cells[rowAbove][y] : 0;
    const topRight = (rowAbove >= 0 && columnRight <= rowLength-1) ? cells[rowAbove][columnRight] : 0;
    const right = columnRight <= columnLength-1 ? cells[x][columnRight] : 0;
    const rightBottom = (columnRight <= columnLength-1 && rowBelow <= rowLength-1) ? cells[rowBelow][columnRight] : 0;
    const bottom = rowBelow <= rowLength-1 ? cells[rowBelow][y] : 0;
    const bottomLeft = (rowBelow <= rowLength-1 && columnLeft >= 0) ? cells[rowBelow][columnLeft] : 0;
    const left = columnLeft >= 0 ? cells[x][columnLeft] : 0;
    const topLeft = (rowAbove >= 0 && columnLeft >= 0) ? cells[rowAbove][columnLeft] : 0;

    return [top, topRight, right, rightBottom, bottom, bottomLeft, left, topLeft];
}
function getNewState(cells, x, y) {
    const aliveCellsCount = getNeibours(cells, x, y).reduce((sum, cell) => sum + cell, 0);
    const currentState = cells[x][y];

    if (currentState === 1 && (aliveCellsCount < 2 || aliveCellsCount > 3)) {
        return 0;
    }
    else if (currentState === 1 && (aliveCellsCount === 2 || aliveCellsCount === 3)) {
        return 1;
    }
    else if (currentState === 0 && aliveCellsCount === 3) {
        return 1;
    }
    else {
        return 0;
    }
}
function getNextScene(cells) {
    const newCells = [];
    cells.map((rows, x) => {
        const newRows = [];
        rows.map((cell, y) => {
            newRows.push(getNewState(cells, x, y));
        });
        newCells.push(newRows);
    });
    return newCells;
}
export default getNextScene;