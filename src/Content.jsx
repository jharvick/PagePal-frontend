import axios from "axios";
import { useState, useEffect } from "react";
import { ItemsIndex } from "./ItemsIndex";
import { ItemsNew } from "./ItemsNew";
import { ItemsShow } from "./ItemsShow";
import { Modal } from "./Modal";

export function Content() {
  const [items, setItems] = useState([]);
  const [isItemsShowVisible, setIsItemsShowVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const handleIndexItems = () => {
    console.log("handleIndexItems");
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  const handleCreateItem = (params, successCallback) => {
    console.log("handleCreateItem", params);
    axios.post("http://localhost:3000/items.json", params).then((response) => {
      setItems([...items, response.data]);
      successCallback();
    });
  };

  const handleShowItem = (item) => {
    console.log("handleShowItem", item);
    setIsItemsShowVisible(true);
    setCurrentItem(item);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsItemsShowVisible(false);
  };

  useEffect(handleIndexItems, []);

  return (
    <div>
      <ItemsNew onCreateItem={handleCreateItem} />
      <ItemsIndex items={items} onShowItem={handleShowItem} />
      <Modal show={isItemsShowVisible} onClose={handleClose}>
        <ItemsShow item={currentItem} />
      </Modal>
    </div>
  );
}
