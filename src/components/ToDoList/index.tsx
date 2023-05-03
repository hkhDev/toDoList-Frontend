import { useState, useEffect } from "react";
import axios from "axios";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import "./index.scss";

interface IToDoItem {
  id: number;
  name: string;
  done_status: number;
  delete_status: number;
  created_time: string;
}

function ToDoList() {
  const [items, setItems] = useState<IToDoItem[]>([]);
  const [itemsReload, setItemsReload] = useState<boolean>(false);

  // function addItem(inputText: string) {
  //   setItems((prevItems) => {
  //     return [...prevItems, inputText];
  //     // add new item to the previous item array
  //   });
  // }

  function handleDelete(id: number) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
        // delete the item that match the id
      });
    });
  }

  const itemRolad = () => {
    setItemsReload(true);
  };

  useEffect(() => {
    axios
      .get("/allitems")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setItemsReload(false);
  }, [itemsReload]);

  return (
    <div className="todo-body">
      <div className="todo-content">
        <div className="todo-heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea itemRolad={itemRolad} />
        <div>
          <ul>
            {items.length > 0 &&
              items
                .filter((it) => it.delete_status === 0)
                .map((item, index) => (
                  <ToDoItem
                    key={index}
                    id={item.id}
                    text={item.name}
                    done_status={item.done_status}
                    itemRolad={itemRolad}
                  />
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
