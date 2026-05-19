import { MapPin, Clock, DollarSign, Star, Search, Filter } from 'lucide-react'
import { useState } from 'react'

export default function ActivitySuggestions() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const activities = [
    { id: 1, name: 'Sunset Beach Volleyball', category: 'Sports', location: 'Sunny Beach', price: 'Free', rating: 4.8, image: '🏐' },
    { id: 2, name: 'Italian Restaurant', category: 'Dining', location: 'Downtown', price: '$30-50', rating: 4.6, image: '🍝' },
    { id: 3, name: 'Cinema Multiplex', category: 'Entertainment', location: 'City Center', price: '$12-15', rating: 4.5, image: '🎬' },
    { id: 4, name: 'Mountain Hiking Trail', category: 'Adventure', location: 'North Hills', price: 'Free', rating: 4.9, image: '⛰️' },
    { id: 5, name: 'Art Gallery', category: 'Culture', location: 'Arts District', price: '$8', rating: 4.7, image: '🎨' },
    { id: 6, name: 'Bowling Alley', category: 'Entertainment', location: 'Westside', price: '$20-30', rating: 4.4, image: '🎳' },
  ]

  const categories = ['all', 'Sports', 'Dining', 'Entertainment', 'Adventure', 'Culture']
  const filtered = activities.filter(a => (selectedCategory === 'all' || a.category === selectedCategory) && a.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Activity Suggestions</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input type="text" placeholder="Search activities..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600" />
          </div>
          <button className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter size={18} /> More
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-full font-medium ${selectedCategory === cat ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          {filtered.map(activity => (
            <div key={activity.id} className="bg-white rounded-lg shadow hover:shadow-lg p-6 flex gap-6">
              <div className="text-6xl">{activity.image}</div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-bold mb-2">{activity.category}</span>
                <h3 className="text-2xl font-bold">{activity.name}</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-3 py-3 border-t border-b border-gray-200">
                  <div><p className="text-xs text-gray-500">LOCATION</p><p className="flex items-center gap-1"><MapPin size={14} /> {activity.location}</p></div>
                  <div><p className="text-xs text-gray-500">PRICE</p><p className="flex items-center gap-1"><DollarSign size={14} /> {activity.price}</p></div>
                  <div><p className="text-xs text-gray-500">RATING</p><p className="flex items-center gap-1"><Star size={14} /> {activity.rating}</p></div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Add to Plans</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg"><Star size={18} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6 sticky top-24">
          <h2 className="text-lg font-bold mb-4">Popular This Week</h2>
          <div className="space-y-3">
            <div className="flex justify-between"><span>Beach Activities</span><span className="font-bold text-indigo-600">↑ 42%</span></div>
            <div className="flex justify-between"><span>Dining</span><span className="font-bold text-purple-600">↑ 28%</span></div>
            <div className="flex justify-between"><span>Sports</span><span className="font-bold text-pink-600">↑ 15%</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
