import React from "react";

export function FavoritesIndex({ favorites }) {
  if (!favorites || favorites.length === 0) {
    return <div>No favorites to display.</div>;
  }

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>
    </div>
  );
}
