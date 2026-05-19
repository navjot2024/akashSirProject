import { Calendar, MapPin, Users, MessageSquare, BarChart3, Home, Sparkles, Plus, CheckCircle2, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Sidebar({ open, currentUser }) {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard', accent: 'from-[#5B5FEF] to-[#7A7EFF]' },
    { icon: Calendar, label: 'Group Scheduling', path: '/scheduling', accent: 'from-emerald-500 to-green-500' },
    { icon: MapPin, label: 'Activities', path: '/activities', accent: 'from-[#0EA5A4] to-teal-500' },
    { icon: MessageSquare, label: 'Polls & Voting', path: '/polls', accent: 'from-fuchsia-500 to-pink-500' },
    { icon: Users, label: 'Social Connections', path: '/social', accent: 'from-cyan-500 to-sky-500' }
  ]

  const adminItems = currentUser?.role === 'admin' ? [
    { icon: BarChart3, label: 'Admin Dashboard', path: '/admin', accent: 'from-red-500 to-rose-500' }
  ] : []

  const goToPlanning = () => navigate('/scheduling')
  const goToDiscovery = () => navigate('/activities')

  const currentPath = location.pathname

  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-slate-950/50 backdrop-blur-sm lg:hidden" />}

      <motion.aside
        initial={false}
        animate={{ x: open ? 0 : -320 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed left-0 top-0 z-40 flex h-screen w-[300px] flex-col border-r border-white/50 bg-gradient-to-b from-[#FFF8F0] via-[#F7F2EB] to-[#EEF3FF] text-gray-900 shadow-[24px_0_80px_rgba(15,23,42,0.08)] lg:translate-x-0"
      >
        <div className="relative border-b border-white/60 px-6 py-6">
          <div className="absolute left-0 top-10 h-24 w-24 rounded-full bg-[#0F766E]/12 blur-3xl" />
          <div className="absolute right-0 top-24 h-20 w-20 rounded-full bg-[#2563EB]/12 blur-3xl" />

          <div className="relative flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#2563EB] font-black text-white shadow-lg shadow-teal-500/20">
              G
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-500">Gather</p>
              <h2 className="text-lg font-black tracking-tight text-gray-900">Weekend Planner</h2>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          <p className="px-2 pb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Main Menu</p>
          {menuItems.map((item) => {
            const active = currentPath === item.path
            const Icon = item.icon
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 hover:translate-x-1 ${
                  active ? 'border border-[#0F766E]/20 bg-white shadow-[0_12px_40px_rgba(15,118,110,0.12)]' : 'hover:bg-white/70'
                }`}
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} ${active ? 'shadow-lg shadow-black/20' : 'opacity-80 group-hover:opacity-100'}`}>
                  <Icon size={18} className="text-white" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500">{active ? 'Active view' : 'Open page'}</p>
                </div>
              </button>
            )
          })}

          <div className="px-2 pt-4">
            <div className="rounded-[1.5rem] border border-white/60 bg-white/80 p-4 shadow-[0_12px_30px_rgba(17,17,17,0.06)] backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-500">Quick Actions</p>
              <div className="mt-3 grid gap-2">
                <button onClick={goToPlanning} className="inline-flex items-center justify-between rounded-xl bg-[#0F766E] px-4 py-2.5 text-left text-sm font-semibold text-white">
                  <span className="inline-flex items-center gap-2"><Plus size={14} /> New plan</span>
                  <CheckCircle2 size={14} />
                </button>
                <button onClick={goToDiscovery} className="inline-flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-left text-sm font-semibold text-gray-700">
                  <span className="inline-flex items-center gap-2"><Filter size={14} /> Smart filters</span>
                  <span className="text-xs text-gray-500">Live</span>
                </button>
              </div>
            </div>
          </div>

          {adminItems.length > 0 && (
            <div className="pt-4">
              <p className="px-2 pb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Admin</p>
              {adminItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className="group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 hover:translate-x-1 hover:bg-white/70"
                  >
                    <span className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} shadow-lg shadow-black/20`}>
                      <Icon size={18} className="text-white" />
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">{item.label}</p>
                      <p className="text-xs text-gray-500">Workspace analytics</p>
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </nav>

        <div className="border-t border-white/60 p-4">
          <div className="rounded-[1.5rem] border border-white/60 bg-white/80 p-4 backdrop-blur-md shadow-[0_12px_30px_rgba(17,17,17,0.06)]">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#2563EB] font-black text-white">
                {(currentUser?.name?.[0] || 'G').toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gray-900">{currentUser?.name || 'Guest User'}</p>
                <p className="truncate text-xs text-gray-500">Premium planning mode</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5"><Sparkles size={12} className="text-[#0F766E]" /> 8 synced</span>
              <span>3 plans locked</span>
            </div>
            <div className="mt-4 rounded-xl border border-dashed border-gray-300 bg-white px-3 py-2 text-xs text-gray-600">
              <p className="font-semibold text-gray-800">Workspace progress</p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#0F766E] to-[#2563EB]" />
              </div>
              <p className="mt-2">68% setup complete</p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  )
}
