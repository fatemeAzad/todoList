import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./../slices/todoListSlice";
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
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
          <h3 className="text-violet-800 text-3xl inline-block mt-2">TODO</h3>{" "}
          <span className="text-lg">List</span>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <>
                <Todo todoId={todo.id} key={todo.id} />
                <DeleteTodo todoId={todo.id} key={todo.id} />
              </>
            ))
          ) : (
            <>
             
                <p className="text-3xl  mt-40 mb-40 text-violet-800 ">
                  YOU
                  <span className="text-violet-400 ml-1">
                    HAVE
                    <span className="text-cyan-500 ml-1">
                      DONE<span className="text-blue-800 ml-1">EVERYTHING</span>
                    </span>
                  </span>
                </p>
            
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoList;
