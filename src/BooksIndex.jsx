export function BooksIndex(props) {
  return (
    <div>
      <h1>What to read?</h1>
      {props.books.map((book) => (
        <div key={book.imdbID}>
          <h2>{book.Title}</h2>
          <img src={book.Poster} alt="" width="200" />
          <p>{book.Type}</p>
          <p>{book.Year}</p>
        </div>
      ))}
    </div>
  );
}
