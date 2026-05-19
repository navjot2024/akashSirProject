import { Heart, MapPin, MessageCircle, UserPlus, Users, TrendingUp, Share2, Award, Zap, CheckCircle } from 'lucide-react'
import { useMemo, useState } from 'react'

export default function SocialConnections() {
  const [connections, setConnections] = useState([
    { id: 1, name: 'Alex Johnson', bio: 'Adventure seeker', interests: ['Hiking', 'Beach'], location: '2 km', connected: true, score: 86 },
    { id: 2, name: 'Sophia Chen', bio: 'Foodie explorer', interests: ['Dining', 'Art'], location: '1.5 km', connected: false, score: 91 },
    { id: 3, name: 'Marcus Webb', bio: 'Sports fan', interests: ['Sports', 'Gaming'], location: '3 km', connected: true, score: 76 },
    { id: 4, name: 'Emma Roberts', bio: 'Creative planner', interests: ['Art', 'Music'], location: '2.8 km', connected: false, score: 88 }
  ])
  const [filter, setFilter] = useState('all')
  const [notice, setNotice] = useState('Connect with people nearby to grow your planning network.')
  const [activeChat, setActiveChat] = useState(null)

  const circles = [
    { id: 1, name: 'Beach Lovers', members: 12, joined: true },
    { id: 2, name: 'Food Circuit', members: 28, joined: true },
    { id: 3, name: 'Trail Club', members: 15, joined: false }
  ]

  const shownConnections = useMemo(() => {
    if (filter === 'connected') return connections.filter((connection) => connection.connected)
    if (filter === 'suggested') return connections.filter((connection) => !connection.connected)
    return connections
  }, [connections, filter])

  const handleConnect = (id) => {
    setConnections((prev) => prev.map((item) => (item.id === id ? { ...item, connected: !item.connected } : item)))
    setNotice('Connection status updated.')
  }

  const handleMessage = (user) => {
    setActiveChat(user.name)
    setNotice(`Chat opened with ${user.name}.`)
  }

  const handleJoinCircle = (circleId) => {
    setNotice('Circle membership updated.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f7f2eb] to-[#eef3ff] px-4 py-6 text-gray-900 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="elegant-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">People and Circles</p>
          <h1 className="mt-2 text-4xl font-black text-gray-950">Social Connections</h1>
          <p className="mt-2 text-sm text-gray-600">Grow your planning network with compatibility-first suggestions.</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="metric-card"><p className="text-xs text-gray-500">Connected</p><p className="mt-2 text-3xl font-black">{connections.filter((c) => c.connected).length}</p></div>
            <div className="metric-card"><p className="text-xs text-gray-500">Suggestions</p><p className="mt-2 text-3xl font-black">{connections.filter((c) => !c.connected).length}</p></div>
            <div className="metric-card"><p className="text-xs text-gray-500">Shared Circles</p><p className="mt-2 text-3xl font-black">{circles.length}</p></div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-black text-gray-950">People nearby</h2>
              <div className="flex gap-2">
                {['all', 'connected', 'suggested'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${filter === item ? 'bg-gray-950 text-white' : 'border border-gray-200 bg-white text-gray-600'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {shownConnections.map((user) => (
                <article key={user.id} className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-[#fffdfa]">
                  <div className="h-16 bg-gradient-to-r from-[#0f766e] via-[#2563eb] to-[#0ea5a4]" />
                  <div className="p-4">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-black text-gray-950">{user.name}</h3>
                        <p className="text-xs text-gray-500">{user.bio}</p>
                      </div>
                      <span className="rounded-full bg-[#0f766e]/10 px-2.5 py-1 text-xs font-bold text-[#0f766e]">{user.score}% match</span>
                    </div>

                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {user.interests.map((interest) => (
                        <span key={interest} className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-600">{interest}</span>
                      ))}
                    </div>

                    <p className="mb-4 text-xs text-gray-500"><MapPin className="mr-1 inline" size={12} /> {user.location}</p>

                    <div className="flex gap-2">
                      {user.connected ? (
                        <>
                          <button onClick={() => handleMessage(user)} className="flex-1 rounded-full bg-gray-950 py-2 text-xs font-bold text-white"><MessageCircle className="mr-1 inline" size={14} /> Message</button>
                          <button onClick={() => handleConnect(user.id)} className="rounded-full border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700">Connected</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => handleConnect(user.id)} className="flex-1 rounded-full bg-gradient-to-r from-[#0f766e] to-[#2563eb] py-2 text-xs font-bold text-white"><UserPlus className="mr-1 inline" size={14} /> Connect</button>
                          <button className="rounded-full border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700"><Heart size={14} /></button>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[2rem] bg-gray-950 p-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Network Pulse</p>
              <p className="mt-2 text-3xl font-black">High Activity</p>
              <p className="mt-2 text-sm text-gray-300">Your circles are most active between Friday 7pm and Saturday 11am.</p>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/80 p-5 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
              <h3 className="text-lg font-black text-gray-950">Activity Circles</h3>
              <div className="mt-4 space-y-3">
                {circles.map((circle) => (
                  <div key={circle.id} className="rounded-xl border border-gray-200 bg-white p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-semibold text-gray-900">{circle.name}</p>
                      <span className="text-xs text-gray-500">{circle.members} members</span>
                    </div>
                    <button onClick={() => handleJoinCircle(circle.id)} className={`w-full rounded-full py-2 text-xs font-bold ${circle.joined ? 'bg-gray-100 text-gray-700' : 'bg-[#0f766e] text-white'}`}>
                      {circle.joined ? 'Member' : 'Join Circle'}
                    </button>
                  </div>
                ))}
              </div>
              <button onClick={() => setFilter('suggested')} className="mt-4 w-full rounded-full border border-dashed border-gray-300 py-2 text-xs font-semibold text-gray-600"><Users className="mr-1 inline" size={14} /> Discover More</button>
            </div>
          </aside>
        </section>

        {/* Compatibility & Activity Suggestions */}
        <section className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={20} className="text-blue-600" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-600">Smart Matching</p>
              </div>
              <h3 className="text-2xl font-black text-gray-950">Compatibility Scores</h3>
              <p className="mt-2 text-sm text-gray-600">See how well you match with people based on interests</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Alex Johnson', score: 92, common: ['Hiking', 'Beach', 'Photography'], mutual: 3 },
              { name: 'Sophia Chen', score: 88, common: ['Dining', 'Art', 'Music'], mutual: 2 },
              { name: 'Marcus Webb', score: 76, common: ['Sports', 'Gaming'], mutual: 1 },
              { name: 'Emma Roberts', score: 85, common: ['Art', 'Music', 'Coffee'], mutual: 4 }
            ].map((person, i) => (
              <div key={i} className="p-4 rounded-xl bg-white hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-gray-900">{person.name}</p>
                    <p className="text-xs text-gray-600 flex items-center gap-1 mt-1"><Users size={12} /> {person.mutual} mutual connections</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-blue-600">{person.score}%</div>
                    <p className="text-xs text-gray-600">Match</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {person.common.map((interest) => (
                    <span key={interest} className="text-xs font-semibold rounded-full bg-blue-100 text-blue-700 px-2 py-1">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Activities Based on Interests */}
        <section className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-green-50/80 to-emerald-50/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={20} className="text-green-600" />
            <h3 className="text-2xl font-black text-gray-950">Suggested Group Activities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { activity: 'Group Hiking', people: 5, interests: ['Outdoors', 'Beach'], next: 'Tomorrow 9am' },
              { activity: 'Dinner Planning', people: 7, interests: ['Dining', 'Art'], next: 'Saturday 7pm' },
              { activity: 'Game Night', people: 4, interests: ['Gaming', 'Music'], next: 'Friday 8pm' }
            ].map((activity, i) => (
              <div key={i} className="p-4 rounded-xl bg-white hover:shadow-md transition-all">
                <p className="font-bold text-gray-900">{activity.activity}</p>
                <p className="text-xs text-gray-600 mt-1 flex items-center gap-1"><Users size={12} /> {activity.people} people interested</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {activity.interests.map((int) => (
                    <span key={int} className="text-xs font-semibold rounded-full bg-green-100 text-green-700 px-2 py-1">
                      {int}
                    </span>
                  ))}
                </div>
                <button className="w-full mt-3 p-2 rounded-lg bg-green-600 text-white font-bold text-xs hover:bg-green-700 transition-colors">
                  Join
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Network Growth & Statistics */}
        <section className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-purple-50/80 to-indigo-50/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={20} className="text-purple-600" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-600">Network Growth</p>
              </div>
              <h3 className="text-2xl font-black text-gray-950">Your Network Stats</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Connections', value: '24', trend: '+3 this week', icon: '👥' },
              { label: 'Active Circles', value: '5', trend: '+1 joined', icon: '⭕' },
              { label: 'Shared Events', value: '12', trend: '+5 this month', icon: '📅' },
              { label: 'Network Reach', value: '142', trend: '+28 indirect', icon: '🌐' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-white hover:shadow-md transition-all">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="text-3xl font-black text-purple-600">{stat.value}</p>
                <p className="text-xs text-gray-600 font-semibold mt-2">{stat.label}</p>
                <p className="text-xs text-green-600 font-bold mt-1">{stat.trend}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Group Chat Preview */}
        <section className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-pink-50/80 to-rose-50/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle size={20} className="text-pink-600" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-600">Messaging</p>
              </div>
              <h3 className="text-2xl font-black text-gray-950">Group Conversations</h3>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-4 py-2 text-sm font-bold text-white hover:scale-105 transition-transform">
              <MessageCircle size={16} /> New Chat
            </button>
          </div>

          <div className="space-y-3">
            {[
              { group: 'Weekend Crew', lastMsg: 'Marcus: Let\'s plan something fun', time: '2 mins ago', unread: 3 },
              { group: 'Beach Lovers', lastMsg: 'Sarah: Thinking of going to..', time: '1 hour ago', unread: 0 },
              { group: 'City Circle', lastMsg: 'Leo: Anyone free Friday?', time: '3 hours ago', unread: 5 }
            ].map((chat, i) => (
              <div key={i} className="p-3 rounded-lg bg-white hover:shadow-sm transition-all cursor-pointer flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{chat.group}</p>
                  <p className="text-sm text-gray-600 mt-1 truncate">{chat.lastMsg}</p>
                  <p className="text-xs text-gray-500 mt-1">{chat.time}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-600 text-white text-xs font-bold">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations & Actions */}
        <section className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-yellow-50/80 to-orange-50/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-600 mb-6">Quick Actions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button onClick={() => setNotice('Endorsements panel opened.')} className="p-4 rounded-xl bg-white hover:shadow-md transition-all flex items-center justify-center gap-2 group">
              <Award size={18} className="text-yellow-600 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-gray-900">Endorsements</span>
            </button>
            <button onClick={() => setNotice('Invite flow opened.')} className="p-4 rounded-xl bg-white hover:shadow-md transition-all flex items-center justify-center gap-2 group">
              <Share2 size={18} className="text-orange-600 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-gray-900">Invite Friends</span>
            </button>
            <button onClick={() => setNotice('Profile completion checklist opened.')} className="p-4 rounded-xl bg-white hover:shadow-md transition-all flex items-center justify-center gap-2 group">
              <CheckCircle size={18} className="text-red-600 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-gray-900">Complete Profile</span>
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-600">{notice}</p>
          {activeChat && <p className="mt-2 text-xs text-gray-500">Active chat: {activeChat}</p>}
        </section>
      </div>
    </div>
  )
}
