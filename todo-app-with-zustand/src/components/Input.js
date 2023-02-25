import useStore from "../zustand/store";

function Input() {
  const addTodos = useStore((state) => state.addTodos);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const text = event.target.elements.text.value;
    await addTodos(text);
    event.target.elements.text.value = "";
  };
  return (
    <div className="input">
      <h1>Todo List</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="Add todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default Input;
