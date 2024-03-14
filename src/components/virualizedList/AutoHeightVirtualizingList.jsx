// Calculating the height of a row automatically

import { loremIpsum } from "lorem-ipsum";
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized/dist/umd/react-virtualized";

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 100,
});

const rowCount = 5000;

const list = Array(rowCount)
  .fill()
  .map((val, idx) => {
    return {
      id: idx,
      name: "John Doe",
      image: "http://via.placeholder.com/40",
      text: loremIpsum({
        count: 1,
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 180,
      }),
    };
  });

function renderRow({ index, key, style, parent }) {
  return (
    <CellMeasurer key={key} cache={cache} parent={parent} columnIndex={0} rowIndex={index}>
      {({ registerChild }) => (
        <div style={style} className="row" ref={registerChild}>
          <div className="image">
            <img src={list[index].image} alt="" />
          </div>
          <div className="content">
            <div>{list[index].name}</div>
            <div>{list[index].text}</div>
          </div>
        </div>
      )}
    </CellMeasurer>
  );
}

export default function AutoRowHeight() {
  return (
    <div className="App">
      <div className="autosizer-list">
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={cache.rowHeight}
              deferredMeasurementCache={cache}
              rowRenderer={renderRow}
              rowCount={list.length}
              overscanRowCount={3}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}
