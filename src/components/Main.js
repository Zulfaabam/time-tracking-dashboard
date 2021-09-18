import { useState } from 'react'
import Details from './Details'
import HeroCard from './HeroCard'

export default function Main() {
  const [tab, setTab] = useState('daily')

  const changeTab = (e) => {
    setTab(e.target.id)
  }

  return (
    <main>
      <HeroCard changeTab={changeTab} tab={tab} />
      <Details tab={tab} />
    </main>
  )
}
