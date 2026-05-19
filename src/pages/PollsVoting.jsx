import { BarChart3, Clock3, Plus, Vote, TrendingUp, Calendar, Zap, Share2, Download, MessageSquare } from 'lucide-react'
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
  const [notice, setNotice] = useState('Vote on an option to update totals instantly.')
  const [commentsOpen, setCommentsOpen] = useState(false)

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
          options: poll.options.map((option, index) =>
            index === optionIndex ? { ...option, votes: option.votes + 1 } : option
          )
        }
      })
    )

    setNotice('Vote counted and poll totals updated.')
  }

  const createTemplatePoll = (name) => {
    const templateMap = {
      'Venue Choice': { question: 'Which venue should we use?', options: ['Rooftop dinner', 'Live music + drinks', 'Movie + dessert'] },
      'Time Selector': { question: 'What time should we meet?', options: ['6pm', '7pm', '8pm'] },
      'Activity Poll': { question: 'Which activity feels best?', options: ['Bowling', 'Cocktails', 'Bowling + drinks'] }
    }

    const selected = templateMap[name]
    if (!selected) return

    const nextPoll = {
      id: Date.now(),
      question: selected.question,
      group: 'Quick Draft',
      status: 'active',
      closesIn: '3h 00m',
      options: selected.options.map((text) => ({ text, votes: 0 }))
    }

    setPolls((prev) => [nextPoll, ...prev])
    setActiveTab('active')
    setNotice(`Created a new ${name.toLowerCase()} poll.`)
  }

  const handleCreatePoll = () => createTemplatePoll('Venue Choice')

  const handleShare = async () => {
    const activeCount = polls.filter((poll) => poll.status === 'active').length
    const message = `WeekendPlanning polls: ${activeCount} active and ${totalVotes} total votes.`
    try {
      await navigator.clipboard.writeText(message)
      setNotice('Poll summary copied to clipboard.')
    } catch {
      setNotice('Clipboard unavailable, but the summary is ready to share.')
    }
  }

  const handleExport = () => {
    const payload = JSON.stringify(polls, null, 2)
    const blob = new Blob([payload], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'poll-results.json'
    link.click()
    URL.revokeObjectURL(url)
    setNotice('Poll results exported as JSON.')
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
            <button onClick={handleCreatePoll} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0f766e] to-[#2563eb] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(15,118,110,0.22)]">
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

        {/* Poll Templates & Quick Create */}
        <section className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-600">Quick Start</p>
              <h3 className="mt-2 text-2xl font-black text-gray-950">Poll Templates</h3>
              <p className="mt-2 text-sm text-gray-600">Use templates to quickly create common poll types</p>
            </div>
            <button onClick={() => createTemplatePoll('Time Selector')} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:scale-105 transition-transform">
              <Plus size={16} /> New Poll
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🎯', name: 'Venue Choice', desc: 'Where should we go?', votes: 3 },
              { icon: '🕐', name: 'Time Selector', desc: 'When should we meet?', votes: 2 },
              { icon: '🎪', name: 'Activity Poll', desc: 'What activity?', votes: 5 }
            ].map((template, i) => (
              <button key={i} onClick={() => createTemplatePoll(template.name)} className="p-4 rounded-xl bg-white hover:shadow-md transition-all cursor-pointer group text-left">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{template.icon}</div>
                <p className="font-bold text-gray-900">{template.name}</p>
                <p className="text-xs text-gray-600 mt-1">{template.desc}</p>
                <p className="text-xs text-blue-600 font-semibold mt-2">Used {template.votes}x this week</p>
              </button>
            ))}
          </div>
        </section>

        {/* Poll Statistics & Insights */}
        <section className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-green-50/80 to-emerald-50/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={20} className="text-green-600" />
            <h3 className="text-2xl font-black text-gray-950">Poll Insights</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Decision Patterns */}
            <div>
              <p className="text-sm font-bold text-gray-900 mb-4">Decision Speed</p>
              <div className="space-y-3">
                {[
                  { label: 'Fastest Decision', value: '8 min', color: 'from-green-500 to-emerald-600' },
                  { label: 'Average Decision', value: '24 min', color: 'from-blue-500 to-cyan-600' },
                  { label: 'Slowest Decision', value: '2h 15m', color: 'from-orange-500 to-red-600' }
                ].map((stat, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white hover:shadow-sm transition-all">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-900">{stat.label}</span>
                      <span className="text-sm font-bold text-green-600">{stat.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div className={`h-full w-full bg-gradient-to-r ${stat.color}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Options */}
            <div>
              <p className="text-sm font-bold text-gray-900 mb-4">Most Popular Options</p>
              <div className="space-y-3">
                {[
                  { option: 'Rooftop dinner', votes: 18 },
                  { option: 'Live music + drinks', votes: 22 },
                  { option: 'Movie + dessert', votes: 15 }
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-900">{item.option}</span>
                      <span className="text-sm font-bold text-green-600">{item.votes} votes</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600" style={{ width: `${(item.votes / 22) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Poll Scheduling & Auto-Close */}
        <section className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-purple-50/80 to-indigo-50/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={20} className="text-purple-600" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-600">Scheduling</p>
              </div>
              <h3 className="text-2xl font-black text-gray-950">Scheduled Polls</h3>
            </div>
            <button onClick={() => setNotice('Schedule poll draft created for later posting.')} className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-bold text-white hover:scale-105 transition-transform">
              <Plus size={16} /> Schedule
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { question: 'What time Friday?', scheduled: 'Tomorrow 9am', closesIn: '2h after posting' },
              { question: 'Saturday venue', scheduled: 'Friday 6pm', closesIn: '18h before event' }
            ].map((poll, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-purple-200 hover:shadow-md transition-all">
                <p className="font-bold text-gray-900">{poll.question}</p>
                <p className="text-xs text-gray-600 mt-2 flex items-center gap-1"><Calendar size={12} /> Schedule: {poll.scheduled}</p>
                <p className="text-xs text-purple-600 font-semibold mt-2">Auto-closes: {poll.closesIn}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Share & Collaboration */}
        <section className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-pink-50/80 to-rose-50/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-600 mb-4">Sharing & Export</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button onClick={handleShare} className="p-4 rounded-xl bg-white hover:shadow-md transition-all flex items-center justify-center gap-2 group">
              <Share2 size={18} className="text-pink-600 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-gray-900">Share Poll</span>
            </button>
            <button onClick={handleExport} className="p-4 rounded-xl bg-white hover:shadow-md transition-all flex items-center justify-center gap-2 group">
              <Download size={18} className="text-rose-600 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-gray-900">Export Results</span>
            </button>
            <button onClick={() => setCommentsOpen((value) => !value)} className="p-4 rounded-xl bg-white hover:shadow-md transition-all flex items-center justify-center gap-2 group">
              <MessageSquare size={18} className="text-red-600 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-gray-900">Add Comments</span>
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-600">{notice}</p>
          {commentsOpen && (
            <div className="mt-4 rounded-xl border border-pink-200 bg-white p-4">
              <p className="text-sm font-bold text-gray-900">Comments enabled</p>
              <p className="mt-1 text-xs text-gray-600">Friends can now leave notes under the selected poll.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
