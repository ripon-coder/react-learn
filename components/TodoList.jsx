import styles from "./TodoList.module.css";

export default function TodoList({ manyTodos, setManyTodos }) {
  function deleteTodo(indexToDelete) {
    setManyTodos(manyTodos.filter((_, i) => i !== indexToDelete));
  }

  function markClick(indexToToggle) {
    return () => {
      setManyTodos(
        manyTodos.map((todo, i) =>
          i === indexToToggle ? { ...todo, done: !todo.done } : todo
        )
      );
    };
  }

  // Add index to each todo for tracking
  const todosWithIndex = manyTodos.map((todo, i) => ({ ...todo, index: i }));

  // Sort: undone first, done last
  const sortedTodos = [
    ...todosWithIndex.filter((todo) => !todo.done),
    ...todosWithIndex.filter((todo) => todo.done),
  ];

  return (
    <div className={styles.todoList}>
      <ul>
        {sortedTodos.map((todo) => (
          <li key={todo.index}>
            {todo.done ? (
              <>
                <del>
                  <span
                    onClick={markClick(todo.index)}
                    className={styles.itemName}
                  >
                    {todo.name}
                  </span>
                </del>
                <span
                  className={styles.delete}
                  onClick={() => deleteTodo(todo.index)}
                >
                  X
                </span>
              </>
            ) : (
              <>
                <span
                  onClick={markClick(todo.index)}
                  className={styles.itemName}
                >
                  {todo.name}
                </span>
                <span
                  className={styles.delete}
                  onClick={() => deleteTodo(todo.index)}
                >
                  X
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
