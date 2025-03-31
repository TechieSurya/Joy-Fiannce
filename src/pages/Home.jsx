import React from 'react'
import MonthlyAnalytics from '../components/dashboard/MonthlyAnalytics'
import MonthlyIncomeChart from '../components/dashboard/MonthlyIncomChart'

const Home = () => {
  return (
    <div className='grid grid-col-12 gap-4 md:gap-6'>
      <div col-span-12 space-y-6 xl:col-span-7>
        <MonthlyAnalytics/>
        

        <MonthlyIncomeChart/>
      </div>
    </div>
  )
}

export default Home