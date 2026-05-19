import { Users, UserPlus, Heart, MapPin, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function SocialConnections() {
  const [connections, setConnections] = useState([
    { id: 1, name: 'Alex Johnson', bio: 'Adventure seeker', interests: ['Hiking', 'Beach'], location: '2 km', avatar: '👨', connected: true },
    { id: 2, name: 'Sophia Chen', bio: 'Foodie explorer', interests: ['Dining', 'Art'], location: '1.5 km', avatar: '👩', connected: false },
    { id: 3, name: 'Marcus Webb', bio: 'Sports fan', interests: ['Sports', 'Gaming'], location: '3 km', avatar: '👨‍💼', connected: true },
    { id: 4, name: 'Emma Roberts', bio: 'Creative', interests: ['Art', 'Music'], location: '2.8 km', avatar: '👩‍🎨', connected: false },
  ])

  const circles = [
    { id: 1, name: 'Beach Lovers', emoji: '🏖️', members: 12, joined: true },
    { id: 2, name: 'Foodies', emoji: '🍽️', members: 28, joined: true },
    { id: 3, name: 'Hikers', emoji: '⛰️', members: 15, joined: false },
    { id: 4, name: 'Art & Culture', emoji: '🎨', members: 22, joined: false },
  ]

  const handleConnect = (id) => {
    setConnections(connections.map(c => c.id === id ? {...c, connected: !c.connected} : c))
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Social Connections</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-indigo-500">
          <p className="text-gray-600 text-sm">Connections</p>
          <p className="text-3xl font-bold">{connections.filter(c => c.connected).length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
          <p className="text-gray-600 text-sm">Activity Circles</p>
          <p className="text-3xl font-bold">4</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-pink-500">
          <p className="text-gray-600 text-sm">Suggestions</p>
          <p className="text-3xl font-bold">{connections.filter(c => !c.connected).length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {connections.map(user => (
              <div key={user.id} className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-20"></div>
                <div className="pt-8 px-6 pb-6 text-center flex-1 flex flex-col">
                  <div className="text-5xl mb-2">{user.avatar}</div>
                  <h3 className="text-lg font-bold">{user.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{user.bio}</p>
                  <div className="flex gap-1 justify-center mb-3">
                    {user.interests.map(i => <span key={i} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">{i}</span>)}
                  </div>
                  <p className="text-xs text-gray-500 mb-4"><MapPin className="inline" size={12} /> {user.location}</p>

                  <div className="flex gap-2 mt-auto">
                    {user.connected ? (
                      <>
                        <button className="flex-1 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"><MessageCircle className="mx-auto" size={16} /></button>
                        <button onClick={() => handleConnect(user.id)} className="flex-1 py-2 border border-red-300 text-red-600 rounded">Connected</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleConnect(user.id)} className="flex-1 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">Connect</button>
                        <button className="px-4 py-2 border border-gray-300 rounded"><Heart size={16} /></button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Activity Circles</h2>
          <div className="space-y-3">
            {circles.map(circle => (
              <div key={circle.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg border-l-4 border-indigo-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{circle.emoji}</span>
                  <div className="flex-1">
                    <p className="font-bold">{circle.name}</p>
                    <p className="text-xs text-gray-500">{circle.members} members</p>
                  </div>
                </div>
                <button className={`w-full py-2 rounded font-medium text-sm ${circle.joined ? 'bg-gray-100 hover:bg-gray-200' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
                  {circle.joined ? 'Member ✓' : 'Join'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
