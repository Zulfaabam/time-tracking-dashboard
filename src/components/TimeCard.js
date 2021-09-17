import React, { Component } from 'react'
import icon from '../images/icon-ellipsis.svg'

export default class TimeCard extends Component {
  render() {
    return (
      <div className="time-card w-10/12 max-w-xs mx-auto mt-6 rounded-2xl">
        <div className={this.props.title}>
          <div className="content bg-card-dark px-8 py-4 rounded-2xl">
            <div className="head flex justify-between items-center">
              <h2>{this.props.title}</h2>
              <i>
                <img src={icon} alt="" />
              </i>
            </div>
            <div className="times flex justify-between items-center">
              <h1 className="text-2xl font-light">32hrs</h1>
              <p>Last Week - 36hrs</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
