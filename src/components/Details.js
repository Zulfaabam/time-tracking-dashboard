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
    <div className="md:space-y-6 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-y-6 lg:gap-x-6 xl:grid-cols-3 xl:gap-x-8 xl:mr-auto xl:ml-8 xl:col-span-2">
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
