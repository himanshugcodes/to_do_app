import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const Todo = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const inputHandler = (e) => {
    // console.log(e.target.value);
    setData(e.target.value);
  };

  const onSubmitList = (e) => {
    e.preventDefault();
    if (!data) {
    } else {
      setItems([...items, data]);
      setData("");
    }
  };

  const deleteItem = (listnumber) => {
    //console.log(listnumber);
    const updatedItems = items.filter((elem, ind) => {
      return ind !== listnumber;
    });
    setItems(updatedItems);
  };

  const deleteAll = () => {
    //  e.preventDefault();
    setItems([]);
    console.log("dall");
  };
  return (
    <>
      <div className="todo-main">
        <form onSubmit={onSubmitList}>
          <h1> Todo List</h1>
          <input
            type="text"
            placeholder="Enter Here"
            value={data}
            onChange={inputHandler}
          />
          <button type="submit">
            <BsPlus />
          </button>
        </form>

        <ul>
          {items.map((value, listnumber) => {
            return (
              <li key={listnumber}>
                {value}
                <button onClick={() => deleteItem(listnumber)}>
                  <MdDeleteOutline />
                </button>
                {/*
                <button>
                  <FaRegEdit />
                </button>
                */}
              </li>
            );
          })}
        </ul>
        {items.length > 1 && (
          <button className="deleteall" type="button" onClick={deleteAll}>
            Delete All
          </button>
        )}
      </div>
    </>
  );
};

export default Todo;
