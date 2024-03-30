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

  const handleUpdateItem = (id, params, successCallback) => {
    console.log("handleUpdateItem", params);
    axios.patch(`http://localhost:3000/items/${id}.json`, params).then((response) => {
      setItems(
        items.map((item) => {
          if (item.id === response.data.id) {
            return response.data;
          } else {
            return item;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyItem = (item) => {
    console.log("handleDestroyItem - Item:", item); // Log item object for debugging
    console.log("Type of id:", typeof item.id); // Log type of id property for debugging

    if (item && item.id) {
      axios
        .delete(`http://localhost:3000/items/${item.id}.json`)
        .then((response) => {
          console.log("Delete response:", response); // Log response for debugging
          setItems(items.filter((p) => p.id !== item.id));
          handleClose();
        })
        .catch((error) => {
          console.error("Delete error:", error); // Log error for debugging
          // Handle error
        });
    } else {
      console.error("Invalid item:", item); // Log invalid item for debugging
    }
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
        <ItemsShow item={currentItem} onUpdateItem={handleUpdateItem} onDestroyItem={handleDestroyItem} />
      </Modal>
    </div>
  );
}
