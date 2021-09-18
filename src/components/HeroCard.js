import jeremy from '../images/image-jeremy.png'

export default function HeroCard({ changeTab, tab }) {
  return (
    <div className="hero-card bg-card-dark w-11/12 max-w-xs mx-auto rounded-2xl md:max-h-64 xl:max-h-full xl:ml-auto xl:mr-0 xl:w-48">
      <div className="person bg-card-light flex justify-center items-center gap-4 p-8 rounded-2xl xl:flex-col xl:items-start">
        <img className="w-16 border-2 rounded-full" src={jeremy} alt="" />
        <div className="person-details text-sm">
          <p>Report for</p>
          <h1 className="text-white text-2xl font-light xl:text-3xl">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div className="time-indication flex justify-around p-4 xl:flex-col xl:items-start xl:gap-4 xl:ml-4">
        <p
          className={tab === 'daily' ? 'active' : 'menu'}
          id="daily"
          onClick={changeTab}
        >
          Daily
        </p>
        <p
          className={tab === 'weekly' ? 'active' : 'menu'}
          id="weekly"
          onClick={changeTab}
        >
          Weekly
        </p>
        <p
          className={tab === 'monthly' ? 'active' : 'menu'}
          id="monthly"
          onClick={changeTab}
        >
          Monthly
        </p>
      </div>
    </div>
  )
}
