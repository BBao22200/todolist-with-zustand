import useStore from "../zustand/store";
import { useEffect } from "react";

import Input from "./Input";
import LoadingIndicator from "./LoadingIndicator";
import Todo from "./Todo";

function TodoList() {
  const { isLoading, todos, fetchTodos } = useStore();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <Input />
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className="todolist">
            <ul className="">
          {todos.map((item, index) => (
            <Todo item={item} index={index} />
          ))}
        </ul>
        </div>
      )}
    </div>
  );
}
export default TodoList;
