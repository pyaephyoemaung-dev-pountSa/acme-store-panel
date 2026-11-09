import { ArrowUpRight } from 'lucide-react'

const channelSales = [
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

export function StatisticsCards() {
  return (
    <section className="sales-cards" aria-label="Sales by channel">
      {channelSales.map((sale) => (
        <article className="sales-card" key={sale.name}>
          <div className="sales-card-top">
            <div className="sales-card-heading">
              <span>{sale.name}</span>
              <strong>{sale.value}</strong>
            </div>
            <span className="sales-card-badge">
              <ArrowUpRight size={14} />
              {sale.change}
            </span>
          </div>
          <div className="sales-card-foot">
            <strong>
              {sale.delta} <ArrowUpRight size={15} />
            </strong>
            <span>{sale.orders}</span>
          </div>
        </article>
      ))}
    </section>
  )
}
