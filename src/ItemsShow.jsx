export function ItemsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateItem(props.item.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    console.log("Clicked item:", props.item); // Log item object for debugging
    props.onDestroyItem(props.item);
  };

  return (
    <div>
      <h1>Item information</h1>
      <p>Name: {props.item.name}</p>
      <img src={props.item.image_url} alt={props.item.name} />
      <p>Description: {props.item.description}</p>
      <p>Category: {props.item.category}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.item.name} name="name" type="text" />
        </div>
        <div>
          Image URL: <input defaultValue={props.item.image_url} name="image_url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.item.description} name="description" type="text" />
        </div>
        <div>
          Category: <input defaultValue={props.item.category} name="category" type="text" />
        </div>
        <button type="submit">Update Item</button>
      </form>
      <button onClick={handleClick}>Destroy item</button>
    </div>
  );
}
