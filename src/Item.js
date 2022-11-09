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
    <div className='mx-10'>
      <div className="">
        <h2 className="border w-min px-5 bg-blue-300 rounded-lg">{info.name}</h2>
        <p className="border w-min px-5 bg-blue-300 rounded-lg" >{info.desc}</p>
      </div>
      <div className="w-min px-5">
        <button
          className="px-3 border rounded-full bg-slate-500"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="px-3 border rounded-full bg-red-300">{total ? total : ""}</h3>
        <button className="px-3 border rounded-full bg-slate-500" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
