import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="">
        <h2 className="mx-5">{info.name}</h2>
        <p className="mx-5">{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="mx-3 border-double border-2 border-blue-500 rounded-2xl hover:bg-blue-600 px-2.5"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="mx-5 ">{total ? total : ""}</h3>
        <button className="mx-3 border-double border-2 border-blue-500 rounded-2xl hover:bg-blue-600 px-2" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
