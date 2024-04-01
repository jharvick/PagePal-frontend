import axios from "axios";
import { useState, useEffect } from "react";

export function ItemsNew(props) {
  const [searchTerms, setSearchTerms] = useState("");
  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateItem(params, () => event.target.reset());
    window.location.href = "/items";
  };

  const handleIndexBooks = () => {
    axios.get("http://localhost:3000/books.json?search_terms=" + searchTerms).then((response) => {
      console.log("handleIndexBooks", response.data);
      setBooks(response.data);
    });
  };

  const handleSelect = (book) => {
    console.log(book);
    setName(book.volumeInfo.title);
    setImage(book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""); // Use thumbnail for a smaller image
    setCategory(book.volumeInfo.categories ? book.volumeInfo.categories[0] : "Unknown Category"); // Use the first category if available, otherwise set as "Unknown Category"
    setDescription(book.volumeInfo.description);
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>What to read?</h1>
          <div>
            Search: <input value={searchTerms} onChange={(event) => setSearchTerms(event.target.value)} type="text" />
            <button onClick={handleIndexBooks}>Submit!</button>
          </div>
          <div>
            {books.map((book) => (
              <div key={book.id}>
                <h2>{book.volumeInfo?.title}</h2>
                <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="" width="200" />
                <p>{book.volumeInfo?.categories ? book.volumeInfo.categories[0] : "Unknown Category"}</p>
                <p>{book.volumeInfo?.publishedDate}</p> {/* This could be the year of publication */}
                <button onClick={() => handleSelect(book)}>Select</button>
              </div>
            ))}
          </div>
        </div>
        <div className="col">
          <h1>New watch</h1>
          <form onSubmit={handleSubmit}>
            <div>
              Name: <input value={name} onChange={(event) => setName(event.target.value)} name="name" type="text" />
            </div>
            <div>
              Image:{" "}
              <input value={image} onChange={(event) => setImage(event.target.value)} name="image_url" type="text" />
            </div>
            <div>
              Category:{" "}
              <input
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                name="category"
                type="text"
              />
            </div>
            <div>
              Description:{" "}
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                name="description"
              />
            </div>
            <button type="submit">Add book</button>
          </form>
        </div>
      </div>
    </div>
  );
}
