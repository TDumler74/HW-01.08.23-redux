import React from 'react';

export default function MovieCreation(): JSX.Element {
  return (
    <div>
      <form>
        <input type="text" placeholder="title" />
        <select name="genre">
          <option value="horror">horror</option>
          <option value="documentary">documentare</option>
          <option value="action">action</option>
          <option value="comedy">comedy</option>
          <option value="fantasy">fantasy</option>
        </select>
        <input type="text" placeholder="country" />
        <input type="date" />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}