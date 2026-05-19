import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function getPasswordStrength(password) {
  let score = 0
  if (password.length >= 8) score += 1
  if (/[A-Z]/.test(password)) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[^A-Za-z0-9]/.test(password)) score += 1
  return score
}

export default function AuthPage({ onLogin }) {
  const navigate = useNavigate()
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })

  const strength = useMemo(() => getPasswordStrength(formData.password), [formData.password])
  const strengthLabel = ['Weak', 'Fair', 'Good', 'Strong', 'Excellent'][strength]

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin({
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
      role: 'user'
    })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff8f0] via-[#f7f2eb] to-[#eef3ff] px-4 py-8 sm:px-6 lg:px-10">
      <div className="absolute left-[-70px] top-16 h-52 w-52 rounded-full bg-[#0f766e]/10 blur-3xl" />
      <div className="absolute right-[-70px] bottom-14 h-56 w-56 rounded-full bg-[#2563eb]/10 blur-3xl" />

      <button
        onClick={() => navigate('/')}
        className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-700 backdrop-blur-md hover:text-[#0f766e]"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="mx-auto grid min-h-[88vh] max-w-6xl items-center gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="elegant-panel rounded-[2rem] p-6 sm:p-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-gray-600">
            <Sparkles size={13} className="text-[#0f766e]" /> Premium Workspace
          </div>
          <h1 className="max-w-sm text-4xl font-black leading-tight text-gray-950 sm:text-5xl">
            Plan smarter with your people.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
            A focused experience for schedule overlap, activity discovery, and fast group decisions with clean visual insights.
          </p>

          <div className="mt-8 space-y-3">
            {[
              'Live overlap heatmap across your group',
              'Personalized recommendations by taste',
              'One-tap voting with clear outcomes'
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="mt-0.5 text-emerald-500" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-gray-950 p-5 text-white">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-400">
              <ShieldCheck size={14} /> Security
            </div>
            <p className="mt-2 text-sm text-gray-200">
              All sessions are encrypted and your workspace activity is protected by strict access controls.
            </p>
          </div>
        </aside>

        <section className="rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Welcome to Gather</p>
            <h2 className="mt-2 text-3xl font-black text-gray-950">{isSignUp ? 'Create account' : 'Sign in'}</h2>
            <p className="mt-2 text-sm text-gray-600">{isSignUp ? 'Set up your planning workspace.' : 'Continue to your group workspace.'}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  placeholder="John Doe"
                  required={isSignUp}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-all focus:border-[#0f766e] focus:ring-2 focus:ring-[#0f766e]/20"
                />
              </div>
            )}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                placeholder="you@email.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-all focus:border-[#0f766e] focus:ring-2 focus:ring-[#0f766e]/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                placeholder="Enter password"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-all focus:border-[#0f766e] focus:ring-2 focus:ring-[#0f766e]/20"
              />
              <div className="mt-2">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Password strength</span>
                  <span className="font-semibold text-gray-700">{strengthLabel}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-500 via-teal-500 to-emerald-500 transition-all duration-300"
                    style={{ width: `${Math.max(18, strength * 25)}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#0f766e] to-[#2563eb] py-2.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(15,118,110,0.22)]"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 border-t border-gray-100 pt-5 text-center text-sm text-gray-600">
            {isSignUp ? 'Already have an account?' : 'New to WeekendPlanning?'}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp)
                setFormData({ name: '', email: '', password: '' })
              }}
              className="ml-2 font-bold text-[#0f766e]"
            >
              {isSignUp ? 'Sign In' : 'Create one'}
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
