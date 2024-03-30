export function ItemsIndex(props) {
  return (
    <div>
      <h1>All items</h1>
      {props.items.map((item) => (
        <div key={item.name}>
          <h2>Title: {item.name}</h2>
          <img src={item.image_url} alt={item.name} />
          <p>Description: {item.description}</p>
          <p>Category: {item.category}</p>
          <button onClick={() => props.onShowItem(item)}>More info</button>
        </div>
      ))}
    </div>
  );
}
