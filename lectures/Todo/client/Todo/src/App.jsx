import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  // const [count, setCount] = useState(0)

  const [data, setData] = useState();


  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    
    axios({
      method: "get",
      url: "http://localhost:3000/gettodos",
    })
      .then((res) => {
        console.log("res", res);
        setData(res.data);
      })
      .catch((err) => console.log("err", err));
  }, []);

  // add a new todo
  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    // empty todo
    const todoItem = {
      todo: newTodo,
      create: new Date(),
    };
    axios({
      method: "post",
      url: "http://locolhost:3000/create",
      data: todoItem, //this send it to the newTodo to the back end
    })
      .then((res) => {
        console.log("todo add it", res);
        setData([...data, res.data]); // add the method to the state
        setNewTodo(""); // clears the input feild
      })
      .catch((err) => console.log("error adding todo", { err }));
  };

  return (
    <>
      <div>
        <h1>To-do-matic</h1>
        {console.log("newTod:", newTodo)}
        {/**input field and buttonfor adding new todo */}
        <div style={{marginBottom: "20px"}}>
          <input
          type="text"
          placeholder="Enter a new todo"
          value={newTodo}
          onChange={(e) => setNeewTodo(e.target.value)}
          style={{marginRight: "10px", padding: "5px"}}
          />
          <button onClick={handleAddTodo} style={{padding: "5px"}}>Add Todo</button>
        </div>
      </div>

      {console.log("data", data)}

      {data &&
        data.map((item) => {
          return (
            <div style={{ border: "2px solid red" }}>
              <p> {item.todo}</p>
              <button>delete</button>
              <button>edit</button>
            </div>
          );
        })}
    </>
  );
}

export default App;




// Notes:  Validation:
    // if (!newTodo.trim()) return; ensures no empty or whitespace-only todos are added.
    // Payload Creation:
    //     todoItem contains the todo string and a timestamp (created).
    // Backend Request:
    //     A POST request is sent to /create, passing todoItem as the payload.
    // State Update:
    //     On success (then block):
    //         The backend sends the newly created todo with an _id.
    //         setData([...data, res.data]) appends the new todo to the existing list.
    //         Clears the input field with se