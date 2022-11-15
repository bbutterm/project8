import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleMoreClick() {
    setTotal(total + 1);
  }

  function handleLessClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="flex items-center">
      <img className="center"src={info.image} alt={info.name} />
      <div className="bg-orange-500 mx-3 px-2 border-solid rounded-2xl">
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="bg-blue-500 mx-3 px-2 border-solid rounded-2xl"
          disabled={total === 0}
          onClick={handleLessClick}
        >
          –
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button className="bg-blue-500 mx-3 px-2 border-solid rounded-2xl" onClick={handleMoreClick}>
          +
        </button>
      </div>
    </div>
  );
}
