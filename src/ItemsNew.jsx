export function ItemsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateItem(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="name" type="text" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Category: <input name="category" type="text" />
        </div>
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
}
