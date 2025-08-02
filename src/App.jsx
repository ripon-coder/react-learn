import React, { useState } from "react";
import Header from "../components/Header";
import Todo from "../components/Todo";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
function App() {
  const [manyTodos, setManyTodos] = useState([]);
  const totalCount = manyTodos.length;
  const completedCount = manyTodos.filter((todo) => todo.done).length;
  return (
    <>
      <Header />
      <Todo setManyTodos={setManyTodos} manyTodos={manyTodos} />
      <TodoList setManyTodos={setManyTodos} manyTodos={manyTodos} />
      <Footer totalCount={totalCount} completedCount={completedCount}/>
    </>
  );
}

export default App;
