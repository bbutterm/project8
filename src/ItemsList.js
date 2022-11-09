import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="">
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <button
            className="mx-10 bg-red-500 rounded-3xl px-3"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
