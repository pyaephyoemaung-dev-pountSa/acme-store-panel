import type { ReactNode } from 'react'
import { DashboardHeader } from './dashboard-header'
import { Sidebar } from './sidebar'
import { SidebarInset, SidebarProvider } from '#/components/ui/sidebar'
import { TooltipProvider } from '#/components/ui/tooltip'

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-app">
      <a className="skip-link" href="#dashboard-main">
        Skip to main content
      </a>
      <TooltipProvider delayDuration={0}>
        <SidebarProvider className="dashboard-sidebar-provider">
          <Sidebar />
          <SidebarInset className="dashboard-main">
            <DashboardHeader />
            <div className="dashboard-content" id="dashboard-main">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </div>
  )
}
