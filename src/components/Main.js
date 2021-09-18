import { useState } from 'react'
import Details from './Details'
import HeroCard from './HeroCard'

export default function Main() {
  const [tab, setTab] = useState('daily')

  const changeTab = (e) => {
    setTab(e.target.id)
  }

  return (
    <main className="md:grid md:grid-cols-2 lg:mx-auto xl:grid-cols-3">
      <HeroCard changeTab={changeTab} tab={tab} />
      <Details tab={tab} />
    </main>
  )
}
