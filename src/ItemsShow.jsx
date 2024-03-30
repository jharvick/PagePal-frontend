export function ItemsShow(props) {
  return (
    <div>
      <h1>Item information</h1>
      <p>Name: {props.item.name}</p>
      <img src={props.item.image_url} alt={props.item.name} />
      <p>Description: {props.item.description}</p>
      <p>Category: {props.item.category}</p>
    </div>
  );
}
