import React, { Component } from 'react'
import icon from '../images/icon-ellipsis.svg'

export default class TimeCard extends Component {
  render() {
    return (
      <div className="time-card">
        <div className="bg-upper"></div>
        <div className="content">
          <div className="title">
            <h2>Work</h2>
            <i>
              <img src={icon} alt="" />
            </i>
          </div>
          <div className="times">
            <h1>32hrs</h1>
            <p>Last Week - 36hrs</p>
          </div>
        </div>
      </div>
    )
  }
}
