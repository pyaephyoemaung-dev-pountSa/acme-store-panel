import './dashboard.css'

import { DashboardOverview } from '#/components/dashboard/dashboard-overview'
import { DashboardLayout } from '#/components/dashboard/dashboard-layout'

export function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  )
}
