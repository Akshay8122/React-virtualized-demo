import React, { useState, useEffect } from "react";
import { loremIpsum } from "lorem-ipsum";
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized/dist/umd/react-virtualized";
import styles from "./CollabesVirtualizedList.module.css";

const rowCount = 5000;

const list = Array(rowCount)
  .fill()
  .map((val, idx) => {
    return {
      id: idx,
      name: "John Doe",
      image: "http://via.placeholder.com/40",
      text: loremIpsum({
        count: 10,
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 8,
      }),
    };
  });

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 100,
});

// eslint-disable-next-line react/prop-types
function Collapsible({ children, title, onChange }) {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    onChange && onChange();
  }, [expanded, onChange]);
  return (
    <>
      <div className={styles.accordHeader} onClick={() => setExpanded(!expanded)}>
        {title}
      </div>
      {expanded && <>{children}</>}
    </>
  );
}

function renderRow({ index, key, style, parent }) {
  return (
    <CellMeasurer key={key} cache={cache} parent={parent} columnIndex={0} rowIndex={index}>
      {({ registerChild, measure }) => (
        <div style={style} className={styles.row} ref={registerChild}>
          <Collapsible title={list[index].name} onChange={measure}>
            <div className={styles.image}>
              <img src={list[index].image} alt="" />
            </div>
            <div className={styles.content}>
              <div>{list[index].name}</div>
              <div>{list[index].text}</div>
            </div>
          </Collapsible>
        </div>
      )}
    </CellMeasurer>
  );
}

function CollabesVirtualizedList() {
  return (
    <div className={styles.App}>
      <div className={styles.list}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              deferredMeasurementCache={cache}
              rowHeight={cache.rowHeight}
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

export default CollabesVirtualizedList;
