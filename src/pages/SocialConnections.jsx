import { Heart, MapPin, MessageCircle, UserPlus, Users } from 'lucide-react'
import { useMemo, useState } from 'react'

export default function SocialConnections() {
  const [connections, setConnections] = useState([
    { id: 1, name: 'Alex Johnson', bio: 'Adventure seeker', interests: ['Hiking', 'Beach'], location: '2 km', connected: true, score: 86 },
    { id: 2, name: 'Sophia Chen', bio: 'Foodie explorer', interests: ['Dining', 'Art'], location: '1.5 km', connected: false, score: 91 },
    { id: 3, name: 'Marcus Webb', bio: 'Sports fan', interests: ['Sports', 'Gaming'], location: '3 km', connected: true, score: 76 },
    { id: 4, name: 'Emma Roberts', bio: 'Creative planner', interests: ['Art', 'Music'], location: '2.8 km', connected: false, score: 88 }
  ])
  const [filter, setFilter] = useState('all')

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
                          <button className="flex-1 rounded-full bg-gray-950 py-2 text-xs font-bold text-white"><MessageCircle className="mr-1 inline" size={14} /> Message</button>
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
                    <button className={`w-full rounded-full py-2 text-xs font-bold ${circle.joined ? 'bg-gray-100 text-gray-700' : 'bg-[#0f766e] text-white'}`}>
                      {circle.joined ? 'Member' : 'Join Circle'}
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full rounded-full border border-dashed border-gray-300 py-2 text-xs font-semibold text-gray-600"><Users className="mr-1 inline" size={14} /> Discover More</button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}
