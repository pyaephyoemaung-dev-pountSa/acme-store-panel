export interface WeeklySalesPoint {
  week: string
  orders: number
  sales: number
}

export interface RevenuePoint {
  month: string
  current: number
  previous: number
}

export interface DashboardOrder {
  id: string
  buyer: string
  total: string
  status: 'Delivered' | 'Shipped' | 'Processing' | 'Cancelled'
}

export interface FulfillmentOrder {
  id: string
  percent: number
}
