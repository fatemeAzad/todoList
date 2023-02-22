import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./../slices/todoListSlice";
const TodayTodos = () => {
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!todos) {
      dispatch(fetchTodos());
    
    }
  }, [todos]);
  const getCurrentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`;
  };
  const todaysDate = getCurrentDate();

  
  ;
  
  
  return (
    <>
      <div className="container bg-white p-12 pt-2 w-80 rounded-lg  ml-20 mt-[500px]  h-max absolute  ">
        <h1 className="text-gray-500 pt-0">tasks for today</h1>
        <div > 

          {todos.map((todo) => {
           if (todo.date === todaysDate) 
           return <div className="border-4 border-indigo-200 border-double border-r-indigo-400 border-b-indigo-400 bg-zinc-300 inline-block mb-1 mt-4 p-4 w-11/12 rounded-lg text-start">
           <span>{todo.description}</span></div>
         
          
            
          })}
       
        </div>
      </div>
    </>
  );
};

export default TodayTodos;
