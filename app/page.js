import BarCharts from './components/BarCharts'
import Cards from './components/Cards'
import ChatCard from './components/ChatCard'
import LineCharts from './components/LineCharts'
import PieCharts from './components/PieCharts'
import RegionalCharts from './components/RegionalCharts'
import TableData from './components/TableData'

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        <Cards />
      </div>
      <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        <LineCharts />
        <BarCharts />
        <PieCharts />
        <RegionalCharts />
        <div className='col-span-12 xl:col-span-8'>
          <TableData />
        </div>
        <ChatCard />
      </div>
    </>
  )
}
