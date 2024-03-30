import axios from "axios";
import { useState, useEffect } from "react";
import { ItemsIndex } from "./ItemsIndex";

export function Content() {
  const [items, setItems] = useState([]);

  const handleIndexItems = () => {
    console.log("handleIndexItems");
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  useEffect(handleIndexItems, []);

  return (
    <div>
      <ItemsIndex items={items} />
    </div>
  );
}
