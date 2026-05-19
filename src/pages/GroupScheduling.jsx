import { Calendar, Lock, Repeat2, Users, CheckCircle2, AlertCircle, MapPin, Clock, Cloud, Mail, Send, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import Footer from '../components/Footer'

export default function GroupScheduling() {
  const [selectedSlot, setSelectedSlot] = useState({ day: 'SAT 19', time: '20:00' })
  const [duration, setDuration] = useState('2h')
  const [lastSync, setLastSync] = useState('2 mins ago')
  const [planState, setPlanState] = useState('Draft')
  const [statusMessage, setStatusMessage] = useState('Pick a slot and lock it when ready.')
  
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

  const handleResync = () => {
    setLastSync('Just now')
    setStatusMessage('Calendars resynced successfully.')
  }

  const handleLock = () => {
    setPlanState('Locked')
    setStatusMessage(`Plan locked for ${selectedSlot.day} at ${selectedSlot.time}.`)
  }

  const handleCreateEvent = () => {
    setPlanState('Event created')
    setStatusMessage('Event created and ready to send invites.')
  }

  const handleInvite = (label) => {
    setStatusMessage(`${label} prepared for ${selectedSlot.day} ${selectedSlot.time}.`)
  }

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
            <button onClick={handleResync} className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Repeat2 size={18} /> RESYNC CALENDARS
            </button>
            <button onClick={handleLock} className="flex items-center gap-2 px-6 py-2 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600">
              <Lock size={18} /> {planState === 'Locked' ? 'PLAN LOCKED' : 'LOCK SAT 20:00'}
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">{statusMessage}</p>
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
              <button onClick={handleCreateEvent} className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                <CheckCircle2 size={18} /> CREATE EVENT
              </button>
              <p className="mt-3 text-xs text-gray-300">{planState}</p>
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

      {/* Travel & Weather Section */}
      <div className="mt-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Travel Time Estimates */}
            <div className="rounded-[2rem] border border-white/50 bg-white/75 p-8 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={22} className="text-[#0F766E]" />
                <h3 className="text-2xl font-black text-gray-900">Travel Times</h3>
              </div>
              <p className="text-sm text-gray-600 mb-6">Estimated travel from group members' locations (Saturday 8pm pickup)</p>
              
              <div className="space-y-4">
                {[
                  { name: 'Alex Rivera', location: 'West LA', time: '12 min', distance: '4.2 km' },
                  { name: 'Marcus Tate', location: 'Downtown', time: '28 min', distance: '12.1 km' },
                  { name: 'Elena Vega', location: 'Silver Lake', time: '8 min', distance: '2.3 km' },
                  { name: 'Sami Park', location: 'Silverlake', time: '6 min', distance: '1.8 km' }
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 hover:shadow-md transition-all">
                    <div>
                      <p className="font-bold text-gray-900">{member.name}</p>
                      <p className="text-xs text-gray-600 flex items-center gap-1 mt-1"><MapPin size={12} /> {member.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#0F766E]">{member.time}</p>
                      <p className="text-xs text-gray-600">{member.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button onClick={() => setStatusMessage('Transportation plan prepared for the selected window.')} className="w-full mt-6 p-3 rounded-full bg-gradient-to-r from-[#0F766E] to-[#2563EB] text-white font-bold text-sm hover:shadow-lg transition-all">
                📍 Plan Group Transportation
              </button>
            </div>

            {/* Weather Impact & Conflicts */}
            <div className="rounded-[2rem] border border-white/50 bg-white/75 p-8 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <Cloud size={22} className="text-blue-600" />
                <h3 className="text-2xl font-black text-gray-900">Weather & Conflicts</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⛅</span>
                      <div>
                        <p className="font-bold text-gray-900">Saturday Weather</p>
                        <p className="text-xs text-gray-600">Partly Cloudy, 68°F</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-blue-600">✓ Good</span>
                  </div>
                  <p className="text-xs text-gray-700">Perfect for outdoor activities. 15% chance of rain.</p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⚠️</span>
                      <div>
                        <p className="font-bold text-gray-900">Time Conflicts</p>
                        <p className="text-xs text-gray-600">Saturday 8pm - 10pm</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-amber-600">1 conflict</span>
                  </div>
                  <p className="text-xs text-gray-700">Jordan has a work meeting until 9:30pm. Delay start or exclude from first activity.</p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                  <p className="font-bold text-gray-900 mb-2">Conflict Resolution</p>
                  <button onClick={() => setStatusMessage('Push start to 10pm applied to the schedule.')} className="w-full mb-2 p-2 rounded-lg bg-white text-[#0F766E] font-bold text-xs hover:bg-green-100 transition-all">
                    ✓ Push start to 10pm
                  </button>
                  <button onClick={() => setStatusMessage('Schedule split into two groups.')} className="w-full p-2 rounded-lg bg-white text-[#0F766E] font-bold text-xs hover:bg-green-100 transition-all">
                    ✓ Split into two groups
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meeting Invites & Recommendations */}
      <div className="mt-12 px-4 sm:px-6 lg:px-10 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Send Invites */}
            <div className="rounded-[2rem] border border-white/50 bg-white/75 p-8 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <Mail size={22} className="text-purple-600" />
                <h3 className="text-xl font-black text-gray-900">Send Invites</h3>
              </div>
              
              <p className="text-sm text-gray-600 mb-6">Send calendar invites for the selected time</p>
              
              <button onClick={() => handleInvite('Invite to all group members')} className="w-full p-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2 mb-3">
                <Send size={16} /> Send to All (8)
              </button>
              
              <button onClick={() => handleInvite('Invite to Group A')} className="w-full p-3 rounded-full border-2 border-purple-500 text-purple-600 font-bold text-sm hover:bg-purple-50 transition-all">
                Send to Group A (4)
              </button>

              <div className="mt-6 p-4 rounded-xl bg-purple-50">
                <p className="text-xs font-semibold text-purple-900 mb-2">INVITE FORMAT</p>
                <p className="text-xs text-purple-700">Calendar invite + message + Slack notification</p>
              </div>
            </div>

            {/* Smart Recommendations */}
            <div className="rounded-[2rem] border border-white/50 bg-white/75 p-8 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp size={22} className="text-[#0F766E]" />
                <h3 className="text-xl font-black text-gray-900">AI Insights</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-teal-50 border border-teal-200">
                  <p className="text-xs font-bold text-[#0F766E]">💡 Recommendation</p>
                  <p className="text-xs text-gray-700 mt-1">Saturday 8pm has 100% attendance rate historically</p>
                </div>
                
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-xs font-bold text-green-700">✓ Pattern Match</p>
                  <p className="text-xs text-gray-700 mt-1">This group meets Saturdays 8 times/month</p>
                </div>
                
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold text-blue-700">📊 Activity Peak</p>
                  <p className="text-xs text-gray-700 mt-1">Weekend activity peaks Friday-Saturday</p>
                </div>
              </div>
            </div>

            {/* Confidence Score */}
            <div className="rounded-[2rem] border border-white/50 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={22} className="text-blue-600" />
                <h3 className="text-xl font-black text-gray-900">Schedule Score</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-gray-900">Attendance</span>
                    <span className="text-sm font-bold text-blue-600">96%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-96 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" style={{width: '96%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-gray-900">Feasibility</span>
                    <span className="text-sm font-bold text-blue-600">89%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600" style={{width: '89%'}}></div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/80 border border-blue-200">
                  <p className="text-xs font-black text-blue-900">OVERALL SCORE</p>
                  <p className="text-3xl font-black text-blue-600 mt-2">9.2/10</p>
                  <p className="text-xs text-gray-600 mt-2">Highly recommended slot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
