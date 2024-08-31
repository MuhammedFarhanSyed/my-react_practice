import App_name from "./components/App-name";
import AddTodo from "./components/Add-todo";
import Task_1 from "./components/Todo-task1";
import Task_2 from "./components/todo-task2";
import "./App.css";

function App() {
  return (
    <center>
      <App_name />
      <div className="container text-center  text-left">
        <AddTodo />
        <div className="tasks">
          
          <Task_1 />
          <Task_2 />
        </div>
      </div>
    </center>
  );
}

export default App;
