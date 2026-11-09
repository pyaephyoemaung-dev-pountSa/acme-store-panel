import { Bell, CircleHelp, Download, Globe2 } from 'lucide-react'
import { dashboardOrders } from '#/constants/dashboard'
import { SidebarTrigger } from '#/components/ui/sidebar'

function exportOrders() {
  const rows = [
    ['Order Ref', 'Buyer', 'Total', 'Status'],
    ...dashboardOrders.map(({ id, buyer, total, status }) => [
      id,
      buyer,
      total,
      status,
    ]),
  ]
  const csv = rows
    .map((row) =>
      row.map((field) => `"${field.replaceAll('"', '""')}"`).join(','),
    )
    .join('\n')
  const url = URL.createObjectURL(
    new Blob([csv], { type: 'text/csv;charset=utf-8' }),
  )
  const link = document.createElement('a')
  link.href = url
  link.download = 'acme-store-orders.csv'
  link.click()
  URL.revokeObjectURL(url)
}

export function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header-start">
        <SidebarTrigger className="dashboard-sidebar-trigger" />
        <div className="dashboard-header-copy">
          <h1>Dashboard Overview</h1>
          <p>A summary for all the purchases, sales etc.</p>
        </div>
      </div>
      <div className="dashboard-header-actions">
        <button className="dashboard-button platform-filter" type="button">
          <Globe2 size={16} />
          <span>All Platforms</span>
        </button>
        <button className="dashboard-button" type="button">
          <span>All Products</span>
        </button>
        <button
          className="dashboard-button"
          type="button"
          onClick={exportOrders}
        >
          <Download size={16} />
          <span>Export</span>
        </button>
        <button
          className="dashboard-icon-button"
          type="button"
          aria-label="Notifications"
        >
          <Bell size={17} />
        </button>
        <button
          className="dashboard-icon-button"
          type="button"
          aria-label="Help"
        >
          <CircleHelp size={17} />
        </button>
      </div>
    </header>
  )
}
