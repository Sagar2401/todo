import React from "react";
import Form from "../Components/Form";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import Card from "../Components/Card";
import {
  changeTaskStatusPendingtoActive,
  changeTaskStatusActivetoDone,
} from "../store/taskSlice";

const TaskCard = ({ title, desc, onClick }) => {
  return (
    <div className="task-card" onClick={onClick}>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

const Home = () => {
  const task = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const pending = task.filter((item) => item.status === 0);
  const active = task.filter((item) => item.status === 1);
  const completed = task.filter((item) => item.status === 2);

  const handleMoveToDoing = (id) => {
    console.log("id", id);
    dispatch(changeTaskStatusPendingtoActive(id));
  };
  const handleMoveToDone = (id) => {
    console.log("id", id);
    dispatch(changeTaskStatusActivetoDone(id));
  };

  return (
    <div className="home-wrapper">
      <Form />
      <div className="box-wrapper">
        <Card mainclass={"todo"}>
          <Card.Header title="Pending" count={pending.length} />
          <Card.Body>
            {pending.map((item) => (
              <TaskCard
                key={item.id}
                title={item.title}
                desc={item.task}
                onClick={() => handleMoveToDoing(item.id)}
              />
            ))}
          </Card.Body>
        </Card>
        <Card mainclass={"doing"}>
          <Card.Header title="Pending" count={active.length} />
          <Card.Body>
            {active.map((item) => (
              <TaskCard
                key={item.id}
                title={item.title}
                desc={item.task}
                onClick={() => handleMoveToDone(item.id)}
              />
            ))}
          </Card.Body>
        </Card>
        <Card mainclass={"done"}>
          <Card.Header title="Pending" count={completed.length} />
          <Card.Body>
            {completed.map((item) => (
              <TaskCard key={item.id} title={item.title} desc={item.task} />
            ))}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
