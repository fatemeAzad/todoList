import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./../slices/todoListSlice";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
const TodoList = () => {
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <>
      <div>
        <AddTodo />
        <div className="  bg-white w-7/12 inline-block ml-80 mt-8 mb-8 rounded-lg ">

          <h3 className="text-violet-800 text-3xl inline-block mt-2">TODO</h3>
          {" "}
          <span className="text-lg">List</span>
        
          {todos.map((todo) => (
            <Todo todoId={todo.id} key={todo.id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
