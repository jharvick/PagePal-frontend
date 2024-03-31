export function FavoritesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Completed Read</h1>
      <form onSubmit={handleSubmit}>
        <div>
          User id: <input id="user_id" type="text" />
        </div>
        <div>
          Item id: <input id="item_id" type="text" />
        </div>
        <button type="submit">Mark as Read</button>
      </form>
    </div>
  );
}
