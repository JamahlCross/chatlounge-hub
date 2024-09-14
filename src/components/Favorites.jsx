import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (item) => {
    setFavorites(favorites.filter(fav => fav !== item));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      <ul>
        {favorites.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{item}</span>
            <Button variant="outline" size="sm" onClick={() => removeFromFavorites(item)}>Remove</Button>
          </li>
        ))}
      </ul>
      <Button onClick={() => addToFavorites('New Item')}>Add to Favorites</Button>
    </div>
  );
};

export default Favorites;