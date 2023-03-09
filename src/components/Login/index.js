import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import TaskItem from '../TaskItem'

import './index.css'

class Login extends Component {
  state = {
    loginStatus: '',
    inputValue: '',
    taskList: [],
    answerStatus: false,
    num1: '',
    num2: '',
    result: '',
    operator: '',
  }

  onClickMaster = () => {
    this.setState({loginStatus: 'master'})
  }

  onClickStudent = () => {
    this.setState({loginStatus: 'student'})
  }

  zero = operation => {
    if (operation) {
      return operation(0)
    }
    return 0
  }

  one = operation => {
    if (operation) {
      return operation(1)
    }
    return 1
  }

  two = operation => {
    if (operation) {
      return operation(2)
    }
    return 2
  }

  three = operation => {
    if (operation) {
      return operation(3)
    }
    return 3
  }

  four = operation => {
    if (operation) {
      return operation(4)
    }
    return 4
  }

  five = operation => {
    if (operation) {
      return operation(5)
    }
    return 5
  }

  six = operation => {
    if (operation) {
      return operation(6)
    }
    return 6
  }

  seven = operation => {
    if (operation) {
      return operation(7)
    }
    return 7
  }

  eight = operation => {
    if (operation) {
      return operation(8)
    }
    return 8
  }

  nine = operation => {
    if (operation) {
      return operation(9)
    }
    return 9
  }

  plus = num =>
    function (num2) {
      return num + num2
    }

  minus = num =>
    function (num2) {
      return num2 - num
    }

  times = num =>
    function (num2) {
      return num * num2
    }

  dividedBy = num =>
    function (num2) {
      return Math.floor(num2 / num)
    }

  onClickLogOut = () => {
    this.setState({loginStatus: ''})
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickAnswer = () => {
    const {inputValue} = this.state
    const arr = inputValue.split('(')
    const firstNum = arr[0]
    const operator = arr[1]
    const secondNum = arr[2]
    this.setState({
      num1: firstNum,
      num2: secondNum,
      operator,
      answerStatus: true,
    })
  }

  getLoginPage = () => (
    <div className="login-bg">
      <h1 className="login-text">Login Page</h1>
      <div className="icons-container">
        <button
          onClick={this.onClickMaster}
          type="button"
          className="image-text"
        >
          <img
            src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1678354937/master_u0ky7u.jpg"
            alt="master"
            className="master-img"
          />
          <h1 className="master-text">Master</h1>
        </button>
        <button
          onClick={this.onClickStudent}
          type="button"
          className="image-text"
        >
          <img
            src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1678354936/student_qowxoe.jpg"
            alt="student"
            className="master-img"
          />
          <h1 className="master-text">Student</h1>
        </button>
      </div>
    </div>
  )

  getFirstNumber = () => {
    const {num1} = this.state
    switch (num1) {
      case 'one':
        return 1
      case 'two':
        return 2
      case 'three':
        return 3
      case 'four':
        return 4
      case 'five':
        return 5
      case 'six':
        return 6
      case 'seven':
        return 7
      case 'eight':
        return 8
      case 'nine':
        return 9
      default:
        return 0
    }
  }

  getSecondNumber = () => {
    const {num2} = this.state
    switch (num2) {
      case 'one':
        return 1
      case 'two':
        return 2
      case 'three':
        return 3
      case 'four':
        return 4
      case 'five':
        return 5
      case 'six':
        return 6
      case 'seven':
        return 7
      case 'eight':
        return 8
      case 'nine':
        return 9
      default:
        return 0
    }
  }

  getOperator = () => {
    const {operator} = this.state
    const first = this.getFirstNumber()
    const second = this.getSecondNumber()
    let result
    switch (operator) {
      case 'minus':
        result = first - second
        break
      case 'plus':
        result = first + second
        break
      case 'divided_by':
        result = Math.floor(first / second)
        break
      case 'times':
        result = first * second
        break
      default:
        return null
    }

    return result
  }

  onClickLogOutStudent = () => {
    this.setState({loginStatus: ''})
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {inputValue, result} = this.state
    const finalResult = this.getOperator()

    const newTaskList = {
      id: uuidv4(),
      task: inputValue,
      answer: finalResult,
    }
    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTaskList],
      inputValue: '',
      answerStatus: false,
    }))
  }

  getMasterPage = () => {
    const {answerStatus, taskList, inputValue} = this.state
    console.log(taskList)
    const operator1 = this.getOperator()

    return (
      <div className="master-bg">
        <h1>Master Portal</h1>
        <div className="card-bg">
          <h1>Calculations</h1>
          <form onSubmit={this.onClickSubmit}>
            <label htmlFor="task">Task</label>
            <br />
            <input
              value={inputValue}
              onChange={this.onChangeInput}
              className="input"
              placeholder="Enter"
              type="text"
              id="task"
            />
            <br />
            <p>
              Ans:
              <span className="answer">{answerStatus ? operator1 : ''}</span>
            </p>
            <button
              onClick={this.onClickAnswer}
              className="ans-button"
              type="button"
            >
              Get Answer
            </button>
            <br />
            <button className="add-button" type="submit">
              Add Activity
            </button>
          </form>
          <button
            onClick={this.onClickLogOut}
            type="button"
            className="logout-button"
          >
            Logout
          </button>
        </div>
      </div>
    )
  }

  getStudentPage = () => {
    const {taskList} = this.state
    return (
      <div className="master-bg">
        <h1>Student Portal</h1>
        <div className="card-bg">
          <h1>Activities</h1>
          {taskList.length > 0 ? (
            <ul className="ul-list">
              {taskList.map(each => (
                <TaskItem details={each} key={each.id} />
              ))}
            </ul>
          ) : (
            <img
              src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1678374376/error_u2mdal.webp"
              alt="error"
            />
          )}

          <button
            className="logout-button"
            onClick={this.onClickLogOutStudent}
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
    )
  }

  getFinalResult = () => {
    const {loginStatus} = this.state
    switch (loginStatus) {
      case 'student':
        return this.getStudentPage()
      case 'master':
        return this.getMasterPage()
      default:
        return this.getLoginPage()
    }
  }

  render() {
    const {loginStatus} = this.state

    return <div>{this.getFinalResult()}</div>
  }
}

export default Login
