import React from 'react'
import { Link } from 'react-router-dom'

function TabComponent({ tabs }) {
  console.log(tabs)
  return (
    <header className='flex flex-col sm:flex-row justify-center gap-4 p-3 bg-green-200 text-slate-900 font-bold'>
      {tabs.map((tab, i) => {
        return (
          <Link to={tab} key={tab + i} className='border-y-2  sm:border-y-0 border-x-0 sm:border-x-2 px-3 border-slate-900'>
            {`${tab[0].toUpperCase()}${tab.slice(1, tab.length)}`}
          </Link>
        )
      })}
    </header>
  )
}

export default TabComponent