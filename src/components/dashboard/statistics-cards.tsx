import { channelSales } from '#/constants/dashboard'
import { ArrowUpRight } from 'lucide-react'


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
