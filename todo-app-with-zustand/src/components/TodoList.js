import useStore from "../zustand/store";
import { useEffect } from "react";

function TodoList() {
    const isLoading = useStore((state) => state.isLoading);
    const todos = useStore((state) => (state.todos));
    const addTodos = useStore((state) => (state.addTodos));
    const toggleTodo = useStore((state) => (state.toggleTodo));
    const deleteTodos = useStore((state) => (state.deleteTodos))
    const fetchTodos = useStore((state) => (state.fetchTodos))

    useEffect((() => {
        fetchTodos()
    }), [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const text = event.target.elements.text.value;
        await addTodos(text);
        event.target.elements.text.value = '';
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="Add todo" />
                <button type="submit">Add</button>
            </form>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {todos.map((item, index) => (
                        <li>
                            <div key={index}
                                onClick={() => toggleTodo(index)}
                                style={{ textDecoration: item.done ? 'line-through' : 'none' }}
                            >
                                {item.todo}
                            </div>
                            <button onClick={() => { deleteTodos(item.id) }}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default TodoList;