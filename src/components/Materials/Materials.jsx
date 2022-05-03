export const Materials = ({ items, onDelete, onUpdate }) => {
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
