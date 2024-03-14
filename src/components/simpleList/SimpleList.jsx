/* eslint-disable react/prop-types */
import { loremIpsum } from "lorem-ipsum";

const SimpleRow = ({ item }) => {
  return (
    <div key={item.id} className="row">
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <div className="content">
        <div>{item.name}</div>
        <div>{item.text}</div>
      </div>
    </div>
  );
};
const SimpleList = () => {
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
          sentenceUpperBound: 8,
        }),
      };
    });
  return (
    <div className="App">
      <div className="list">
        {list.map((item, idx) => (
          <SimpleRow item={item} key={idx} />
        ))}
        100
      </div>
    </div>
  );
};

export default SimpleList;
