import dots from '../images/icon-ellipsis.svg'

export default function TimeCard({ title, timeframes, tab }) {
  return (
    <div className="time-card w-80 mt-6 mx-auto rounded-2xl md:mt-0 lg:w-44 xl:w-56">
      <div className={title.replace(/ /g, '')}>
        <div className="content bg-card-dark px-8 py-4 rounded-2xl transition">
          <div className="head flex justify-between items-center">
            <h2>{title}</h2>
            <i>
              <img src={dots} alt="" />
            </i>
          </div>
          <div className="times flex justify-between items-center lg:flex-col lg:items-start xl:mt-3 xl:gap-2">
            <h1 className="text-2xl font-light xl:text-4xl">
              {timeframes[tab].current}hrs
            </h1>
            <p className="text-xs">
              {`Last ${
                tab === 'daily' ? 'Day' : tab === 'weekly' ? 'Week' : 'Month'
              } - ${timeframes[tab].previous}`}
              hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
