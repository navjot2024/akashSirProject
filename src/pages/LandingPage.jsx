import { ArrowRight, CalendarDays, CheckCircle2, Compass, Sparkles, Star, Users, Clock3, MapPin, Zap } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const adoptionData = [
  { week: 'W1', teams: 18 },
  { week: 'W2', teams: 29 },
  { week: 'W3', teams: 42 },
  { week: 'W4', teams: 58 },
  { week: 'W5', teams: 73 },
  { week: 'W6', teams: 91 }
]

const testimonials = [
  {
    name: 'Aanya S.',
    role: 'Product Designer',
    quote: 'This is the first planner that actually helps us decide quickly without endless chat threads.'
  },
  {
    name: 'Rohan M.',
    role: 'Startup Founder',
    quote: 'The overlap view is brilliant. We lock plans in 5 minutes now.'
  },
  {
    name: 'Priya K.',
    role: 'Travel Creator',
    quote: 'Beautiful interface and genuinely useful recommendations. It feels curated for our group.'
  }
]

const features = [
  {
    icon: CalendarDays,
    title: 'Precision Scheduling',
    description: 'Find best windows instantly with overlap intelligence and conflict spotting.'
  },
  {
    icon: Compass,
    title: 'Taste-Led Discovery',
    description: 'Get place and activity suggestions tuned to your group mood, not generic lists.'
  },
  {
    icon: Users,
    title: 'Frictionless Decisions',
    description: 'Short polls, clear signals, and fast lock-ins without social fatigue.'
  }
]

export default function LandingPage() {
  const navigate = useNavigate()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeMode, setActiveMode] = useState('weekend')

  const planningModes = [
    {
      id: 'weekend',
      label: 'Weekend Mode',
      title: 'Fast, social, and low-friction',
      detail: 'Best for dinner plans, outdoor hangs, and quick lock-ins with friends.',
      stats: ['5 min setup', '8 people synced', '2 top picks ready']
    },
    {
      id: 'travel',
      label: 'Trip Mode',
      title: 'Coordinate multiple days with clarity',
      detail: 'Track availability, shared costs, and activities across a longer window.',
      stats: ['Calendar overlap', 'Budget tracking', 'Shared itinerary']
    },
    {
      id: 'events',
      label: 'Event Mode',
      title: 'Make one-off events easy to confirm',
      detail: 'Collect votes, settle on timing, and export a clean plan everyone understands.',
      stats: ['Polls + voting', 'Auto reminders', 'Fast confirmations']
    }
  ]

  const mode = planningModes.find((item) => item.id === activeMode) || planningModes[0]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [])

  const activeQuote = useMemo(() => testimonials[activeTestimonial], [activeTestimonial])

  return (
    <div className="min-h-screen bg-[#f8f4ee] text-gray-900">
      <nav className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f766e] to-[#2563eb] text-white shadow-lg">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-500">Gather</p>
              <p className="text-lg font-black text-gray-950">WeekendPlanning</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-semibold text-gray-600 md:flex">
            <a href="#features" className="hover:text-[#0f766e]">Features</a>
            <a href="#how" className="hover:text-[#0f766e]">How it works</a>
            <a href="#proof" className="hover:text-[#0f766e]">Proof</a>
          </div>

          <button
            onClick={() => navigate('/login')}
            className="rounded-full bg-gray-950 px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Start Planning
          </button>
        </div>
      </nav>

      <section className="section-shell grid gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="space-y-7">
          <p className="chip">Built for real friend groups</p>
          <h1 className="max-w-xl text-5xl font-black leading-tight text-gray-950 sm:text-6xl">
            Plan Better Weekends with Style and Speed
          </h1>
          <p className="max-w-xl text-lg leading-8 text-gray-600">
            A polished collaboration space for schedules, discovery, and quick group decisions. Less back-and-forth, more actual plans.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/login')}
              className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(15,118,110,0.22)]"
            >
              Create Workspace <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate('/login')}
              className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-900"
            >
              See Live Demo
            </button>
          </div>
          <div className="grid max-w-xl grid-cols-3 gap-3 pt-4">
            <div className="metric-card text-center"><p className="text-2xl font-black text-gray-950">10k+</p><p className="text-xs text-gray-500">Active planners</p></div>
            <div className="metric-card text-center"><p className="text-2xl font-black text-gray-950">92%</p><p className="text-xs text-gray-500">Decision rate</p></div>
            <div className="metric-card text-center"><p className="text-2xl font-black text-gray-950">4.9</p><p className="text-xs text-gray-500">User score</p></div>
          </div>
        </div>

        <div className="elegant-panel overflow-hidden rounded-[2rem] p-4 sm:p-6">
          <div className="rounded-[1.5rem] border border-black/5 bg-white p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold text-gray-900">Team adoption trend</p>
              <span className="chip">+38% this month</span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={adoptionData}>
                <defs>
                  <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0f766e" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#0f766e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="week" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="teams" stroke="#0f766e" strokeWidth={3} fill="url(#heroGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 rounded-[1.5rem] border border-black/5 bg-gray-950 p-5 text-white">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400">Live sentiment</p>
            <p className="mt-2 text-2xl font-black">Friday plans are trending outdoors</p>
            <p className="mt-2 text-sm text-gray-300">Most circles in your area are choosing rooftop, picnic, and easy activity clusters.</p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="elegant-panel rounded-[2rem] p-6 sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Planning Modes</p>
            <h2 className="mt-2 text-3xl font-black text-gray-950">Switch the workspace to match the plan.</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">Different weekends need different tools. Pick a mode and see the core workflow update instantly.</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {planningModes.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMode(item.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-all ${activeMode === item.id ? 'bg-gray-950 text-white' : 'border border-gray-300 bg-white text-gray-600'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-gray-950 p-5 text-white">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gray-400">
                <Zap size={13} /> Live preview
              </div>
              <h3 className="mt-2 text-2xl font-black">{mode.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{mode.detail}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {mode.stats.map((stat) => (
                  <span key={stat} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-gray-200">
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">What you get</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Clock3, title: 'Faster decisions', detail: 'Turn open-ended plans into confirmed actions.' },
                { icon: MapPin, title: 'Better venues', detail: 'Surface places the whole group actually likes.' },
                { icon: Users, title: 'Shared visibility', detail: 'Everyone sees the same shortlist and status.' },
                { icon: CalendarDays, title: 'Smarter overlap', detail: 'Find the window that fits around everyone.' }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-[1.4rem] border border-black/5 bg-[#fffdfa] p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f766e]/10 text-[#0f766e]">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-3 text-sm font-black text-gray-950">{item.title}</h3>
                    <p className="mt-1 text-xs leading-6 text-gray-600">{item.detail}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section-shell py-6 lg:py-10">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article key={feature.title} className="elegant-panel rounded-[1.6rem] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0f766e] shadow-sm">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-xl font-black text-gray-950">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="how" className="section-shell py-14">
        <div className="grid gap-6 rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] lg:grid-cols-3">
          {[
            { title: 'Sync availability', detail: 'Import calendars or set manually in seconds.' },
            { title: 'Shortlist top ideas', detail: 'AI picks based on your group taste and distance.' },
            { title: 'Vote and lock', detail: 'Run quick polls and convert intent to confirmed plans.' }
          ].map((step, index) => (
            <div key={step.title} className="rounded-[1.4rem] border border-black/5 bg-[#fffdfa] p-5">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0f766e]">Step {index + 1}</p>
              <h3 className="mt-2 text-xl font-black text-gray-950">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proof" className="section-shell py-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="elegant-panel rounded-[2rem] p-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">What users say</p>
            <p className="mt-4 text-2xl font-black leading-10 text-gray-950">&quot;{activeQuote.quote}&quot;</p>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-900">{activeQuote.name}</p>
                <p className="text-xs text-gray-500">{activeQuote.role}</p>
              </div>
              <div className="flex items-center gap-1 text-[#0f766e]">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              {testimonials.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2.5 rounded-full transition-all ${idx === activeTestimonial ? 'w-10 bg-[#0f766e]' : 'w-2.5 bg-gray-300'}`}
                  aria-label={item.name}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gray-950 p-7 text-white shadow-[0_18px_60px_rgba(15,23,42,0.16)]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400">Why teams switch</p>
            <ul className="mt-4 space-y-3">
              {[
                'No more decision loops in group chat',
                'Visible overlap prevents last-minute cancellation',
                'Better recommendations improve turnout'
              ].map((reason) => (
                <li key={reason} className="flex items-start gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 size={16} className="mt-0.5 text-emerald-400" />
                  {reason}
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('/login')}
              className="mt-7 w-full rounded-full bg-white px-5 py-3 text-sm font-bold text-gray-950"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
