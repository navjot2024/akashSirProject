import { Calendar, Clock, Users, Bell, Plus } from 'lucide-react'

export default function Dashboard({ currentUser }) {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, {currentUser?.name}! 👋</h1>
      <p className="text-gray-600 mb-8">Here's what's happening with your weekend plans</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm">Active Groups</p>
          <p className="text-3xl font-bold">3</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <p className="text-gray-600 text-sm">Upcoming Events</p>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
          <p className="text-gray-600 text-sm">Open Polls</p>
          <p className="text-3xl font-bold">2</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-pink-500">
          <p className="text-gray-600 text-sm">Notifications</p>
          <p className="text-3xl font-bold">4</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Plus size={18} /> New Event
            </button>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Beach Day', date: 'May 18', time: '10:00 AM', group: 'Beach Squad', status: 'confirmed' },
              { title: 'Movie Night', date: 'May 19', time: '07:00 PM', group: 'Movie Night', status: 'pending' },
              { title: 'Hiking Trip', date: 'May 20', time: '08:00 AM', group: 'Hiking Crew', status: 'confirmed' }
            ].map((event, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6 hover:shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.group}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {event.status}
                  </span>
                </div>
                <div className="flex gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><Calendar size={16} /> {event.date}</div>
                  <div className="flex items-center gap-2"><Clock size={16} /> {event.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Your Groups</h2>
            <div className="space-y-3">
              {['🏖️ Beach Squad', '⛰️ Hiking Crew', '🎬 Movie Night'].map((group, i) => (
                <div key={i} className="bg-white rounded-lg shadow p-4 hover:shadow-lg cursor-pointer">
                  <p className="font-bold">{group}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
            <h2 className="font-bold mb-4">Quick Actions</h2>
            <div className="space-y-2 text-sm">
              <button className="w-full p-2 bg-white/20 rounded hover:bg-white/30">📅 Check Availability</button>
              <button className="w-full p-2 bg-white/20 rounded hover:bg-white/30">🎪 Discover Activities</button>
              <button className="w-full p-2 bg-white/20 rounded hover:bg-white/30">🗳️ Create a Poll</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
