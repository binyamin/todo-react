import React, { Component } from 'react';
import 'boxicons'

export default class Task extends Component {
    render() {
        return (
            <li className="task-list__task--cont">
                <input
                    type="checkbox"
                    name="checkbox"
                    id={this.props.id}
                    className="task-list__task--checkbox"
                    onChange={this.props.onToggle}
                    checked={this.props.checked}
                />
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <button onClick={this.props.onDelete} className="task-list__task--delete">&mdash;</button>
            </li>
        )
    }
}
