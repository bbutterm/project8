import React from "react";

export default function AddItem(props) {
  return (
    <form className="bg-blue-100" onSubmit={props.onFormSubmit}>
      <div>
        <label className="mx-3 px-2" htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="mx-3 border-solid border-2 border-black rounded-2xl px-2"
        />
      </div>
      <div>
        <label className="mx-3 px-2" htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="mx-3 border-solid border-2 border-black rounded-2xl px-2"
        />
      </div>
      <div className="form-footer">
        <div className="mx-3 px-2">{props.valid}</div>
        <input type="submit" 
        className="mx-3 border-double border-2 border-blue-500 rounded-2xl hover:bg-blue-600 px-2" value="Добавить" />
      </div>
    </form>
  );
}
