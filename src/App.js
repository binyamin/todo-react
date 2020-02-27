import React from 'react';
import utils from './utils/utils';
import Progress from './components/Progress.jsx';
import Task from './components/Task.jsx';
import './css/style.css'

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddTask = this.handleAddTask.bind(this);
      this.state = {
        tasks: []
      }
    }

    handleAddTask(ev) {
        if(ev.keyCode !== 13 || ev.target.value === '') return;

        let tasks = this.state.tasks;
        tasks[utils.generateId()] = {
            text: ev.target.value,
            state: 0
        }

        this.setState({tasks})
        ev.target.value = "";
    }

    handleToggle(id) {
        let tasks = this.state.tasks;
        tasks[id].state = (tasks[id].state === 1) ? 0 : 1
        this.setState({tasks})
    }

    handleDelete(id) {
        let tasks = this.state.tasks;
        delete tasks[id];
        this.setState({tasks})
    }

    render() {
        return (
            <React.Fragment>
                <input className="task-input" type="text" onKeyDown={this.handleAddTask} placeholder="Add your task 📝"/>
                <Progress
                    value={(Object.entries(this.state.tasks).filter(i => i[1].state !== 0).length / Object.entries(this.state.tasks).length) * 100}
                />
                <ul className="task-list">{Object.entries(this.state.tasks).map(item =>{
                        return (<Task
                            label={item[1].text}
                            key={item[0]}
                            id={item[0]}
                            checked={item[1].state === 1}
                            onEdit={this.handleEdit}
                            onToggle={() => this.handleToggle(item[0])}
                            onDelete={() => this.handleDelete(item[0])}
                        />)
                    })}
                </ul>
            </React.Fragment>
        )
    }
}
