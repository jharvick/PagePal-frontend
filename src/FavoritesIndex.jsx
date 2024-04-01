export function FavoritesIndex(props) {
  return (
    <div>
      <h1>Favorites page coming soon!</h1>
      <img src="https://www.fg-a.com/under-construction/under-construction-night.gif" width="500px" />
      {props.favorites.map((favorite) => (
        <div key={favorite.id}></div>
      ))}
    </div>
  );
}
