export function ItemsIndex(props) {
  return (
    <div>
      <h1>PagePal</h1>
      {props.items.map((item) => (
        <div key={item.id}>
          <h2>Title: {item.name}</h2>
          <img src={item.image_url} alt={item.name} />
          <div>
            <button onClick={() => props.onShowItem(item)}>More info</button>
          </div>
        </div>
      ))}
    </div>
  );
}
