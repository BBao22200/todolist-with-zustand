import useStore from "../zustand/store";

function Todo({index, item}) {
  const {deleteTodos, toggleTodo} = useStore();
  return (
    <li>
      <div
        key={index}
        onClick={() => toggleTodo(index)}
        style={{ textDecoration: item.done ? "line-through" : "none" }}
      >
        {item.todo}
      </div>
      <button
        onClick={() => {
          deleteTodos(item.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
export default Todo;
