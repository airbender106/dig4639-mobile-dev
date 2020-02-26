import React from 'react';
import './App.css';
import todoList from './todolist.json'





function TodoItem(props) {
  return <p className='card'>{props.content}</p>
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList,
      hideCompletedItems: false
    }
    this.currentId = 4;
  }
  addTask(e) {
    console.log(this.refs.taskContent)
    let todoList = this.state.todoList
    todoList.push(
      { "id": this.currentId, "completed": true, "priority": 1, "content": "Task 1"})
      this.currentId++
      this.setState({todoList:todoList})
  }
render() {
  return (
    <>
    <input type="text" ref="taskContent" />
    <input type="button" value="Add task" onClick={(e) => this.addTask(e)} />
    <br />
    <input ref="hideCompletedItemsCheckbox" type ="checkbox" id="hideCompletedItems" value="hideCompletedItems" 
    name="hideCompletedItems" value="hideCompletedItems"
    onChange= {(e) => this.setState({ hideCompletedItems: e.target.checked })}/>
    <label htmlFor = "hideCompletedItems"> I have a bike</label><br></br>

    { ((this.state.hideCompletedItems) ? todoList
    .filter((v) => !v.completed) : todoList)
    .map((v) => <TodoItem key={v.id} content={v.content} 
      priority={v.priority} 
      completed={v.completed}/>) }
      </>)
  }
}

function App(props) {
  return (
    <TodoList />
    )
  }

export default App;
