export const Task = (props) =>{
    return (
        <div className="task"
        style={{backgroundColor: props.completed ? "green" : "white"}}>
          <h1>{props.taskName}</h1>
          <button className="button-45" onClick={() => props.completeTask(props.id)}>Done</button>
          <button className="button-45" onClick={() => props.removeTask(props.id)}>X</button>
        </div>
      )

}