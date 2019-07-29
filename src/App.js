import React from 'react';
import utils from './utils/utils';
import Progress from './components/Progress';
import Task from './components/Task';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: {
                "_pp6mqf3ky": {text: "Walk Dog", state: 1},
                "_6gse7mxoq": {text: "Text Dad", state: 1},
                "_u3ec52augt": {text: "Take out garbage", state: 0}
            }
        }

        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(ev) {
        if(ev.keyCode !== 13) return;

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

    render() {
        return (
            <React.Fragment>
                <Progress
                    value={(Object.entries(this.state.tasks).filter(i => i[1].state !== 0).length / Object.entries(this.state.tasks).length) * 100}
                />
                <input type="text" onKeyDown={this.handleAddTask} />
                <ul>{Object.entries(this.state.tasks).map(item =>{
                        return (<Task 
                            label={item[1].text}
                            key={item[0]}
                            checked={item[1].state === 1}
                            onToggle= {() => this.handleToggle(item[0])}
                        />)
                    })}
                </ul>
            </React.Fragment>
        )
    }
}
