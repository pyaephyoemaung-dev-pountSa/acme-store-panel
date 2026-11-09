import type {
  DashboardOrder,
  FulfillmentOrder,
  RevenuePoint,
  WeeklySalesPoint,
} from '#/services/dashboard/types'
import { LayoutDashboard, Package, ShoppingCart, Users } from 'lucide-react'

export const weeklySalesData: WeeklySalesPoint[] = [
  { week: 'W1', orders: 510, sales: 11600 },
  { week: 'W2', orders: 590, sales: 14900 },
  { week: 'W3', orders: 420, sales: 12300 },
  { week: 'W4', orders: 300, sales: 9400 },
  { week: 'W5', orders: 565, sales: 15200 },
  { week: 'W6', orders: 610, sales: 15800 },
  { week: 'W7', orders: 510, sales: 13800 },
  { week: 'W8', orders: 460, sales: 12600 },
  { week: 'W9', orders: 380, sales: 11200 },
  { week: 'W10', orders: 600, sales: 15400 },
  { week: 'W12', orders: 535, sales: 14300 },
]

export const revenueData: RevenuePoint[] = [
  { month: 'Jan', current: 42, previous: 38 },
  { month: 'Feb', current: 38, previous: 45 },
  { month: 'Mar', current: 52, previous: 41 },
  { month: 'Apr', current: 45, previous: 48 },
  { month: 'May', current: 58, previous: 44 },
  { month: 'Jun', current: 41, previous: 52 },
  { month: 'Jul', current: 55, previous: 47 },
  { month: 'Aug', current: 48, previous: 53 },
  { month: 'Sep', current: 62, previous: 49 },
  { month: 'Oct', current: 54, previous: 58 },
  { month: 'Nov', current: 67, previous: 52 },
  { month: 'Dec', current: 71, previous: 61 },
]

export const dashboardOrders: DashboardOrder[] = [
  {
    id: 'ORD-2024-001',
    buyer: 'Sarah Johnson',
    total: '$2,499.00',
    status: 'Delivered',
  },
  {
    id: 'ORD-2024-002',
    buyer: 'Michael Chen',
    total: '$1,348.00',
    status: 'Shipped',
  },
  {
    id: 'ORD-2024-003',
    buyer: 'Emma Wilson',
    total: '$1,198.00',
    status: 'Processing',
  },
  {
    id: 'ORD-2024-004',
    buyer: 'James Rodriguez',
    total: '$799.00',
    status: 'Delivered',
  },
  {
    id: 'ORD-2024-005',
    buyer: 'Lisa Park',
    total: '$599.00',
    status: 'Cancelled',
  },
  {
    id: 'ORD-2024-006',
    buyer: 'David Kim',
    total: '$5,498.00',
    status: 'Shipped',
  },
  {
    id: 'ORD-2024-007',
    buyer: 'Olivia Martinez',
    total: '$1,275.00',
    status: 'Processing',
  },
  {
    id: 'ORD-2024-008',
    buyer: 'Noah Williams',
    total: '$3,120.00',
    status: 'Delivered',
  },
  {
    id: 'ORD-2024-009',
    buyer: 'Ava Thompson',
    total: '$875.00',
    status: 'Shipped',
  },
  {
    id: 'ORD-2024-010',
    buyer: 'Ethan Davis',
    total: '$2,050.00',
    status: 'Processing',
  },
  {
    id: 'ORD-2024-011',
    buyer: 'Mia Garcia',
    total: '$690.00',
    status: 'Delivered',
  },
  {
    id: 'ORD-2024-012',
    buyer: 'Lucas Brown',
    total: '$4,825.00',
    status: 'Shipped',
  },
]

export const fulfillmentOrders: FulfillmentOrder[] = [
  { id: 'ORD-4821', percent: 92 },
  { id: 'ORD-4819', percent: 78 },
  { id: 'ORD-4815', percent: 100 },
  { id: 'ORD-4812', percent: 65 },
  { id: 'ORD-4808', percent: 43 },
  { id: 'ORD-4805', percent: 100 },
  { id: 'ORD-4801', percent: 88 },
  { id: 'ORD-4798', percent: 55 },
  { id: 'ORD-4794', percent: 100 },
  { id: 'ORD-4790', percent: 71 },
  { id: 'ORD-4786', percent: 35 },
  { id: 'ORD-4782', percent: 96 },
]


export const channelSales = [
  {
    name: 'In-store Sales',
    value: '$7,820.75',
    change: '+4.3%',
    delta: '+$322.50 from last month',
    orders: 'Based on 5,000 orders',
  },
  {
    name: 'Website Sales',
    value: '$985,937.45',
    change: '+12.5%',
    delta: '+$109,500.00 from last month',
    orders: 'Based on 21,000 orders',
  },
  {
    name: 'Wholesale',
    value: '$124,650.00',
    change: '+6.8%',
    delta: '+$7,935.00 from last month',
    orders: 'Based on 890 orders',
  },
]

export const navigation = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Products', icon: Package, active: false },
  { label: 'Orders', icon: ShoppingCart, active: false, count: '8' },
  { label: 'Customers', icon: Users, active: false },
]