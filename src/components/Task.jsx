import React, { Component } from 'react'

export default class Task extends Component {
    render() {
        return (
            <li className="task">
                <input
                    type="checkbox"
                    name="checkbox" 
                    onChange={this.props.onToggle}
                    checked={this.props.checked}
                />
                <span>{this.props.label}</span>
            </li>
        )
    }
}
