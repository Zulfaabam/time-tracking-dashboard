import { useState, useEffect } from 'react'
import TimeCard from './TimeCard'

export default function Details({ tab }) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./data.json')
      .then((resp) => resp.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div>
      {data.map((item, index) => {
        return (
          <TimeCard
            key={index}
            title={item.title}
            timeframes={item.timeframes}
            tab={tab}
          />
        )
      })}
    </div>
  )
}
