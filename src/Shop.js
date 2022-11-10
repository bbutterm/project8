import React, { useState, useEffect } from "react";
import Item from "./Item.js";

export default function Shop() {
  const api = "https://covid-shop-mcs.herokuapp.com/";
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(api);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finished");
      }
    })();
  }, []);
  if (data) {
    return (
      <div className="shop">
        <ul>
          {data.map((item) => {
            return (
              <li key={item.id}>
                <Item info={item} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return <div className="shop"></div>;
}
