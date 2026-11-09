import { useState } from 'react'
import { revenueData, weeklySalesData } from '#/constants/dashboard'
import { Activity, CalendarDays } from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function PipelineChart({
  dataKey,
  total,
  label,
  maximum,
  ticks,
}: {
  dataKey: 'orders' | 'sales'
  total: string
  label: string
  maximum: number
  ticks: number[]
}) {
  return (
    <div className="pipeline-chart">
      <div className="pipeline-total">
        <strong>{total}</strong>
        <span>{label}</span>
      </div>
      <div className="pipeline-plot">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={weeklySalesData}
            margin={{ top: 8, right: 4, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#ececec" />
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#737373', fontSize: 11 }}
              tickMargin={9}
            />
            <YAxis
              domain={[0, maximum]}
              ticks={ticks}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#737373', fontSize: 11 }}
              width={34}
            />
            <Tooltip
              cursor={{ fill: '#f5f5f5' }}
              contentStyle={{
                border: '1px solid #e5e5e5',
                borderRadius: 8,
                fontSize: 12,
              }}
            />
            <Bar dataKey={dataKey} radius={[5, 5, 0, 0]} maxBarSize={24}>
              {weeklySalesData.map((item) => (
                <Cell
                  key={item.week}
                  fill={item.week === 'W6' ? '#171717' : '#a3a3a3'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export function SalesPipeline() {
  const [quarter, setQuarter] = useState('Quarter 1')

  return (
    <section className="dashboard-panel pipeline-panel">
      <div className="pipeline-heading">
        <div className="pipeline-title">
          <button
            type="button"
            className="pipeline-chart-icon"
            aria-label="Sales Pipeline"
          >
            <Activity size={16} />
          </button>
          <h2>Sales Pipeline</h2>
        </div>
        <select
          aria-label="Select quarter"
          value={quarter}
          onChange={(event) => setQuarter(event.target.value)}
        >
          <option>Quarter 1</option>
          <option>Quarter 2</option>
          <option>Quarter 3</option>
          <option>Quarter 4</option>
        </select>
      </div>
      <div className="pipeline-charts">
        <PipelineChart
          dataKey="orders"
          total="4,160"
          label="TOTAL ORDERS"
          maximum={600}
          ticks={[0, 150, 300, 450, 600]}
        />
        <span className="pipeline-divider" />
        <PipelineChart
          dataKey="sales"
          total="$100K"
          label="TOTAL SALES"
          maximum={14000}
          ticks={[0, 3500, 7000, 10500, 14000]}
        />
      </div>
    </section>
  )
}

export function RevenueChart() {
  return (
    <section className="dashboard-panel revenue-panel">
      <div className="revenue-chart-heading">
        <div>
          <strong>$633,000.00</strong>
          <span>Total Revenue (Last Year)</span>
        </div>
        <div className="revenue-legend">
          <span>
            <i className="legend-dot current" />
            This Year
          </span>
          <span>
            <i className="legend-dot previous" />
            Prev Year
          </span>
        </div>
        <button
          type="button"
          className="chart-period-button"
          aria-label="Select time period"
        >
          <CalendarDays size={15} />
        </button>
      </div>
      <div className="revenue-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueData}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid vertical={false} stroke="#ededed" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#737373', fontSize: 11 }}
              tickMargin={10}
            />
            <YAxis
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
              tickFormatter={(value: number) =>
                value === 0 ? '$0' : `$${value}K`
              }
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#737373', fontSize: 11 }}
              width={45}
            />
            <Tooltip
              contentStyle={{
                border: '1px solid #e5e5e5',
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(value) => [`$${Number(value)}K`]}
            />
            <Line
              type="linear"
              dataKey="previous"
              stroke="#b8b8b8"
              strokeWidth={1.5}
              dot={false}
            />
            <Line
              type="linear"
              dataKey="current"
              stroke="#171717"
              strokeWidth={1.8}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
