import React, { Component } from 'react'
import jeremy from '../images/image-jeremy.png'

export default class HeroCard extends Component {
  render() {
    return (
      <div className="hero-card bg-card-dark w-11/12 max-w-xs mx-auto rounded-2xl ">
        <div className="person bg-card-light flex justify-center items-center gap-4 p-8 rounded-2xl">
          <img className="w-16 border-2 rounded-full" src={jeremy} alt="" />
          <div className="person-details">
            <p>Report for</p>
            <h1 className="text-white text-2xl font-light">Jeremy Robson</h1>
          </div>
        </div>
        <div className="time-indication flex justify-around p-4 ">
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>
    )
  }
}
