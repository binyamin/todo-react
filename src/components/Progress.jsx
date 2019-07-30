import React, { Component } from 'react'

export default class Progress extends Component {
    render() {
        return (
            <div className="progress">
                <span className="progress__bar" style={{width: this.props.value + '%', backgroundColor: this.props.value === 100 ? '#499167' : '#7f7979' }}></span>
                <span className="progress__text">{(Math.round(this.props.value) || 0) + '%'}</span>
            </div>
        )
    }
}
