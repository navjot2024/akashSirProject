import { BarChart3, Clock3, Plus, Vote } from 'lucide-react'
import { useMemo, useState } from 'react'

export default function PollsVoting() {
  const [polls, setPolls] = useState([
    {
      id: 1,
      question: 'Where should we go Saturday night?',
      group: 'City Circle',
      status: 'active',
      closesIn: '2h 14m',
      options: [
        { text: 'Rooftop dinner', votes: 8 },
        { text: 'Live music + drinks', votes: 11 },
        { text: 'Movie + dessert', votes: 6 }
      ]
    },
    {
      id: 2,
      question: 'Sunday vibe?',
      group: 'Weekend Crew',
      status: 'active',
      closesIn: '4h 03m',
      options: [
        { text: 'Brunch', votes: 5 },
        { text: 'Hike', votes: 7 },
        { text: 'Stay in', votes: 3 }
      ]
    },
    {
      id: 3,
      question: 'Friday starter plan?',
      group: 'Night Owls',
      status: 'closed',
      closesIn: 'Closed',
      options: [
        { text: 'Bowling', votes: 10 },
        { text: 'Cocktails', votes: 14 }
      ]
    }
  ])

  const [activeTab, setActiveTab] = useState('active')

  const tabPolls = polls.filter((poll) => poll.status === activeTab)
  const totalVotes = useMemo(
    () => polls.reduce((sum, poll) => sum + poll.options.reduce((inner, option) => inner + option.votes, 0), 0),
    [polls]
  )

  const handleVote = (pollId, optionIndex) => {
    setPolls((prev) =>
      prev.map((poll) => {
        if (poll.id !== pollId || poll.status !== 'active') return poll
        return {
          ...poll,
          options: poll.options.map((option, index) => (index === optionIndex ? { ...option, votes: option.votes + 1 } : option))
        }
      })
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f7f2eb] to-[#eef3ff] px-4 py-6 text-gray-900 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="elegant-panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Collective Decisions</p>
              <h1 className="mt-2 text-4xl font-black text-gray-950">Polls and Voting</h1>
              <p className="mt-2 text-sm text-gray-600">Run quick votes and see momentum in real time.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0f766e] to-[#2563eb] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(15,118,110,0.22)]">
              <Plus size={16} /> Create Poll
            </button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="metric-card"><p className="text-xs text-gray-500">Active Polls</p><p className="mt-2 text-3xl font-black">{polls.filter((poll) => poll.status === 'active').length}</p></div>
            <div className="metric-card"><p className="text-xs text-gray-500">Total Votes</p><p className="mt-2 text-3xl font-black">{totalVotes}</p></div>
            <div className="metric-card"><p className="text-xs text-gray-500">Fastest Decision</p><p className="mt-2 text-3xl font-black">11 min</p></div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
          <div className="mb-5 flex gap-3 border-b border-gray-200 pb-3">
            {['active', 'closed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${activeTab === tab ? 'bg-gray-950 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-5">
            {tabPolls.map((poll) => {
              const pollVotes = poll.options.reduce((sum, option) => sum + option.votes, 0)
              const leader = [...poll.options].sort((a, b) => b.votes - a.votes)[0]
              return (
                <article key={poll.id} className="rounded-[1.5rem] border border-gray-100 bg-[#fffdfa] p-5">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-black text-gray-950">{poll.question}</h2>
                      <p className="mt-1 text-xs text-gray-500">{poll.group}</p>
                    </div>
                    <div className="text-right">
                      <p className="inline-flex items-center gap-1 rounded-full bg-[#0f766e]/10 px-3 py-1 text-xs font-semibold text-[#0f766e]"><Clock3 size={13} /> {poll.closesIn}</p>
                      <p className="mt-2 text-xs text-gray-500">{pollVotes} votes</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {poll.options.map((option, optionIndex) => {
                      const percentage = pollVotes ? (option.votes / pollVotes) * 100 : 0
                      return (
                        <button
                          key={option.text}
                          onClick={() => handleVote(poll.id, optionIndex)}
                          disabled={poll.status !== 'active'}
                          className="w-full rounded-xl border border-gray-200 bg-white p-3 text-left transition-all hover:border-[#0f766e]/40"
                        >
                          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-gray-800">
                            <span>{option.text}</span>
                            <span>{percentage.toFixed(1)}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                            <div className="h-full rounded-full bg-gradient-to-r from-[#0f766e] to-[#2563eb]" style={{ width: `${percentage}%` }} />
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1"><BarChart3 size={13} /> Current leader: {leader.text}</span>
                    {poll.status === 'active' ? <span className="inline-flex items-center gap-1"><Vote size={13} /> Tap option to vote</span> : <span>Closed</span>}
                  </div>
                </article>
              )
            })}

            {!tabPolls.length && (
              <div className="rounded-[1.5rem] border border-dashed border-gray-300 bg-white p-10 text-center">
                <BarChart3 className="mx-auto text-[#0f766e]" size={34} />
                <p className="mt-3 text-sm text-gray-500">No polls in this tab.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
