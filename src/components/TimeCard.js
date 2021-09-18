import dots from '../images/icon-ellipsis.svg'

export default function TimeCard({ title, timeframes, tab }) {
  return (
    <div className="time-card w-10/12 max-w-xs mx-auto mt-6 rounded-2xl">
      <div className={title.replace(/ /g, '')}>
        <div className="content bg-card-dark px-8 py-4 rounded-2xl">
          <div className="head flex justify-between items-center">
            <h2>{title}</h2>
            <i>
              <img src={dots} alt="" />
            </i>
          </div>
          <div className="times flex justify-between items-center">
            <h1 className="text-2xl font-light">
              {timeframes[tab].current}hrs
            </h1>
            <p>
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
