import { Check, Clock } from 'lucide-react'

export default function GroupScheduling() {
  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const members = [
    { name: 'You', availability: [false, true, true, false, true, true, true] },
    { name: 'Sarah', availability: [true, true, false, true, true, false, true] },
    { name: 'Mike', availability: [true, false, true, true, true, true, false] },
  ]

  const bestDays = days.map((day, i) => ({
    day,
    available: members.filter(m => m.availability[i]).length,
    total: members.length
  })).sort((a, b) => b.available - a.available).slice(0, 3)

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Group Scheduling</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {bestDays.map((day, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold">{day.day}</h3>
            <p className="text-3xl font-bold text-green-600">{day.available}/{day.total}</p>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: `${(day.available/day.total)*100}%`}}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6">Weekly Availability</h2>

          <div className="grid grid-cols-7 gap-2 mb-2">
            {days.map(d => <div key={d} className="text-center font-bold text-sm">{d}</div>)}
          </div>

          <div className="space-y-3">
            {members.map(member => (
              <div key={member.name} className="flex items-center gap-3">
                <div className="w-20 font-medium text-sm">{member.name}</div>
                <div className="flex-1 grid grid-cols-7 gap-2">
                  {member.availability.map((avail, i) => (
                    <button key={i} className={`aspect-square rounded-lg font-bold ${avail ? 'bg-indigo-500 text-white' : 'bg-gray-100'}`}>
                      {avail ? '✓' : '✕'}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold mb-4">Group Members</h2>
          <div className="space-y-3">
            {members.map(m => {
              const avail = m.availability.filter(a => a).length
              return (
                <div key={m.name} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-bold text-sm">{m.name}</p>
                  <p className="text-xs text-gray-500">{avail}/7 days</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-6 mt-8 border border-indigo-200">
        <h2 className="text-xl font-bold mb-3">🤖 AI Recommendation</h2>
        <p className="text-gray-700">Based on availability analysis, <strong>Saturday 10 AM - 2 PM</strong> is optimal with 100% availability!</p>
      </div>
    </div>
  )
}
