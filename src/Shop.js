import React, { useCallback, useEffect, useState } from "react";
import Item from "./Item.js";
import "./index.css";
import useFetch from "./useFetch.js";

export default function Shop() {
  const api = "https://covid-shop-mcs.herokuapp.com/";
  const [items, setItems] = useState([]);
  const { get, loader } = useFetch();

  useEffect(() => {
    get(api).then((data) => setItems(data));
  }, [get]);

  return (
    <div className="shop">
      {loader ? "грузим контент" : ""}
      {items ? items.map((item) => <Item key={item.id} info={item} />) : ""}
    </div>
  );
}
