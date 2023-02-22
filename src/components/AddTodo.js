import { Formik } from "formik";
import { createTodo } from "./../services/service";
import { todoItems } from "./todoItems";

const AddTodo = () => {
  const handleSubmit = async (values) => {
    const newTodo = await createTodo(values);
   
    window.location.reload(false);
  };
// gerg
  return (
    <>
      <div className="container bg-white  w-80 rounded-lg  ml-20 mt-8 p-12  absolute">
        <h1 className="text-lg">
          What do you Have <span className="text-violet-800 ">TODO</span>
        </h1>
        <Formik initialValues={todoItems} onSubmit={handleSubmit}>
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  className="h-4 p-4 bg-zinc-300 mt-4 rounded-lg"
                  type="text"
                  name="title"
                  placeholder="title"
                  {...formik.getFieldProps("title")}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <input
                  className="pb-40 p-4 mt-2 left-0 top-0 relative text-start overflow-hidden rounded-lg bg-zinc-300"
                  type="text"
                  {...formik.getFieldProps("description")}
                  onChange={formik.handleChange}
                  name="description"
                  placeholder="Description"
                />{" "}
              </div>
              <div className="flex">
                <input
                  className="w-32 felx-1  rounded-lg p-1 mt-8 ml-0 mr-4 bg-zinc-300"
                  type="date"
                  name="date"
                  {...formik.getFieldProps("date")}
                  onChange={formik.handleChange}
                />
                <input
                  type="submit"
                  className=" w-12 p-1 mt-8 flex-1 bg-violet-600 rounded-lg"
                  onSubmit={handleSubmit}
                  value="Add"
                />
              </div>

              {/* <button onClick={handleDelete}>delete</button> */}
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddTodo;
