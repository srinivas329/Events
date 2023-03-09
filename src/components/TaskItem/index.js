import './index.css'

const TaskItem = props => {
  const {details} = props
  const {task, answer} = details
  return (
    <li className="list-item">
      <p className="questions">Q. {task}</p>
      <p>
        Answer: <span className="answer">{answer}</span>
      </p>
    </li>
  )
}
export default TaskItem
