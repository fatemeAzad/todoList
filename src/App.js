import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Todo from "./components/Todo";
import store from "./store/store";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
const router = createBrowserRouter([{ path: "/", element: <TodoList/> }]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
