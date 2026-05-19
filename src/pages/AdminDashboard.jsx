import { Activity, AlertTriangle, BarChart3, Download, ShieldCheck, Users } from 'lucide-react'
import { useState } from 'react'

export default function AdminDashboard() {
  const [range, setRange] = useState('7d')

  const stats = [
    { label: 'Total Users', value: '2,547', change: '+12.5%' },
    { label: 'Active Users', value: '1,892', change: '+8.3%' },
    { label: 'Groups', value: '384', change: '+5.2%' },
    { label: 'Events', value: '156', change: '+23.1%' }
  ]

  const alerts = [
    { id: 1, title: 'Drop in Sunday retention', level: 'medium' },
    { id: 2, title: 'Spam report spike in one circle', level: 'high' },
    { id: 3, title: 'Calendar sync retries elevated', level: 'low' }
  ]

  const topActivities = [
    { rank: 1, name: 'Mountain Hiking', participants: 234 },
    { rank: 2, name: 'Beach Volleyball', participants: 189 },
    { rank: 3, name: 'Rooftop Cafe', participants: 156 },
    { rank: 4, name: 'Art Gallery', participants: 128 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f7f2eb] to-[#eef3ff] px-4 py-6 text-gray-900 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="elegant-panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Operations Center</p>
              <h1 className="mt-2 text-4xl font-black text-gray-950">Admin Dashboard</h1>
              <p className="mt-2 text-sm text-gray-600">Monitor growth, risk, and platform health in one view.</p>
            </div>
            <div className="flex items-center gap-2">
              <select value={range} onChange={(event) => setRange(event.target.value)} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700">
                <option value="24h">Last 24h</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
              </select>
              <button className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-4 py-2 text-sm font-bold text-white">
                <Download size={15} /> Export
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="metric-card">
                <p className="text-xs text-gray-500">{stat.label}</p>
                <div className="mt-2 flex items-end justify-between">
                  <p className="text-3xl font-black text-gray-950">{stat.value}</p>
                  <span className="text-xs font-semibold text-[#0f766e]">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <h2 className="text-xl font-black text-gray-950">Top Activities</h2>
            <div className="mt-4 space-y-3">
              {topActivities.map((activity) => (
                <article key={activity.rank} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f766e] text-xs font-bold text-white">{activity.rank}</span>
                    <p className="text-sm font-semibold text-gray-900">{activity.name}</p>
                  </div>
                  <p className="text-sm font-bold text-gray-700">{activity.participants}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <button className="rounded-xl border border-dashed border-[#0f766e]/35 bg-white p-4 text-sm font-semibold text-gray-700"><Users className="mx-auto mb-2 text-[#0f766e]" size={22} /> User Management</button>
              <button className="rounded-xl border border-dashed border-[#0f766e]/35 bg-white p-4 text-sm font-semibold text-gray-700"><Activity className="mx-auto mb-2 text-[#0f766e]" size={22} /> Moderation</button>
              <button className="rounded-xl border border-dashed border-[#0f766e]/35 bg-white p-4 text-sm font-semibold text-gray-700"><BarChart3 className="mx-auto mb-2 text-[#0f766e]" size={22} /> Analytics</button>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[2rem] bg-gray-950 p-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Risk Radar</p>
              <p className="mt-2 text-2xl font-black">3 alerts require review</p>
              <p className="mt-2 text-sm text-gray-300">Prioritized by impact and confidence score.</p>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/80 p-5 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
              <h3 className="text-lg font-black text-gray-950">Live Alerts</h3>
              <div className="mt-4 space-y-3">
                {alerts.map((alert) => (
                  <div key={alert.id} className="rounded-xl border border-gray-200 bg-white p-3">
                    <p className="text-sm font-semibold text-gray-900">{alert.title}</p>
                    <p className="mt-1 text-xs text-gray-500 capitalize">{alert.level} priority</p>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full rounded-full bg-[#0f766e] py-2 text-sm font-bold text-white"><AlertTriangle className="mr-1 inline" size={14} /> Review Incidents</button>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/80 p-5 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
              <p className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500"><ShieldCheck size={13} /> Compliance</p>
              <p className="mt-2 text-sm text-gray-700">No critical data-protection violations detected in this period.</p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}
