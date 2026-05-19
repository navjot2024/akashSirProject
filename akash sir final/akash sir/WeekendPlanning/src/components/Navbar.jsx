import { Menu, Bell, User, LogOut, Settings } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ onMenuToggle, onLogout, currentUser }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={onMenuToggle} className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold text-indigo-600">Weekend Planning</h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell size={20} />
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4">
                <h3 className="font-bold mb-3">Notifications</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-blue-50 rounded"><p className="text-sm font-medium">New group invitation</p></div>
                  <div className="p-2 bg-green-50 rounded"><p className="text-sm font-medium">Poll closed</p></div>
                  <div className="p-2 bg-purple-50 rounded"><p className="text-sm font-medium">Schedule updated</p></div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                {currentUser?.name?.[0] || 'U'}
              </div>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100">
                  <User size={18} />
                  <span>Profile</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100">
                  <Settings size={18} />
                  <span>Settings</span>
                </a>
                <hr className="my-2" />
                <button onClick={onLogout} className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-red-600">
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
