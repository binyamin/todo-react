import React, { Component } from 'react'

export default class Progress extends Component {
    render() {
        return (
            <div className="progress">
                <span style={{width: this.props.value + '%'}}></span>
            </div>
        )
    }
}
