import {
  ChartNoAxesCombined,
  ChevronDown,
  CircleUserRound,
  Command,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '#/components/ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '../ui/avatar'

const navigation = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Products', icon: Package, active: false },
  { label: 'Orders', icon: ShoppingCart, active: false, count: '8' },
  { label: 'Customers', icon: Users, active: false },
]

function NavigationLink({
  label,
  icon: Icon,
  active = false,
  count,
}: {
  label: string
  icon: LucideIcon
  active?: boolean
  count?: string
}) {
  const { isMobile, setOpenMobile } = useSidebar()

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={active}
        tooltip={label}
        className="dashboard-nav-button"
      >
        <a
          href={active ? '#overview' : '#'}
          aria-label={label}
          aria-current={active ? 'page' : undefined}
          onClick={(event) => {
            if (!active) event.preventDefault()
            if (isMobile) setOpenMobile(false)
          }}
        >
          <Icon aria-hidden="true" />
          <span className="dashboard-nav-label">{label}</span>
          {count && (
            <span className="dashboard-nav-count" aria-label={`${count} new`}>
              {count}
            </span>
          )}
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

export function Sidebar() {
  return (
    <SidebarPrimitive
      collapsible="icon"
      className="dashboard-sidebar-root"
      aria-label="Dashboard sidebar"
    >
      <SidebarHeader className="dashboard-sidebar-header">
        <a
          className="dashboard-store-brand"
          href="#overview"
          aria-label="Acme Store dashboard"
        >
          <span className="brand-mark">
            <Command size={19} strokeWidth={2.2} />
          </span>
          <span className="dashboard-sidebar-copy dashboard-brand-name">
            Acme Store
          </span>
        </a>

      </SidebarHeader>

      <SidebarContent>
        <nav aria-label="Main navigation">
          <SidebarGroup className="dashboard-sidebar-group">
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarMenu>
              {navigation.map((item) => (
                <NavigationLink key={item.label} {...item} />
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup className="dashboard-sidebar-group">
            <SidebarGroupLabel>Insights</SidebarGroupLabel>
            <SidebarMenu>
              <NavigationLink label="Analytics" icon={ChartNoAxesCombined} />
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup className="dashboard-sidebar-group">
            <SidebarGroupLabel>Preferences</SidebarGroupLabel>
            <SidebarMenu>
              <NavigationLink label="Settings" icon={Settings} />
            </SidebarMenu>
          </SidebarGroup>
        </nav>
      </SidebarContent>

      <SidebarFooter className="dashboard-sidebar-footer">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className='flex justify-around'>
              <div className="">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                </Avatar>
              </div>
              <div className="flex flex-col items-start">
                <span>Jack Walsh</span>
              <span>jack@gmai.com</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </SidebarPrimitive>
  )
}
