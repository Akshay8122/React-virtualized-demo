import React from "react";
import { loremIpsum } from "lorem-ipsum";
import { Grid, AutoSizer } from "react-virtualized/dist/umd/react-virtualized";

const columnCount = 100;
const rowCount = 1000;
const columnWidth = 400;
const rowHeight = 50;

const grid = Array(rowCount)
  .fill()
  .map((val, rowIndex) =>
    Array(columnCount)
      .fill()
      .map((val, columnIndex) => ({
        id: `${rowIndex}-${columnIndex}`,
        name: "John Doe",
        image: "http://via.placeholder.com/40",
        text: loremIpsum({
          count: 4,
          units: "word",
        }),
      })),
  );

function renderCell({ columnIndex, key, rowIndex, style }) {
  return (
    <div key={key} style={style} className="row">
      <div className="image">
        <img src={grid[rowIndex][columnIndex].image} alt="" />
      </div>
      <div className="content">
        <div>{grid[rowIndex][columnIndex].name}</div>
        <div>{grid[rowIndex][columnIndex].text}</div>
      </div>
    </div>
  );
}

function GridVirtualizedList() {
  return (
    <div className="App">
      <div className="grid-list">
        <AutoSizer>
          {({ width, height }) => (
            <Grid
              width={width}
              height={height}
              rowHeight={rowHeight}
              columnWidth={columnWidth}
              cellRenderer={renderCell}
              rowCount={grid.length}
              columnCount={grid[0].length}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default GridVirtualizedList;
