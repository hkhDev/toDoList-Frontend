import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface IProp {
  text: string;
  id: number;
  done_status: number;
  itemRolad: () => void;
}

function ToDoItem(props: IProp) {
  const [checked, setChecked] = useState<boolean>(false);

  const checkedItem = (id: number, status: number) => {
    axios
      .post("/checkitem", { id, done_status: status })
      .then((res) => {
        console.log(res.data);
        props.itemRolad();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleDelete = (id: number) => {
    axios
      .post("/deleteitem", { id })
      .then((res) => {
        console.log(res.data);
        props.itemRolad();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <li className="todo-li">
        <span
          onClick={() => checkedItem(props.id, props.done_status)}
          className={props.done_status === 1 ? "todo-crossItem" : ""}
        >
          {props.text}
        </span>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            handleDelete(props.id);
          }}
          className="todo-img"
        />
      </li>
    </div>
  );
}

export default ToDoItem;
