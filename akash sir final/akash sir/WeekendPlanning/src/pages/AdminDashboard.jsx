import { BarChart3, Users, Activity, Download } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '2,547', change: '+12.5%', color: 'text-blue-600' },
    { label: 'Active Users', value: '1,892', change: '+8.3%', color: 'text-green-600' },
    { label: 'Total Groups', value: '384', change: '+5.2%', color: 'text-purple-600' },
    { label: 'Events This Week', value: '156', change: '+23.1%', color: 'text-orange-600' },
  ]

  const topActivities = [
    { rank: 1, name: 'Mountain Hiking', participants: 234, rating: 4.9 },
    { rank: 2, name: 'Beach Volleyball', participants: 189, rating: 4.8 },
    { rank: 3, name: 'Rooftop Cafe', participants: 156, rating: 4.8 },
    { rank: 4, name: 'Water Sports', participants: 142, rating: 4.9 },
    { rank: 5, name: 'Art Gallery', participants: 128, rating: 4.7 },
  ]

  const feedback = [
    { id: 1, user: 'Sarah J.', rating: 5, text: 'Amazing app! Makes planning easy.' },
    { id: 2, user: 'Mike C.', rating: 4, text: 'Great features, needs more filters.' },
    { id: 3, user: 'Emily D.', rating: 5, text: 'Scheduling is a game changer!' },
  ]

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor performance and manage platform</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Download size={18} /> Export
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <div className="flex justify-between items-end mt-2">
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <span className="text-green-600 text-sm">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-6">Top Activities</h2>
          <div className="space-y-4">
            {topActivities.map(activity => (
              <div key={activity.rank} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-indigo-500">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      #{activity.rank}
                    </div>
                    <h3 className="font-bold">{activity.name}</h3>
                  </div>
                  <p className="font-bold">{activity.participants}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <span key={i}>{i < Math.floor(activity.rating) ? '⭐' : '☆'}</span>)}
                  <span className="text-xs text-gray-600">{activity.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-6">User Feedback</h2>
          <div className="space-y-4">
            {feedback.map(f => (
              <div key={f.id} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold">{f.user}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <span key={i}>{i < f.rating ? '⭐' : '☆'}</span>)}
                  </div>
                </div>
                <p className="text-sm text-gray-700">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-6">Management Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-600 text-center">
            <Users className="mx-auto mb-2 text-gray-600" size={32} />
            <p className="font-medium">User Management</p>
          </button>
          <button className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-600 text-center">
            <Activity className="mx-auto mb-2 text-gray-600" size={32} />
            <p className="font-medium">Activity Moderation</p>
          </button>
          <button className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-600 text-center">
            <BarChart3 className="mx-auto mb-2 text-gray-600" size={32} />
            <p className="font-medium">Analytics</p>
          </button>
        </div>
      </div>
    </div>
  )
}
