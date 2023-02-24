import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    todos: [],
    isLoading: false,
    toggleTodo: (index) =>
        set((state) => ({
            todos: state.todos.map((todo, i) => (i === index ? { ...todo, done: !todo.done } : todo)),
        })),
    fetchTodos: async () => {
        set(() => ({ isLoading: true }));
        const res = await axios.get(`http://localhost:3000/todos`);
        set(() => ({ todos: res.data, isLoading: false }))
        console.log("before: ", res.data);
    },
    addTodos: async (text) => {
        const id = (Math.random() * 11);
        const res = await axios.post(`http://localhost:3000/todos`,
            {
                category: "LEARNING",
                dueDate: "2023-02-17",
                id,
                priority: "MEDIUM",
                status: "TO DO",
                todo: text
            });
        set((state) => ({ todos: [...state.todos, { id: id, todo: text }] }));
    },
    deleteTodos: async (id) => {
        const res = await axios.delete(`http://localhost:3000/todos/${id}`);
        set((state) => ({ todos: state.todos.filter((item) => item.id !== id) }))
        console.log(res);
    }
}));

export default useStore;
