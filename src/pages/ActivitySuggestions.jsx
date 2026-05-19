import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Clock3,
  Filter,
  Flame,
  Mountain,
  MoonStar,
  Palette,
  Search,
  Sparkles,
  SlidersHorizontal,
  Star,
  ThumbsUp,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Zap,
  X
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'All', icon: Sparkles },
  { id: 'cocktails', label: 'Cocktails', icon: Flame },
  { id: 'outdoors', label: 'Outdoors', icon: Mountain },
  { id: 'art', label: 'Art', icon: Palette },
  { id: 'active', label: 'Active', icon: Zap },
  { id: 'late-night', label: 'Late Night', icon: MoonStar },
  { id: 'brunch', label: 'Brunch', icon: UtensilsCrossed }
]

const activities = [
  {
    id: 1,
    title: 'Gold-Line Vinyl Bar',
    neighborhood: 'Highland Park',
    time: 'Open till 2am',
    distance: '1.4 km away',
    price: '$$',
    rating: 4.9,
    match: 96,
    category: 'cocktails',
    trending: true,
    status: 'Open now',
    description: 'Low-light, cocktails, and vinyl in a room made for long conversations.',
    why: 'Best match for your low-key nightlife vibe, with strong overlap across the group.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80',
    tags: ['Cocktails', 'Vinyl', 'Late Night'],
    people: ['AR', 'MC', 'SK', 'EL'],
    score: 96
  },
  {
    id: 2,
    title: 'Bar Flores Rooftop',
    neighborhood: 'Echo Park',
    time: '5pm - 12am',
    distance: '2.3 km away',
    price: '$$$',
    rating: 4.8,
    match: 92,
    category: 'outdoors',
    trending: true,
    status: 'Open now',
    description: 'Warm rooftop energy with string lights, sunset views, and easy group energy.',
    why: 'Your circle pairs rooftop settings with high response rates and quick RSVPs.',
    image: 'https://images.unsplash.com/photo-1514933651103-2e6d8d3d6b4f?auto=format&fit=crop&w=1400&q=80',
    tags: ['Cocktails', 'Outdoors'],
    people: ['AR', 'MC', 'JS'],
    score: 92
  },
  {
    id: 3,
    title: 'Cliffs of Id',
    neighborhood: 'Culver City',
    time: 'Till 11pm',
    distance: '3.6 km away',
    price: 'FREE',
    rating: 4.8,
    match: 88,
    category: 'active',
    trending: false,
    status: 'Open now',
    description: 'A bright climbing studio with a social hangout feel after the session ends.',
    why: 'Strong on activity-first plans, with people who like to move before dinner.',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1400&q=80',
    tags: ['Active'],
    people: ['AR', 'EL', 'MK'],
    score: 88
  },
  {
    id: 4,
    title: 'Sonora Taqueria',
    neighborhood: 'Boyle Heights',
    time: 'Till 11am',
    distance: '1.9 km away',
    price: '$',
    rating: 4.9,
    match: 90,
    category: 'brunch',
    trending: true,
    status: 'Open now',
    description: 'A lively brunch spot with bold flavor, big tables, and easy weekend energy.',
    why: 'Best for a group brunch that wants strong food, not just a reservation.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80',
    tags: ['Brunch', 'Late Night'],
    people: ['AR', 'SK', 'EL', 'JS'],
    score: 90
  },
  {
    id: 5,
    title: 'Vista Theater',
    neighborhood: 'Los Feliz',
    time: 'Shows till 11pm',
    distance: '2.8 km away',
    price: '$$',
    rating: 4.6,
    match: 81,
    category: 'art',
    trending: false,
    status: 'Closed',
    description: 'A cinematic pick for the slow-night crowd that wants atmosphere first.',
    why: 'A good fit for mellow group plans with a cultural angle.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80',
    tags: ['Art'],
    people: ['AR', 'MC'],
    score: 81
  },
  {
    id: 6,
    title: 'Hauser & Wirth',
    neighborhood: 'Arts District',
    time: '11am - 6pm',
    distance: '4.1 km away',
    price: 'FREE',
    rating: 4.8,
    match: 84,
    category: 'art',
    trending: false,
    status: 'Open now',
    description: 'A gallery-first daylight plan with clean architecture and a premium feel.',
    why: 'Pairs well with brunch or post-lunch wandering, especially for art-heavy weekends.',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1400&q=80',
    tags: ['Art', 'Brunch'],
    people: ['AR', 'SK', 'MK'],
    score: 84
  }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80'
]

const graphNodes = [
  { id: 'bar-flores', label: 'Bar Flores', top: '18%', left: '18%', tone: 'bg-gray-400' },
  { id: 'sonora', label: 'Sonora Taqueria', top: '68%', left: '44%', tone: 'bg-gray-600' },
  { id: 'vista', label: 'Vista Theater', top: '44%', left: '79%', tone: 'bg-[#0F766E]' },
  { id: 'center', label: '', top: '43%', left: '58%', tone: 'bg-black' }
]

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])
  
  return <>{count}</>
}

function PremiumStatCard({ label, value, icon: Icon, gradient, isAnimated }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(17,17,17,0.12)' }}
      className="group overflow-hidden rounded-[1.8rem] border border-white/40 bg-gradient-to-br from-white/80 via-white/60 to-[#FAF8F3]/80 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E]/8 via-transparent to-[#5B5FEF]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">{label}</p>
          <p className="mt-3 text-4xl font-black tracking-tight text-gray-950">
            {isAnimated ? <AnimatedCounter target={typeof value === 'string' ? parseInt(value) : value} /> : value}
          </p>
          {isAnimated && <p className="mt-1 text-xs text-[#0F766E] font-semibold">+12% since last week</p>}
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={20} />
        </div>
      </div>
      
      <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500" />
    </motion.div>
  )
}

function CategoryPill({ category, active, onClick }) {
  const Icon = category.icon

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center gap-2.5 rounded-full px-4 py-3 text-sm font-semibold transition-all duration-300 ${
        active
          ? 'bg-gradient-to-r from-gray-950 to-gray-900 text-white shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-white/20'
          : 'border border-white/40 bg-white/50 text-gray-600 shadow-sm hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]'
      }`}
    >
      <motion.div
        animate={active ? { rotate: 12, scale: 1.2 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon size={16} className={active ? 'text-[#0F766E]' : 'text-gray-400 group-hover:text-[#0F766E]'} />
      </motion.div>
      {category.label}
      {active && <span className="ml-1 inline-block h-2 w-2 rounded-full bg-[#0F766E]" />}
    </motion.button>
  )
}

function ScoreRing({ score }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[conic-gradient(#0F766E_0%_var(--score),rgba(17,17,17,0.1)_var(--score)_100%)] shadow-[0_20px_50px_rgba(15,118,110,0.15)]"
      style={{ '--score': `${score}%` }}
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FAF8F3] text-center shadow-inner">
        <div>
          <p className="text-3xl font-black text-gray-950">{score}%</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500">match</p>
        </div>
      </div>
    </motion.div>
  )
}

function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-[2rem] border border-black/8 bg-[#FAF8F3] p-3">
      <div className="h-[420px] rounded-[1.6rem] bg-gradient-to-br from-gray-200 to-gray-100" />
      <div className="space-y-3 px-1 py-4">
        <div className="h-3 w-24 rounded-full bg-gray-200" />
        <div className="h-6 w-3/4 rounded-full bg-gray-200" />
        <div className="h-4 w-1/2 rounded-full bg-gray-200" />
      </div>
    </div>
  )
}

function EditorialCard({ activity, onAdd }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.22 }}
      className="group overflow-hidden rounded-[2rem] border border-black/8 bg-[#FAF8F3] shadow-[0_12px_40px_rgba(17,17,17,0.05)] transition-all duration-300 hover:shadow-[0_24px_70px_rgba(17,17,17,0.12)]"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-black/5">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-[420px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#FAF8F3]/95 px-3 py-1.5 text-[11px] font-black tracking-wide text-gray-950 shadow-sm">
            {activity.price} · ★ {activity.rating}
          </span>
          <span className={`rounded-full px-3 py-1.5 text-[11px] font-black tracking-wide text-white shadow-sm ${activity.trending ? 'bg-[#0F766E]' : 'bg-gray-900/85'}`}>
            {activity.match}% MATCH
          </span>
          <span className={`rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide ${activity.status === 'Open now' ? 'bg-emerald-500 text-white' : 'bg-black/75 text-white'}`}>
            {activity.status}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
          <div className="max-w-[74%]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">{activity.neighborhood} · {activity.time}</p>
            <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{activity.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/84">{activity.description}</p>
          </div>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-gray-950 shadow-lg transition-transform duration-300 hover:scale-105">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-500">
          {activity.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-black/8 bg-white px-2.5 py-1.5 text-gray-500">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-[1.18fr_0.82fr]">
          <div className="rounded-[1.4rem] border border-black/8 bg-white p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Why it matches your vibe</p>
            <p className="mt-2 text-sm leading-6 text-gray-700">{activity.why}</p>
          </div>

          <div className="rounded-[1.4rem] border border-black/8 bg-white p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Friends keen</p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="flex -space-x-2">
                {activity.people.map((person) => (
                  <div key={person} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-950 text-[10px] font-black text-white shadow-sm">
                    {person}
                  </div>
                ))}
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-gray-950">{activity.people.length}/8</p>
                <p className="text-[11px] text-gray-500">ready</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <button
            onClick={() => onAdd(activity)}
            className="flex-1 rounded-full bg-[#0F766E] px-5 py-3 text-sm font-bold tracking-widest text-white shadow-[0_12px_30px_rgba(15,118,110,0.22)] transition-transform duration-300 hover:scale-[1.01]"
          >
            ADD TO PLAN
          </button>
          <button className="rounded-full border border-black/10 bg-transparent px-5 py-3 text-sm font-bold tracking-widest text-gray-950 transition-all duration-300 hover:border-black/20 hover:bg-black/5">
            OPEN PAGE
          </button>
        </div>
      </div>
    </motion.article>
  )
}

function DetailsPanel({ activity }) {
  return (
    <div className="sticky top-24 space-y-5 rounded-[2rem] border border-black/8 bg-[#FAF8F3] p-6 shadow-[0_12px_40px_rgba(17,17,17,0.05)]">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Why it scored {activity.match}</p>
        <h3 className="mt-2 text-2xl font-black text-gray-950">Editorial recommendation</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-gray-600">A quick read on why this pick rises to the top of the shortlist.</p>
      </div>

      <div className="space-y-4 rounded-[1.5rem] bg-white p-5">
        {[
          { label: 'Vibe Match', value: activity.why },
          { label: 'Distance', value: activity.distance },
          { label: 'Friends Keen', value: `${activity.people.length} of 8 already swiped go` },
          { label: 'Capacity', value: activity.time }
        ].map((item) => (
          <div key={item.label} className="border-b border-black/8 pb-4 last:border-b-0 last:pb-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">{item.label}</p>
            <p className="mt-2 text-sm leading-6 text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-4 text-center">
          <ScoreRing score={activity.score} />
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Recommendation score</p>
        </div>
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">AI summary</p>
          <p className="mt-3 text-sm leading-6 text-gray-700">
            Warm lighting, relaxed music, and a strong social overlap make this one feel curated rather than random.
          </p>
        </div>
      </div>
    </div>
  )
}

function FiltersBar({ searchTerm, setSearchTerm, sortBy, setSortBy, openNowOnly, setOpenNowOnly, onOpenDrawer }) {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <div className="space-y-3">
      <div className="relative">
        <motion.div
          animate={searchFocused ? { scale: 1.02 } : { scale: 1 }}
          className="relative flex items-center gap-3 rounded-full border border-white/40 bg-gradient-to-r from-white/70 via-white/60 to-[#FAF8F3]/70 px-5 py-4 shadow-[0_12px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl transition-all duration-300"
        >
          <motion.div
            animate={searchFocused ? { scale: 1.1, color: '#0F766E' } : { scale: 1, color: '#9CA3AF' }}
            transition={{ duration: 0.2 }}
          >
            <Search size={18} />
          </motion.div>
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder="Search venues, neighborhoods, moods"
            className="flex-1 bg-transparent text-sm font-medium outline-none text-gray-950 placeholder-gray-400"
          />
          {searchTerm && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setSearchTerm('')}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </motion.button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={searchFocused ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/40 bg-white/80 backdrop-blur-xl p-4 shadow-[0_20px_50px_rgba(17,17,17,0.1)]"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={14} className="text-[#0F766E]" />
            <span className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em]">AI Suggestions</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {['Trending now', 'Best for groups', 'Near you', 'Hidden gems'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="rounded-full bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700 transition-all hover:bg-[#0F766E] hover:text-white"
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <motion.label
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/50 px-4 py-3 text-sm font-medium text-gray-700 cursor-pointer transition-all hover:bg-white/70 backdrop-blur-sm"
          >
            <div className="relative">
              <input
                type="checkbox"
                checked={openNowOnly}
                onChange={(event) => setOpenNowOnly(event.target.checked)}
                className="h-4 w-4 accent-[#0F766E] cursor-pointer"
              />
              <motion.div
                animate={openNowOnly ? { scale: 1.2 } : { scale: 1 }}
                className="absolute inset-0 rounded-sm bg-[#0F766E]/20"
              />
            </div>
            Open now
          </motion.label>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/50 px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-white/70 backdrop-blur-sm"
          >
            <SlidersHorizontal size={16} className="text-[#0F766E]" />
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="bg-transparent font-semibold text-gray-900 outline-none cursor-pointer"
            >
              <option value="match">Match</option>
              <option value="rating">Rating</option>
              <option value="distance">Distance</option>
            </select>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1 }}
          className="hidden items-center gap-2 rounded-full border border-white/40 bg-white/40 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 backdrop-blur-sm lg:flex"
        >
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <div className="h-2 w-2 rounded-full bg-[#0F766E]" />
          </motion.div>
          Updating live
        </motion.div>

        <button onClick={onOpenDrawer} className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-4 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02] lg:hidden">
          <Filter size={16} /> Filters
        </button>
      </div>
    </div>
  )
}

function ConnectedVenues() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Connected Venues</p>
        <h3 className="mt-2 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Edges in the taste graph</h3>
        <p className="mt-4 max-w-md font-serif text-lg italic leading-8 text-gray-600">
          The strongest plans emerge where tastes overlap. This graph maps the venues your circle naturally pairs together.
        </p>
      </div>

      <div className="rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.05)] backdrop-blur-xl">
        <div className="relative h-[340px] rounded-[1.6rem] bg-gradient-to-br from-white to-[#FAF8F3] p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(91,95,239,0.08),transparent_32%)]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="24" y1="22" x2="50" y2="48" stroke="rgba(17,17,17,0.12)" strokeWidth="0.7" />
            <line x1="78" y1="26" x2="50" y2="48" stroke="rgba(17,17,17,0.12)" strokeWidth="0.7" />
            <line x1="29" y1="72" x2="50" y2="48" stroke="rgba(17,17,17,0.12)" strokeWidth="0.7" />
            <line x1="75" y1="74" x2="50" y2="48" stroke="rgba(17,17,17,0.18)" strokeWidth="0.8" />
            <line x1="29" y1="72" x2="75" y2="74" stroke="rgba(17,17,17,0.08)" strokeWidth="0.7" />
          </svg>

          {graphNodes.map((node) => (
            <button
              key={node.id}
              className={`absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 shadow-sm transition-all duration-300 hover:scale-125 ${node.tone}`}
              style={{ top: node.top, left: node.left }}
              aria-label={node.label || 'Center node'}
            />
          ))}

          <div className="absolute left-0 right-0 bottom-4 flex items-center justify-between px-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#0F766E]" /> Bar Flores</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gray-500" /> Sonora Taqueria</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#0F766E]" /> Vista Theater</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function GlassSectionTitle({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">{eyebrow}</p>
      <h3 className="mt-2 text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">{description}</p>
    </div>
  )
}

export default function ActivitySuggestions() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('match')
  const [openNowOnly, setOpenNowOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState(null)
  const [selectedActivityId, setSelectedActivityId] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    const timer = window.setTimeout(() => setIsLoading(false), 180)
    return () => window.clearTimeout(timer)
  }, [selectedCategory, searchTerm, sortBy, openNowOnly])

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(null), 2200)
    return () => window.clearTimeout(timer)
  }, [toast])

  const filteredActivities = useMemo(() => {
    const result = activities.filter((activity) => {
      const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory || activity.tags.some((tag) => tag.toLowerCase() === selectedCategory)
      const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) || activity.neighborhood.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesOpen = !openNowOnly || activity.status === 'Open now'
      return matchesCategory && matchesSearch && matchesOpen
    })

    const sorters = {
      match: (a, b) => b.match - a.match,
      rating: (a, b) => b.rating - a.rating,
      distance: (a, b) => parseFloat(a.distance) - parseFloat(b.distance)
    }

    return [...result].sort(sorters[sortBy] || sorters.match)
  }, [selectedCategory, searchTerm, sortBy, openNowOnly])

  const featuredActivity = filteredActivities.find((activity) => activity.id === selectedActivityId) || filteredActivities[0] || activities[0]
  const otherActivities = filteredActivities.filter((activity) => activity.id !== featuredActivity.id)

  const handleAddToPlan = (activity) => {
    setToast({ title: `${activity.title} added to plan`, detail: 'Saved to your premium shortlist.' })
    setSelectedActivityId(activity.id)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#F7F2EB] to-[#EEF3FF] text-gray-900">
      <div className="absolute left-[-70px] top-20 h-48 w-48 rounded-full bg-[#0F766E]/10 blur-3xl" />
      <div className="absolute right-[-50px] top-40 h-56 w-56 rounded-full bg-[#5B5FEF]/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-black/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-10 xl:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="space-y-12">
          <div className="space-y-8 rounded-[2rem] border border-white/40 bg-white/55 p-6 shadow-[0_12px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="space-y-6">
              {/* Cinematic Eyebrow with Accent Line */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-3"
              >
                <div className="h-0.5 w-12 bg-gradient-to-r from-[#0F766E] to-transparent" />
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">CURATED WEEKEND DISCOVERY</p>
              </motion.div>

              {/* Cinematic Title with Animated Underline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative"
              >
                <h1 className="max-w-4xl text-7xl font-black uppercase tracking-[-0.04em] sm:text-8xl lg:text-[8.5rem] xl:text-[9.5rem] lg:leading-[0.88]">
                  Shortlist
                </h1>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-4 left-0 h-1.5 w-32 origin-left bg-gradient-to-r from-[#0F766E] via-[#5B5FEF] to-transparent"
                />
              </motion.div>

              {/* Premium Editorial Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="max-w-3xl font-serif text-xl italic leading-9 text-gray-600 sm:text-2xl"
              >
                Premium editorial venue discovery for intelligent social planning. AI-curated picks ranked by your circle's collective taste.
              </motion.p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <PremiumStatCard
                label="Activities Found"
                value={filteredActivities.length}
                icon={Mountain}
                gradient="from-blue-500 to-indigo-600"
                isAnimated={true}
              />
              <PremiumStatCard
                label="Match Score"
                value={96}
                icon={Sparkles}
                gradient="from-teal-400 to-red-500"
                isAnimated={true}
              />
              <PremiumStatCard
                label="Friends Interested"
                value={8}
                icon={Users}
                gradient="from-purple-500 to-pink-600"
                isAnimated={true}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-2.5"
          >
            {categories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
              >
                <CategoryPill
                  category={category}
                  active={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FiltersBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortBy={sortBy}
              setSortBy={setSortBy}
              openNowOnly={openNowOnly}
              setOpenNowOnly={setOpenNowOnly}
              onOpenDrawer={() => setShowFilters(true)}
            />
          </motion.div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.95fr)] xl:items-start">
            <div className="space-y-6">
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="inline-flex items-center gap-2"
                  >
                    <div className="h-0.5 w-8 bg-[#0F766E]" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">AI CURATED PICKS</p>
                  </motion.div>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Editorial Discovery</h2>
                </div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="hidden items-center gap-2 rounded-full border border-white/40 bg-white/50 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 backdrop-blur-sm xl:flex"
                >
                  <div className="h-2 w-2 rounded-full bg-[#0F766E]" />
                  Updated live
                </motion.div>
              </div>

              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-6 md:grid-cols-2">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                  </motion.div>
                ) : filteredActivities.length ? (
                  <motion.div key="cards" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }} className="space-y-6">
                    <EditorialCard activity={featuredActivity} onAdd={handleAddToPlan} />
                    <div className="grid gap-6 md:grid-cols-2">
                      {otherActivities.map((activity) => (
                        <motion.article
                          key={activity.id}
                          layout
                          whileHover={{ y: -6 }}
                          className="overflow-hidden rounded-[1.8rem] border border-black/8 bg-[#FAF8F3] shadow-[0_10px_28px_rgba(17,17,17,0.04)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.09)]"
                        >
                          <div className="relative">
                            <img src={activity.image} alt={activity.title} className="h-72 w-full object-cover object-center transition-transform duration-700 hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                            <div className="absolute left-4 top-4 flex gap-2">
                              <span className="rounded-full bg-[#FAF8F3]/95 px-3 py-1.5 text-[11px] font-black text-gray-950">{activity.price} · {activity.rating}</span>
                              <span className="rounded-full bg-black/80 px-3 py-1.5 text-[11px] font-black text-white">{activity.match}%</span>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
                              <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">{activity.neighborhood}</p>
                                <h3 className="mt-2 text-2xl font-black leading-none">{activity.title}</h3>
                              </div>
                              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-gray-950 shadow-lg">
                                <ArrowRight size={17} />
                              </button>
                            </div>
                          </div>
                          <div className="space-y-4 p-5">
                            <p className="text-sm leading-6 text-gray-600">{activity.description}</p>
                            <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-500">
                              {activity.tags.map((tag) => (
                                <span key={tag} className="rounded-full border border-black/8 bg-white px-2.5 py-1.5">{tag}</span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between border-t border-black/8 pt-4 text-xs text-gray-500">
                              <span>{activity.time}</span>
                              <button onClick={() => handleAddToPlan(activity)} className="rounded-full bg-[#0F766E] px-4 py-2.5 font-bold text-white transition-transform hover:scale-[1.02]">
                                Add
                              </button>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="empty" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-black/8 bg-[#FAF8F3] p-10 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm">
                      <Sparkles size={28} />
                    </div>
                    <h4 className="mt-5 text-2xl font-black text-gray-950">No matches found</h4>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-600">Try clearing the search or switching categories to reveal more weekend ideas.</p>
                    <button
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedCategory('all')
                        setOpenNowOnly(false)
                      }}
                      className="mt-6 rounded-full bg-[#0F766E] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(15,118,110,0.2)]"
                    >
                      Reset Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <DetailsPanel activity={featuredActivity} />
          </div>

          <section className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
            <div className="rounded-[2rem] border border-black/8 bg-[#FAF8F3] p-6 shadow-[0_12px_40px_rgba(17,17,17,0.05)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Connected venues</p>
              <h3 className="mt-2 text-3xl font-black tracking-tight text-gray-950">Edges in the taste graph</h3>
              <p className="mt-4 font-serif text-lg italic leading-8 text-gray-600">
                Places your circle pairs together most often. The graph visualizes how social taste clusters inside the shortlist.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {galleryImages.map((src, index) => (
                  <div key={src} className="overflow-hidden rounded-2xl border border-black/8">
                    <img src={src} alt={`Venue inspiration ${index + 1}`} className="h-28 w-full object-cover object-center transition-transform duration-500 hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>

            <ConnectedVenues />
          </section>
        </motion.div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/35 p-4 backdrop-blur-sm lg:hidden">
            <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} className="ml-auto max-w-md">
              <div className="space-y-5 rounded-[2rem] border border-black/8 bg-[#FAF8F3] p-5 shadow-[0_12px_40px_rgba(17,17,17,0.08)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">Smart filters</p>
                    <h3 className="text-lg font-black text-gray-950">Refine shortlist</h3>
                  </div>
                  <button onClick={() => setShowFilters(false)} className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-500">
                    <X size={18} />
                  </button>
                </div>

                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search activities"
                    className="w-full rounded-full border border-black/8 bg-white py-3 pl-11 pr-4 text-sm outline-none"
                  />
                </div>

                <label className="flex items-center justify-between rounded-full border border-black/8 bg-white px-4 py-3 text-sm text-gray-700">
                  <span className="flex items-center gap-2"><Filter size={16} /> Open now only</span>
                  <input type="checkbox" checked={openNowOnly} onChange={(event) => setOpenNowOnly(event.target.checked)} className="h-4 w-4 accent-[#0F766E]" />
                </label>

                <label className="flex items-center justify-between rounded-full border border-black/8 bg-white px-4 py-3 text-sm text-gray-700">
                  <span className="flex items-center gap-2"><SlidersHorizontal size={16} /> Sort by</span>
                  <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="bg-transparent text-sm font-semibold text-gray-900 outline-none">
                    <option value="match">Match</option>
                    <option value="rating">Rating</option>
                    <option value="distance">Distance</option>
                  </select>
                </label>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }} className="fixed bottom-5 right-5 z-50 rounded-2xl border border-black/8 bg-[#FAF8F3] px-5 py-4 shadow-[0_20px_60px_rgba(17,17,17,0.12)] backdrop-blur-xl">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0F766E] text-white">
                <ThumbsUp size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-950">{toast.title}</p>
                <p className="mt-1 text-xs text-gray-500">{toast.detail}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
