export const Materials = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(({ id, title, link }) => (
        <li key={id}>
          <p>Название: {title}</p>
          <p>Ссылка: {link}</p>
          <button type="button" onClick={() => onDelete(id)}>
            Удалить{' '}
          </button>
        </li>
      ))}
    </ul>
  );
};
