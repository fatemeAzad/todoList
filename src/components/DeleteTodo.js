import { deleteTodo } from "../services/service";

const DeleteTodo = ({ todoId }) => {
  const handleDelete = async () => {
    const deletedTodo = await deleteTodo(todoId);
    window.location.reload(false);
   
  };
  return (
    <>
      <button onClick={handleDelete}>
        <div className="w-8 h-8 rounded-full mt-[-80px] bg-white absolute right-[380px]">
          <i class="fa fa-times text-red-600 text-2xl " aria-hidden="true"></i>
        </div>
      </button>
    </>
  );
};

export default DeleteTodo;
