import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/taskSlice";
import "./Form.css";

const From = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      task: "",
      status: 0,
    },
  });
  const onSubmit = (data) => {
    const newData = {
      ...data,
      id: task.length + 1,
    };
    dispatch(add(newData));
  };
  return (
    <>
      <div className="wrapper">
        <h2>Todo Board</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
          <div className="title">
            <label>Title</label>
            <input
              type="text"
              name="title"
              {...register("title", { required: true })}
            />
            {errors.title && <span className="error">Title is required</span>}
          </div>
          <div className="task">
            <label>Description</label>
            <input type="text" {...register("task", { required: true })} />
            {errors.task && (
              <span className="error"> This field is required</span>
            )}
          </div>

          <div className="submit">
            <button>Add</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default From;
