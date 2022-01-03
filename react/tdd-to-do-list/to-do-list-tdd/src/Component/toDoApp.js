import React from 'react';
import axios from "axios";
import './toDoApp.css';
import { FaTimesCircle, FaCheckCircle, FaCircle } from 'react-icons/fa';
import { thisExpression } from '@babel/types';

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
        if (this.taskToBeAdded != ""){
            axios.post(this.baseurl, { "id": 0, "task": this.taskToBeAdded, "state": 0 });
            this.taskToBeAdded = "";
        }
    }

    taskStateChange = (event) => {
        console.log("Task comple", event.target.value);
        let task = event.target.value.split(',');
        task.state = 1;
        axios.put(this.baseurl + "/" + task[1], {
            "task": task[0],
            "state": task[2]
        });
    }
    render() {
        const tasks = this.state.data;
        console.log({ tasks })
        return (
            <div style={{ display: "block" }}>
                <h1>To do list: </h1>
                <form >
                    <input placeholder="Enter task to be added" onChange={this.inputTask} className="addTask" name="taskToBeAdded" 
                    data-testid="messageText"
                    /> &nbsp;&nbsp;
                    <button onClick={this.addTask} className="btn btn-outline-primary addTask"
                    data-testid="sendButton"
                    >Add Task</button>
                </form>


                <table className="container mt-5">
                    <tr className="row">
                        <th className="col-sm-2">Status</th>
                        <th className="col-sm-8">Tasks</th>
                        <th className="col-sm-2">Delete</th>
                    </tr>
                    {tasks.map((task) =>

                        <tr className="row">

                            <td className="col-sm-2">
                                {task.state == 1 &&
                                    <>
                                        <button className="btn btn-outline-success" onClick={this.taskStateChange} value={[task.task, task.id, 0]}> < FaCheckCircle /> </button>
                                    </>
                                }
                                {task.state == 0 &&
                                    <>
                                        <button className="btn btn-outline-warning" onClick={this.taskStateChange} value={[task.task, task.id, 1]} >  < FaCircle /> </button>
                                    </>
                                }
                            </td>
                            <td className="col-sm-8">
                                <p className={task.state == 1 ? "taskCompleted" : "taskNotCompleted"} key={task.id} >{task.task}</p> </td>

                            <td className="col-sm-2">
                                <button className="btn btn-outline-danger" onClick={this.deleteTask} value={task.id}> <FaTimesCircle /></button> &nbsp;&nbsp;
                                            </td>


                        </tr>

                    )}
                </table>



            </div>
        );
    }
}

export default ToDoApp;