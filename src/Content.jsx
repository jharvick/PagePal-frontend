import axios from "axios";
import { useState, useEffect } from "react";
import { ItemsIndex } from "./ItemsIndex";
import { ItemsNew } from "./ItemsNew";
import { ItemsShow } from "./ItemsShow";
import { BooksIndex } from "./BooksIndex";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { FavoritesIndex } from "./FavoritesIndex";
import { FavoritesNew } from "./FavoritesNew";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [items, setItems] = useState([]);
  const [isItemsShowVisible, setIsItemsShowVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [destroyedItems, setDestroyedItems] = useState([]);

  const handleIndexItems = () => {
    console.log("handleIndexItems");
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  const handleCreateItem = (params, successCallback) => {
    console.log("handleCreateItem", params);
    axios.post("http://localhost:3000/items.json", params).then((response) => {
      setItems([...items, response.data]);
      successCallback();
    });
  };

  const handleCreateFavorite = (params, successCallback) => {
    console.log("handleCreateFavorite", params);
    const authToken = localStorage.getItem("authToken"); // Get the authentication token from local storage
    const headers = { Authorization: `Bearer ${authToken}` }; // Include the token in the request headers

    axios.post("http://localhost:3000/favorites.json", params, { headers }).then((response) => {
      setFavorites([...favorites, response.data]);
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

  const handleIndexDestroyedItems = () => {
    console.log("handleIndexDestroyedItems");
    axios.get("http://localhost:3000/destroyed_items.json").then((response) => {
      console.log(response.data);
      setDestroyedItems(response.data);
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
          // Add the destroyed item to favorites
          axios
            .post("http://localhost:3000/favorites.json", { user_id: item.user_id, item_id: item.id })
            .then((favoriteResponse) => {
              console.log("Add to favorites response:", favoriteResponse); // Log response for debugging
              setFavorites([...favorites, favoriteResponse.data]);
            })
            .catch((error) => {
              console.error("Add to favorites error:", error); // Log error for debugging
              // Handle error
            });

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
  useEffect(handleIndexFavorites, []);
  useEffect(() => {
    handleIndexDestroyedItems();
  }, []);

  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 style={{ fontSize: "5em" }}>Welcome to PagePal!</h1>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<BooksIndex books={[]} />} />
          <Route path="/items/new" element={<ItemsNew onCreateItem={handleCreateItem} />} />
          <Route path="/favorites/new" element={<FavoritesNew onCreateFavorite={handleCreateFavorite} />} />
          <Route path="/favorites" element={<FavoritesIndex favorites={favorites} />} />
          <Route
            path="/items"
            element={<ItemsIndex items={items} onShowItem={handleShowItem} onDestroyItem={handleDestroyItem} />}
          />
        </Routes>

        <Modal show={isItemsShowVisible} onClose={handleClose}>
          <ItemsShow item={currentItem} onUpdateItem={handleUpdateItem} onDestroyItem={handleDestroyItem} />
        </Modal>
      </div>
    </div>
  );
}
