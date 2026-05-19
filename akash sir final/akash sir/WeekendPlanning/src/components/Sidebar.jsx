import { Calendar, MapPin, Users, MessageSquare, BarChart3, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Sidebar({ open, currentUser }) {
  const navigate = useNavigate()

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard', color: 'text-blue-500' },
    { icon: Calendar, label: 'Group Scheduling', path: '/scheduling', color: 'text-green-500' },
    { icon: MapPin, label: 'Activities', path: '/activities', color: 'text-orange-500' },
    { icon: MessageSquare, label: 'Polls & Voting', path: '/polls', color: 'text-purple-500' },
    { icon: Users, label: 'Social Connections', path: '/social', color: 'text-pink-500' },
  ]

  const adminItems = currentUser?.role === 'admin' ? [
    { icon: BarChart3, label: 'Admin Dashboard', path: '/admin', color: 'text-red-500' },
  ] : []

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" />}

      <div className={`${open ? 'translate-x-0' : '-translate-x-full'} fixed lg:translate-x-0 left-0 top-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl transition-transform duration-300 z-40 flex flex-col`}>
        
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center font-bold">WP</div>
            <div>
              <h2 className="font-bold text-lg">WeekendPlanning</h2>
              <p className="text-xs text-gray-400">Plan Together</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-2">
          <p className="text-xs font-semibold text-gray-400 px-3 mb-4">MAIN MENU</p>
          {menuItems.map((item) => (
            <button key={item.path} onClick={() => navigate(item.path)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              <item.icon size={20} className={item.color} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}

          {adminItems.length > 0 && (
            <>
              <p className="text-xs font-semibold text-gray-400 px-3 mt-6 mb-4">ADMIN</p>
              {adminItems.map((item) => (
                <button key={item.path} onClick={() => navigate(item.path)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <item.icon size={20} className={item.color} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </>
          )}
        </nav>
      </div>
    </>
  )
}
