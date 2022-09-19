const TodoItem = props => {
  const {initialTodosList} = props
  const {title} = initialTodosList

  return (
    <div className="todo-container">
      <h1 className="heading">Simple Todos</h1>
      <div className="todo-card">
        <h1 className="todo-item">{title}</h1>
        <button type="button" className="button">
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
