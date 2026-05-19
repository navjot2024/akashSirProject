import { Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react'

export default function Footer() {
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
    </footer>
  )
}
