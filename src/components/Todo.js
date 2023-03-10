import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDoneTodos, deleteTodo } from "../services/service";
import { fetchDoneTodos } from "../slices/donetodosSlice";
import { fetchTodos } from "./../slices/todoListSlice";
import { getDoneTodos, deleteDoneTodo } from './../services/service';
const Todo = ({ todoId }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) =>
    state.todos.todoList.find((todo) => {
      return todo.id === todoId;
    })
  );
  
  useEffect(() => {
    if (!todo) {
      dispatch(fetchTodos());
      dispatch(fetchDoneTodos())
    }
  }, [todo]);

  const [isActive, setIsActive] = useState(false);
  const handleFlag = async (values) => {
    setIsActive((current) => !current);
    const newTodo = await createDoneTodos(values);
    const deletedTodo = await deleteTodo(todoId);
  
  };
  

   

  

  return (
  
    <>
      <div>
        <div
          className={
            !isActive
              ? "text-start border-4 border-indigo-200 border-r-indigo-400 border-b-indigo-400 bg-zinc-300 w-9/12 inline-block mb-1 mt-4 p-0 rounded-lg"
              : "text-start border-4 border-indigo-200 border-r-indigo-400 border-b-indigo-400 bg-zinc-300 w-9/12 inline-block mb-1 mt-4 p-0 rounded-lg border-t-green-300 border-l-green-300"
          }
        >
          <div>
            <h1 className="text-3xl pl-4 ">
              {todo.title ? (
                todo.title
              ) : (
                <h1 className="text-zinc-500">no title</h1>
              )}
            </h1>
            <p className="pl-4 ">
              {todo.description ? (
                todo.description
              ) : (
                <h1 className="text-zinc-500">no description</h1>
              )}
            </p>
            <p className="pl-4 pt-4 pb-2">
              {todo.date ? todo.date : <p className="text-zinc-500">no date</p>}
            </p>
          </div>
          <Formik
            initialValues={{
              "title": todo.title,
              "description": todo.description,
              "date": todo.date,
              "id": todo.id
            }}
            onSubmit={handleFlag}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <button type="submit" onSubmit={handleFlag}>
                  <div className="w-8 h-8 rounded-full mt-[-100px] bg-white absolute right-[380px]">
                    <i
                      className={
                        isActive
                          ? "fa fa-check  text-green-500 text-3xl"
                          : "fa fa-check  text-green-500 text-3xl flag-active"
                      }
                      id="flag"
                      aria-hidden="true"
          
                    ></i>
                  </div>
                </button>
              </form>
            )}
           
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Todo;
