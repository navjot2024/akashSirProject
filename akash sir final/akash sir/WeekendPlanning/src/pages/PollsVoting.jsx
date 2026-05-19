import { Plus, BarChart3 } from 'lucide-react'
import { useState } from 'react'

export default function PollsVoting() {
  const [polls, setPolls] = useState([
    { id: 1, question: 'Where for beach trip?', group: 'Beach Squad', status: 'active', options: [ { text: 'Sunny Beach', votes: 8 }, { text: 'Rocky Coast', votes: 5 }, { text: 'Tropical', votes: 12 } ], totalVotes: 25 },
    { id: 2, question: 'Best time?', group: 'Hiking', status: 'active', options: [ { text: '8AM-12PM', votes: 3 }, { text: '2PM-6PM', votes: 4 } ], totalVotes: 7 },
    { id: 3, question: 'Restaurant?', group: 'Movie Night', status: 'closed', options: [ { text: 'Italian', votes: 9 }, { text: 'Sushi', votes: 4 } ], totalVotes: 13 },
  ])

  const [activeTab, setActiveTab] = useState('active')
  const filtered = polls.filter(p => p.status === activeTab)

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Polls & Voting</h1>
          <p className="text-gray-600">Help your group make decisions</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus size={20} /> Create Poll
        </button>
      </div>

      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button onClick={() => setActiveTab('active')} className={`px-4 py-3 font-medium border-b-2 ${activeTab === 'active' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-600'}`}>
          Active ({polls.filter(p => p.status === 'active').length})
        </button>
        <button onClick={() => setActiveTab('closed')} className={`px-4 py-3 font-medium border-b-2 ${activeTab === 'closed' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-600'}`}>
          Closed ({polls.filter(p => p.status === 'closed').length})
        </button>
      </div>

      <div className="space-y-6">
        {filtered.map(poll => (
          <div key={poll.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{poll.question}</h2>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>👤 {poll.group}</span>
                  <span>📊 {poll.totalVotes} votes</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${poll.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100'}`}>
                    {poll.status === 'active' ? '🔴 Active' : '✓ Closed'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {poll.options.map((opt, i) => {
                const percent = (opt.votes / poll.totalVotes) * 100
                return (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">{opt.text}</p>
                      <p className="text-sm font-bold">{percent.toFixed(1)}%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-indigo-500 h-3 rounded-full" style={{width: `${percent}%`}}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{opt.votes} votes</p>
                  </div>
                )
              })}
            </div>

            {poll.status === 'active' && (
              <button className="mt-6 w-full py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium">
                Vote on this poll
              </button>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <BarChart3 className="mx-auto mb-4 text-gray-400" size={48} />
          <p className="text-gray-600 text-lg">No {activeTab} polls</p>
        </div>
      )}
    </div>
  )
}
