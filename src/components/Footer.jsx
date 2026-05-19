import { Github, Linkedin, Twitter, Mail, Sparkles, ArrowUpRight, CalendarDays, MapPin, X, FileText } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [showReleaseNotes, setShowReleaseNotes] = useState(false)
  const socials = [
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Mail, href: '#email', label: 'Email' }
  ]

  return (
    <footer className="border-t border-white/50 bg-white/80 px-4 py-5 text-gray-900 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#2563EB] text-white shadow-lg shadow-teal-500/20">
              <Sparkles size={16} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Gather</p>
              <p className="text-sm font-semibold text-gray-900">Weekend planning made simple.</p>
            </div>
          </div>
          <p className="mt-3 max-w-xl text-xs leading-6 text-gray-500">
            Premium recommendations, better overlap, and faster decisions for your next weekend plan.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0F766E]/30 hover:text-[#0F766E] hover:shadow-[0_12px_30px_rgba(15,118,110,0.16)]"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>

      <div className="mx-auto mt-5 grid max-w-7xl gap-4 rounded-[1.5rem] border border-white/60 bg-white/70 p-4 backdrop-blur-md md:grid-cols-[1fr_auto] md:items-center">
        <div className="grid gap-2 sm:grid-cols-3">
          <div className="rounded-xl bg-[#fffdfa] p-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">Sync status</p>
            <p className="mt-1 text-sm font-semibold text-gray-900">All services online</p>
          </div>
          <div className="rounded-xl bg-[#fffdfa] p-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">Next release</p>
            <p className="mt-1 text-sm font-semibold text-gray-900">Friday feature update</p>
          </div>
          <div className="rounded-xl bg-[#fffdfa] p-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">Popular now</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 inline-flex items-center gap-2"><MapPin size={14} className="text-[#0F766E]" /> Rooftop planning</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => setShowReleaseNotes(true)} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700">
            <CalendarDays size={14} /> Release notes
          </button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-4 py-2 text-sm font-bold text-white">
            <ArrowUpRight size={14} /> Back to top
          </button>
        </div>
      </div>

      {showReleaseNotes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[2rem] border border-white/60 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.2)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Release Notes</p>
                <h3 className="mt-1 text-2xl font-black text-gray-950">What changed</h3>
              </div>
              <button onClick={() => setShowReleaseNotes(false)} className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
                <X size={18} />
              </button>
            </div>
            <div className="mt-5 space-y-3 text-sm text-gray-700">
              <p className="flex items-start gap-2"><FileText size={16} className="mt-0.5 text-[#0F766E]" /> Feature actions now update app state across the workspace.</p>
              <p className="flex items-start gap-2"><FileText size={16} className="mt-0.5 text-[#0F766E]" /> Poll sharing and export now run real browser operations.</p>
              <p className="flex items-start gap-2"><FileText size={16} className="mt-0.5 text-[#0F766E]" /> Sidebar, navbar, and footer controls now navigate or open useful panels.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
