import { motion } from 'framer-motion'
import { Users, Clock, MapPin, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export default function Dashboard({ currentUser }) {
  // Chart data
  const activityData = [
    { name: 'Mon', value: 10 },
    { name: 'Tue', value: 15 },
    { name: 'Wed', value: 25 },
    { name: 'Thu', value: 35 },
    { name: 'Fri', value: 55 },
    { name: 'Sat', value: 70 },
    { name: 'Sun', value: 65 }
  ]

  const interestData = [
    { name: 'Dining', value: 32 },
    { name: 'Outdoors', value: 26 },
    { name: 'Nightlife', value: 22 },
    { name: 'Culture', value: 20 }
  ]

  const COLORS = ['#0F766E', '#5B5FEF', '#111111', '#7A746B']

  const liveActivity = [
    { user: 'Marcus', action: 'added', item: 'Highland Park Bowl', time: '2M', initials: 'MC', color: 'bg-yellow-300' },
    { user: 'Sarah', action: 'voted for', item: 'Early dinner', day: 'Sunday', time: '14M', initials: 'EL', color: 'bg-green-300' },
    { user: 'Leo', action: 'synced', item: 'Google Calendar', conflicts: '3', time: '47M', initials: 'JS', color: 'bg-pink-300' },
    { user: 'Elena', action: 'RSVP\'d to', item: 'Padel + Tacos', time: '1H', initials: 'SK', color: 'bg-blue-300' }
  ]

  const vibeOptions = [
    { label: 'Low-key / Vinyl Bar', percentage: 62 },
    { label: 'All-out / Club Night', percentage: 28 },
    { label: 'Stay in / Movie & Pizza', percentage: 10 }
  ]

  const stats = [
    { icon: Users, label: 'Active Friends', value: '08', detail: 'of 12 in circle' },
    { icon: Clock, label: 'Hours of Overlap', value: '14', detail: 'this weekend' },
    { icon: MapPin, label: 'Shortlisted Venues', value: '07', detail: '3 within 2km' },
    { icon: Zap, label: 'Decisions Pending', value: '02', detail: 'poll closes 6pm' }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F7F4EE] text-gray-900">
      {/* Ambient background blobs */}
      <div className="absolute left-[-70px] top-20 h-48 w-48 rounded-full bg-[#0F766E]/10 blur-3xl" />
      <div className="absolute right-[-50px] top-40 h-56 w-56 rounded-full bg-[#5B5FEF]/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-black/5 blur-3xl" />

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-12">
          {/* Welcome Header */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-3"
            >
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#0F766E] to-transparent" />
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">WEEKEND IN MOTION</p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight"
            >
              <span className="text-gray-950">FRI</span> <span className="text-[#0F766E]">18:00</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-2xl font-serif text-lg italic leading-8 text-gray-600 sm:text-xl"
            >
              The weekend begins in 42 hours. Your circle is leaning toward <span className="font-semibold text-gray-950">East Side cocktails</span>.
            </motion.p>
          </div>

          {/* Confirmed Activities Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'Rooftop Padel + Tacos',
                status: 'CONFIRMED',
                time: 'Saturday, 11:00',
                location: 'Padel Haus Williamsburg',
                people: ['MC', 'EL', 'JS', 'SK']
              },
              {
                title: 'Echo Park Art Walk',
                status: 'ON DECK',
                time: 'Sunday, 14:00',
                location: 'Waiting on Leo & Sam',
                people: ['MC', 'EL', 'JS', 'SK']
              }
            ].map((activity, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[1.8rem] border border-white/40 bg-gradient-to-br from-white/80 via-white/60 to-[#FAF8F3]/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_24px_70px_rgba(17,17,17,0.12)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500">{activity.status}</p>
                    <h3 className="mt-3 text-2xl font-black tracking-tight text-gray-950">{activity.title}</h3>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F766E]/10 text-[#0F766E]"
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </div>

                <p className="text-sm leading-6 text-gray-600 mb-4">{activity.time} — {activity.location}</p>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex -space-x-2">
                    {activity.people.map((person, i) => (
                      <div key={person} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[10px] font-black text-gray-950 shadow-sm ${['bg-yellow-300', 'bg-green-300', 'bg-pink-300', 'bg-blue-300'][i]}`}>
                        {person}
                      </div>
                    ))}
                  </div>
                  <button className="rounded-full bg-[#0F766E] px-4 py-2 text-xs font-bold text-white transition-transform hover:scale-[1.02]">
                    DETAILS
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.48 }}
            className="rounded-[1.8rem] border border-white/40 bg-gradient-to-r from-[#111111] to-[#1A1A1A] p-6 text-white shadow-[0_12px_40px_rgba(17,17,17,0.15)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-400">Quick Plan Capsule</p>
                <h3 className="mt-2 text-2xl font-black">1-Tap Saturday Plan</h3>
                <p className="mt-2 text-sm text-gray-300">Padel at 11:00, tacos at 13:00, rooftop at 19:30. Everyone can make it.</p>
              </div>
              <button className="rounded-full bg-white px-5 py-2.5 text-xs font-black tracking-[0.2em] text-gray-950 transition-transform hover:scale-[1.02]">
                LOCK PLAN
              </button>
            </div>
          </motion.div>

          {/* Key Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-flex items-center gap-2"
              >
                <div className="h-0.5 w-8 bg-[#0F766E]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">WEEKEND INSIGHTS</p>
              </motion.div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Your Cohort Metrics</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.55 + idx * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group overflow-hidden rounded-[1.6rem] border border-white/40 bg-gradient-to-br from-white/80 via-white/60 to-[#FAF8F3]/80 p-5 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.12)]"
                  >
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-500">{stat.label}</p>
                        <p className="mt-2 text-3xl font-black tracking-tight text-gray-950">{stat.value}</p>
                        <p className="mt-1 text-xs text-gray-600">{stat.detail}</p>
                      </div>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={18} />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Live Activity & Vibe Check */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Live Activity */}
            <div className="overflow-hidden rounded-[1.8rem] border border-white/40 bg-gradient-to-br from-white/80 via-white/60 to-[#FAF8F3]/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl">
              <div className="mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="inline-flex items-center gap-2"
                >
                  <div className="h-0.5 w-8 bg-[#0F766E]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Live Activity</p>
                </motion.div>
                <h3 className="mt-3 text-2xl font-black text-gray-950">Your Circle's Moves</h3>
              </div>

              <div className="space-y-4">
                {liveActivity.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.65 + i * 0.05 }}
                    className="flex gap-3 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
                  >
                    <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-gray-950 shadow-sm ${item.color}`}>
                      {item.initials}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{item.user}</span> {item.action} <span className="text-[#0F766E] font-semibold">{item.item}</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Vibe Check */}
            <div className="overflow-hidden rounded-[1.8rem] border border-white/40 bg-gradient-to-br from-[#111111] to-[#1A1A1A] p-6 shadow-[0_12px_40px_rgba(17,17,17,0.15)] backdrop-blur-xl text-white">
              <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-400">Vibe Check</p>
                <h3 className="mt-3 text-2xl font-black">Energy Poll</h3>
              </div>

              <p className="text-sm text-gray-300 mb-5">What's the energy for Saturday night?</p>

              <div className="space-y-3">
                {vibeOptions.map((option, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.65 + i * 0.08 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-200">{option.label}</span>
                      <span className="text-xs font-black text-[#0F766E]">{option.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${option.percentage}%` }}
                        transition={{ duration: 0.8, delay: 0.7 + i * 0.08, ease: 'easeOut' }}
                        className={`h-full rounded-full transition-all ${i === 0 ? 'bg-[#0F766E]' : i === 1 ? 'bg-[#5B5FEF]' : 'bg-gray-500'}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Analytics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-6"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Analytics / Week 20</p>
              <h2 className="mt-2 text-3xl font-black text-gray-950">The Numbers Behind Plans</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Activity Pulse */}
              <motion.div
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-[1.8rem] border border-white/40 bg-gradient-to-br from-white/80 via-white/60 to-[#FAF8F3]/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.12)]"
              >
                <div className="mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Activity Pulse</p>
                  <div className="mt-3 flex items-baseline gap-3">
                    <h3 className="text-4xl font-black text-gray-950">284</h3>
                    <p className="text-sm text-gray-600">interactions this week</p>
                    <span className="ml-auto text-sm font-black text-[#0F766E]">+38%</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={activityData}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#0F766E" 
                      dot={false}
                      strokeWidth={3}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Plan Completion */}
              <motion.div
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-[1.8rem] border border-white/40 bg-gradient-to-br from-[#111111] to-[#1A1A1A] p-6 shadow-[0_12px_40px_rgba(17,17,17,0.15)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.2)] text-white flex flex-col justify-center items-center"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-400 mb-6">Plan Completion</p>
                <div className="relative w-40 h-40 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[{ value: 78 }, { value: 22 }]}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={65}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        isAnimationActive={false}
                      >
                        <Cell fill="#0F766E" />
                        <Cell fill="#333333" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-[#0F766E]">78%</span>
                    <span className="text-xs text-gray-400">CONFIRMED</span>
                  </div>
                </div>
                <p className="text-sm text-gray-300">7 of 9 weekend plans confirmed.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Interest Mix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="overflow-hidden rounded-[1.8rem] border border-white/40 bg-gradient-to-br from-white/80 via-white/60 to-[#FAF8F3]/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl"
          >
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Interest Mix</p>
              <h3 className="mt-2 text-2xl font-black text-gray-950">Your Circle's Taste</h3>
              <p className="mt-2 text-sm text-gray-600">Based on votes, RSVPs and shortlists from the last 30 days.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-48 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={interestData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        startAngle={0}
                        endAngle={360}
                        isAnimationActive={false}
                      >
                        {COLORS.map((color, index) => (
                          <Cell key={`cell-${index}`} fill={color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-4">
                {interestData.map((interest, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
                    className="flex items-center gap-4"
                  >
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-1">
                        <p className="text-sm font-semibold text-gray-900">{interest.name}</p>
                        <p className="text-xs font-black text-gray-600">{interest.value}%</p>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${interest.value}%` }}
                          transition={{ duration: 0.8, delay: 0.85 + i * 0.08, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: COLORS[i] }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
