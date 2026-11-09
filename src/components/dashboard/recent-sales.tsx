import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  SlidersHorizontal,
} from 'lucide-react'
import { dashboardOrders, fulfillmentOrders } from '#/constants/dashboard'

const statuses = ['All', 'Delivered', 'Shipped', 'Processing', 'Cancelled']

export function RecentSales() {
  const [status, setStatus] = useState('All')
  const [page, setPage] = useState(0)
  const filteredOrders =
    status === 'All'
      ? dashboardOrders
      : dashboardOrders.filter((order) => order.status === status)
  const currentOrders = filteredOrders.slice(page * 6, page * 6 + 6)
  const pageCount = Math.max(1, Math.ceil(filteredOrders.length / 6))

  function chooseStatus(value: string) {
    setStatus(value)
    setPage(0)
  }

  return (
    <div className="orders-grid">
      <section className="dashboard-panel orders-panel">
        <div className="orders-heading">
          <div className="orders-title">
            <h2>Recent Orders</h2>
            <span>12</span>
          </div>
          <select
            aria-label="Filter orders"
            value={status}
            onChange={(event) => chooseStatus(event.target.value)}
          >
            {statuses.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="orders-table-scroll">
          <table className="orders-table">
            <thead>
              <tr>
                <th scope="col">Order Ref</th>
                <th scope="col">Buyer</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.buyer}</td>
                  <td>{order.total}</td>
                  <td>
                    <span
                      className={`order-status status-${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="orders-pagination">
          <span>
            {filteredOrders.length ? page * 6 + 1 : 0}-
            {Math.min((page + 1) * 6, filteredOrders.length)} of{' '}
            {filteredOrders.length}
          </span>
          <div>
            <button
              type="button"
              aria-label="Go to previous page"
              disabled={page === 0}
              onClick={() => setPage((value) => Math.max(0, value - 1))}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Go to next page"
              disabled={page + 1 >= pageCount}
              onClick={() =>
                setPage((value) => Math.min(pageCount - 1, value + 1))
              }
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* <OrderFulfillment /> */}
    </div>
  )
}

// function OrderFulfillment() {
//   return (
//     <section className="dashboard-panel fulfillment-panel">
//       <div className="fulfillment-heading">
//         <h2>Order Fulfillment</h2>
//         <div>
//           <button type="button" aria-label="Refresh">
//             <RefreshCw size={15} />
//           </button>
//           <button type="button" aria-label="Options">
//             <SlidersHorizontal size={15} />
//           </button>
//         </div>
//       </div>
//       <div className="fulfillment-columns">
//         <span>Order</span>
//         <span>Status</span>
//         <span>Del[%]</span>
//       </div>
//       <div className="fulfillment-list">
//         {fulfillmentOrders.map(({ id, percent }) => (
//           <div className="fulfillment-row" key={id}>
//             <span className="fulfillment-id">{id}</span>
//             <div
//               className="fulfillment-progress"
//               role="progressbar"
//               aria-label={`${id} delivered`}
//               aria-valuenow={percent}
//               aria-valuemin={0}
//               aria-valuemax={100}
//             >
//               <span style={{ width: `${percent}%` }} />
//             </div>
//             <span className="fulfillment-percent">{percent}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
