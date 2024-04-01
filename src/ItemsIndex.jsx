import { useState } from "react";

export function ItemsIndex({ items, onShowItem, onDestroyItem }) {
  return (
    <div>
      <h1>Reading list</h1>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-sm-4 mb-4">
            <div className="card" className="card text-dark bg-secondary mb-3">
              <img className="card-img-top" src={item.image_url} alt="Card image cap" />
              <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-text">Genre: {item.category}</p>
                <p className="card-text">Description: {item.description}</p>
                <button type="button" className="btn btn-outline-dark" onClick={() => onDestroyItem(item)}>
                  Mark as read
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
