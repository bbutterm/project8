import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label className="mx-2 bg-blue-300 rounded-full px-3" htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="mx-2 bg-slate-500 rounded-full px-3"
        />
      </div>
      <div>
        <label className="mx-2 bg-blue-300 rounded-full px-3" htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="mx-2 bg-slate-500 rounded-full px-3"
        />
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid}</div>
        <input type="submit" className="mx-2 mt-2 px-3 bg-blue-500 rounded-md" value="Добавить" />
      </div>
    </form>
  );
}
