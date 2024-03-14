import { List, AutoSizer } from "react-virtualized/dist/umd/react-virtualized";
import { loremIpsum } from "lorem-ipsum";

const rowCount = 5000;
const listHeight = 400;
const rowHeight = 50;
const rowWidth = 700;

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
        sentenceUpperBound: 8,
      }),
    };
  });

function renderRow({ index, key, style }) {
  return (
    <div key={key} style={style} className="row">
      <div className="image">
        <img src={list[index].image} alt="" />
      </div>
      <div className="content">
        <div>{list[index].name}</div>
        <div>{list[index].text}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="App">
      {/* <div className="list">
        <List
          width={rowWidth}
          height={listHeight}
          rowHeight={rowHeight}
          rowRenderer={renderRow}
          rowCount={list.length}
          overscanRowCount={3}
        />
      </div> */}
      <div className="autosizer-list">
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={rowHeight}
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
