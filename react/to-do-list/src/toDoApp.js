import React from 'react';
import axios from "axios";
import './toDoApp.css';
class ToDoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.baseurl = "http://localhost:4000/todo-list";
        this.taskToBeAdded = "";
    }

    componentDidMount() {
        this.getTodoList();
    }

    getTodoList() {
        axios.get(this.baseurl).then((response) => {
            console.log(response.data);
            this.setState({ data: response.data });
        });
    }

    deleteTask = (event) => {
        console.log(event.target.value);
        axios.delete(`${this.baseurl}` + "/" + event.target.value).then(
            () => {
                alert("Task Deleted!")
            }
        )
    }

    inputTask = (event) => {
        this.taskToBeAdded = event.target.value;
    }

    addTask = () => {
        axios.post(this.baseurl, { "id": 0, "task": this.taskToBeAdded, "state": 0 });
    }

    completedTask = (event) => {
        console.log("Task comple", event.target.value);
        let task = event.target.value.split(',');
        task.state = 1;
        axios.put(this.baseurl + "/" + task[1], {
            "task": task[0],
            "state": 1
        });
    }
    render() {
        const tasks = this.state.data;
        console.log({ tasks })
        return (
            <>
                <h1>To do list: </h1>
                <form>
                    <input placeholder="task..." onChange={this.inputTask} name="taskToBeAdded" /> &nbsp;&nbsp;
                    <button onClick={this.addTask} >Add Task</button>
                </form>
                <ul>
                    {tasks.map((task) =>
                        <>
                            <table>
                                <tr>
                                    <td>
                                        <li key={task.id} >{task.task}</li> </td>

                                    {task.state == 0 &&
                                        <>
                                            <td>
                                                <button className="btn btn-danger" onClick={this.deleteTask} value={task.id} >Delete Task</button> &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={this.completedTask} value={[task.task, task.id]} >Task Completed</button>
                                            </td>
                                        </>
                                    }

                                </tr>
                            </table>
                        </>
                    )}
                </ul>
            </>
        );
    }
}

export default ToDoApp;
