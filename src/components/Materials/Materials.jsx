import { useContext } from 'react';
import ctx from 'context/authContext.js';

export const Materials = ({ items, onDelete, onUpdate }) => {
  const authContext = useContext(ctx);
  console.log(authContext);
  return (
    <ul>
      {items.map(({ id, title, link }) => (
        <li key={id}>
          <p>Название: {title}</p>
          <p>Ссылка: {link}</p>
          <button type="button" onClick={() => onDelete(id)}>
            Удалить{' '}
          </button>
          <button
            type="button"
            onClick={() => onUpdate({ id, title: Date.now() })}
          >
            Редактировать
          </button>
        </li>
      ))}
    </ul>
  );
};
