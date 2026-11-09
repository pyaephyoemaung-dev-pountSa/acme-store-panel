import { StatisticsCards } from './statistics-cards'
import { RevenueChart, SalesPipeline } from './charts'
import { RecentSales } from './recent-sales'

export function DashboardOverview() {
  return (
    <>
      <StatisticsCards />
      <SalesPipeline />
      <RevenueChart />
      <RecentSales />
    </>
  )
}
