import { Bell, ChevronDown, Search, Menu, Sparkles, LayoutDashboard, Plus, Command } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar({ onMenuToggle, onLogout, currentUser }) {
  const navigate = useNavigate()
  const [showDropdown, setShowDropdown] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const notifications = [
    { title: 'New activity match found', detail: 'Gold-Line Vinyl Bar is trending in your circle.' },
    { title: 'Scheduling update', detail: '3 friends synced calendars in the last hour.' },
    { title: 'Poll reminder', detail: 'Voting closes at 6:00 PM today.' }
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/80 text-gray-900 shadow-[0_8px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="flex items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={onMenuToggle}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#2563EB] text-white shadow-lg shadow-teal-500/25">
            <Sparkles size={18} />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Gather</p>
            <h1 className="truncate text-lg font-black tracking-tight text-gray-900 sm:text-xl">Weekend Planning / Activity Discovery</h1>
          </div>
        </div>

        <div className="mx-auto hidden max-w-2xl flex-1 lg:block">
          <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search activities, venues, people..."
              className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button onClick={() => navigate('/activities')} className="hidden items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:shadow-md xl:inline-flex">
            <Command size={16} /> Command
          </button>
          <button onClick={() => navigate('/scheduling')} className="hidden items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:shadow-md xl:inline-flex">
            <Plus size={16} /> Quick Add
          </button>
          <div className="relative">
            <button
              onClick={() => setShowNotifications((value) => !value)}
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#0F766E] ring-2 ring-white animate-pulse" />
            </button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-80 overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.2)] backdrop-blur-xl"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-900">Notifications</h3>
                    <span className="rounded-full bg-[#0F766E]/10 px-2 py-1 text-[11px] font-semibold text-[#0F766E]">3 new</span>
                  </div>
                  <div className="space-y-3">
                    {notifications.map((item, index) => (
                      <button
                        key={item.title}
                        onClick={() => {
                          setShowNotifications(false)
                          navigate(index === 0 ? '/activities' : index === 1 ? '/scheduling' : '/polls')
                        }}
                        className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-3 text-left"
                      >
                        <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">{item.detail}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowDropdown((value) => !value)}
              className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2.5 text-left text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#2563EB] text-sm font-black text-white shadow-lg">
                {currentUser?.name?.[0] || 'G'}
              </div>
              <div className="hidden md:block">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">Welcome</p>
                <p className="text-sm font-semibold text-gray-900">{currentUser?.name || 'Guest'}</p>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </button>

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-56 overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.2)] backdrop-blur-xl"
                >
                  <div className="border-b border-gray-100 px-4 py-4">
                    <p className="text-sm font-semibold text-gray-900">{currentUser?.name || 'Guest'}</p>
                    <p className="text-xs text-gray-500">Premium workspace</p>
                  </div>
                  <button onClick={() => navigate('/dashboard')} className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50">
                    <LayoutDashboard size={15} className="text-[#0F766E]" /> Workspace overview
                  </button>
                  <button onClick={() => navigate('/polls')} className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50">
                    <Plus size={15} className="text-[#0F766E]" /> Create new plan
                  </button>
                  <button onClick={onLogout} className="w-full px-4 py-3 text-left text-sm text-[#0F766E] transition-colors hover:bg-gray-50">
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}
