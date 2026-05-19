import { Calendar, Lock, Repeat2, Users, CheckCircle2, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import Footer from '../components/Footer'

export default function GroupScheduling() {
  const [selectedSlot, setSelectedSlot] = useState({ day: 'SAT 19', time: '20:00' })
  const [duration, setDuration] = useState('2h')
  
  // Time slots and days
  const times = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
  const days = ['FRI 18', 'SAT 19', 'SUN 20', 'MON 21', 'TUE 22', 'WED 23', 'THU 24']
  
  // Availability grid: 0-8 friends free for each slot
  const availabilityGrid = [
    [2, 5, 6, 3, 1, 0, 1],  // 10:00
    [3, 7, 7, 2, 2, 1, 2],  // 12:00
    [4, 8, 7, 3, 2, 2, 3],  // 14:00
    [3, 7, 5, 4, 3, 2, 4],  // 16:00
    [5, 7, 4, 5, 4, 3, 5],  // 18:00
    [7, 8, 3, 4, 3, 4, 6],  // 20:00
    [6, 7, 2, 3, 2, 5, 7]   // 22:00
  ]

  // Friend data with calendar source
  const friends = [
    { name: 'Alex Rivera', source: 'GOOGLE CAL', status: 'connected', color: 'bg-green-500' },
    { name: 'Chloe Chen', source: 'GOOGLE CAL', status: 'connected', color: 'bg-green-500' },
    { name: 'Marcus Tate', source: 'SET BY HAND', status: 'connected', color: 'bg-yellow-500' },
    { name: 'Elena Vega', source: 'OUTLOOK', status: 'connected', color: 'bg-green-500' },
    { name: 'Jordan Sims', source: 'INVITE SENT', status: 'pending', color: 'bg-gray-400' },
    { name: 'Sami Park', source: 'GOOGLE CAL', status: 'connected', color: 'bg-green-500' },
    { name: 'Riley Knox', source: 'GOOGLE CAL', status: 'connected', color: 'bg-green-500' },
    { name: 'Leo Marsh', source: 'SET BY HAND', status: 'connected', color: 'bg-yellow-500' },
  ]

  const getAvailabilityColor = (count) => {
    if (count === 0) return 'bg-gray-100'
    if (count === 1 || count === 2) return 'bg-teal-100'
    if (count === 3 || count === 4) return 'bg-teal-200'
    if (count === 5 || count === 6) return 'bg-teal-400'
    return 'bg-teal-600'
  }

  const getTextColor = (count) => {
    if (count >= 5) return 'text-white font-bold'
    if (count > 0) return 'text-teal-900 font-bold'
    return 'text-gray-400'
  }

  const runnerUpWindows = [
    { day: 'Friday', time: '18:00 — 20:00', available: '7/8' },
    { day: 'Sat', time: '12:00 — 14:00', available: '7/8' }
  ]

  const confidence = selectedSlot.day === 'SAT 19' && selectedSlot.time === '20:00' ? 96 : 82

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F7F2EB] to-[#EEF3FF] text-gray-900">
      {/* Header */}
      <div className="border-b border-white/50 bg-white/75 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-10">
          <p className="text-teal-500 font-semibold text-xs tracking-widest uppercase mb-4">
            GROUP · TAHOE TRIP 2024
          </p>
          <h1 className="text-5xl font-black text-gray-900 mb-4">OVERLAP GRID</h1>
          <p className="text-gray-600 italic text-lg">Finding the perfect window for all 8 members.</p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {['1h', '2h', '3h'].map((slotDuration) => (
              <button
                key={slotDuration}
                onClick={() => setDuration(slotDuration)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-all ${duration === slotDuration ? 'bg-gray-900 text-white' : 'border border-gray-300 bg-white text-gray-600'}`}
              >
                {slotDuration} window
              </button>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Repeat2 size={18} /> RESYNC CALENDARS
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600">
              <Lock size={18} /> LOCK SAT 20:00
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar Grid */}
          <div className="lg:col-span-3">
            {/* Days Header */}
            <div className="grid gap-1" style={{ gridTemplateColumns: '80px repeat(7, 1fr)' }}>
              <div></div>
              {days.map(day => (
                <div key={day} className="text-center text-xs font-bold text-gray-700 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Time Slots Grid */}
            <div className="space-y-1 mb-6">
              {times.map((time, timeIdx) => (
                <div key={time} className="grid gap-1" style={{ gridTemplateColumns: '80px repeat(7, 1fr)' }}>
                  <div className="text-xs font-semibold text-gray-700 py-3">{time}</div>
                  {days.map((day, dayIdx) => {
                    const count = availabilityGrid[timeIdx][dayIdx]
                    const isSelected = selectedSlot.day === day && selectedSlot.time === time
                    return (
                      <button
                        key={`${time}-${day}`}
                        onClick={() => setSelectedSlot({ day, time })}
                        className={`py-6 rounded-lg border-2 transition-all ${
                          isSelected 
                            ? 'border-black shadow-lg' 
                            : 'border-transparent hover:border-gray-300'
                        } ${getAvailabilityColor(count)}`}
                      >
                        <div className={`text-sm ${getTextColor(count)}`}>
                          {count > 0 && `${count}/8`}
                        </div>
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>

            {/* Friends Free Legend */}
            <div className="flex items-center justify-center gap-4 pt-6 border-t">
              <span className="text-xs font-semibold text-gray-700">FRIENDS FREE</span>
              <div className="flex gap-2">
                {['0', '1-2', '3-4', '5-6', '7-8'].map((label, i) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div className={`w-6 h-6 rounded-sm ${
                      i === 0 ? 'bg-gray-100' :
                      i === 1 ? 'bg-teal-100' :
                      i === 2 ? 'bg-teal-200' :
                      i === 3 ? 'bg-teal-400' :
                      'bg-teal-600'
                    }`}></div>
                    <span className="text-xs text-gray-600">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Greedy Match Card */}
            <div className="rounded-[2rem] bg-gray-900 text-white p-8 shadow-[0_20px_50px_rgba(17,17,17,0.12)]">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">GREEDY MATCH</p>
              <h2 className="text-5xl font-black mb-2">{selectedSlot.day}</h2>
              <p className="text-2xl font-bold mb-6">{selectedSlot.time}</p>
              <p className="text-sm text-gray-300 mb-4">8 of 8 free · {duration} window</p>
              <div className="mb-6">
                <div className="mb-1 flex items-center justify-between text-xs text-gray-300">
                  <span>AI confidence</span>
                  <span className="font-bold text-[#2563EB]">{confidence}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-700">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#0F766E] to-[#2563EB]" style={{ width: `${confidence}%` }} />
                </div>
              </div>
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                <CheckCircle2 size={18} /> CREATE EVENT
              </button>
            </div>

            {/* Runner-up Windows */}
            <div className="rounded-[2rem] border border-white/50 bg-white/75 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 flex items-center gap-2">
                <AlertCircle size={14} /> RUNNER-UP WINDOWS
              </p>
              <div className="space-y-4">
                {runnerUpWindows.map((window, i) => (
                  <div key={i} className="pb-4 border-b last:border-b-0">
                    <p className="text-xs font-semibold text-gray-600">{window.day}</p>
                    <p className="text-sm font-bold text-gray-900">{window.time}</p>
                    <p className="text-sm text-teal-500 font-bold mt-1">{window.available}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="rounded-[2rem] border border-blue-100 bg-blue-50/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <Users size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase text-blue-700 mb-1">Group Size</p>
                  <p className="text-2xl font-black text-blue-900">8 Members</p>
                  <p className="text-xs text-blue-600 mt-1">6 calendars synced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Sync Section */}
      <div className="mt-12 border-t border-white/50 bg-white/75 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-8">CALENDAR SYNC · 6 OF 8 CONNECTED</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {friends.map((friend, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${friend.color}`}></div>
                <div>
                  <p className="font-bold text-sm text-gray-900">{friend.name}</p>
                  <p className="text-xs text-gray-600">{friend.source}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sync Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t">
            <div>
              <p className="text-xs font-bold uppercase text-gray-700 mb-2">Last Sync</p>
              <p className="text-lg font-black text-gray-900">2 mins ago</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-gray-700 mb-2">Data Freshness</p>
              <p className="text-lg font-black text-green-600">Live</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-gray-700 mb-2">Next Sync</p>
              <p className="text-lg font-black text-gray-900">Auto · 5m</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
