import { ArrowRight, CheckCircle, BarChart3, Users, Clock, Shield, Smartphone, Zap, Cloud, Lock, Bell, Lightbulb } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function FeaturesPage() {
  const navigate = useNavigate()

  const features = [
    {
      title: 'Smart Scheduling',
      description: 'AI-powered algorithm finds the perfect time that works for everyone in seconds',
      image: '/src/5.jpg',
      icon: <Clock size={56} />
    },
    {
      title: 'Instant Polling',
      description: 'Make group decisions democratically. Vote on activities, restaurants, and dates',
      image: '/src/6.jpg',
      icon: <BarChart3 size={56} />
    },
    {
      title: 'Group Coordination',
      description: 'Keep everyone in sync with real-time notifications and a shared planning dashboard',
      image: '/src/7.jpg',
      icon: <Users size={56} />
    },
    {
      title: 'Activity Discovery',
      description: 'Explore hundreds of curated weekend activities based on your interests and location',
      image: '/src/8.jpg',
      icon: <Smartphone size={56} />
    },
    {
      title: 'Social Integration',
      description: 'Connect with friends, build groups, and discover new connections with shared interests',
      image: '/src/24.jpg',
      icon: <Users size={56} />
    },
    {
      title: 'Secure & Private',
      description: 'Your data is encrypted and protected. Only see information you want to share',
      image: '/src/25.jpg',
      icon: <Shield size={56} />
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate('/')}>WeekendPlanning</div>
          
          <div className="hidden md:flex items-center gap-12">
            <a href="/" className="text-white font-semibold hover:text-yellow-400 transition text-lg">HOME</a>
            <a href="/about" className="text-white font-semibold hover:text-yellow-400 transition text-lg">ABOUT</a>
            <a href="/resources" className="text-white font-semibold hover:text-yellow-400 transition text-lg">RESOURCES</a>
            <a href="/features" className="text-yellow-400 font-semibold text-lg">FEATURES</a>
            <a href="/blog" className="text-white font-semibold hover:text-yellow-400 transition text-lg">BLOG</a>
            <a href="/contact" className="text-white font-semibold hover:text-yellow-400 transition text-lg">CONTACT</a>
            <button onClick={() => navigate('/login')} className="px-8 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-48 pb-32 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: `url('/src/8.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '700px',
          backgroundColor: '#f0f0f0'
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-16 bg-white px-16 py-12 rounded-3xl inline-block shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-black text-black">
              Powerful Features
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-white font-bold max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Everything you need to plan perfect weekends with your crew
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
            {features.map((feature, i) => (
              <div key={i} className="group">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-black mb-8 h-64 relative">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div className="text-lime-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-5xl md:text-6xl font-black text-black mb-4">{feature.title}</h3>
                <p className="text-2xl text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Feature Comparison */}
          <div className="mb-32">
            <h2 className="text-7xl md:text-8xl font-black text-black mb-16 text-center">How We Compare</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-4 border-black">
                    <th className="text-left p-6 text-3xl font-black">Feature</th>
                    <th className="p-6 text-3xl font-black text-lime-400">WeekendPlanning</th>
                    <th className="p-6 text-3xl font-black text-gray-400">Other Apps</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'AI Scheduling', ours: true, others: false },
                    { feature: 'Real-Time Polling', ours: true, others: false },
                    { feature: 'Activity Discovery', ours: true, others: false },
                    { feature: 'Group Coordination', ours: true, others: true },
                    { feature: 'Social Network', ours: true, others: false },
                    { feature: 'Free Forever', ours: true, others: false },
                    { feature: 'Mobile Apps', ours: true, others: true },
                    { feature: '24/7 Support', ours: true, others: false }
                  ].map((row, i) => (
                    <tr key={i} className="border-b-2 border-gray-200 hover:bg-gray-50">
                      <td className="p-6 text-2xl font-bold text-black">{row.feature}</td>
                      <td className="p-6 text-center text-2xl">
                        {row.ours ? <CheckCircle size={40} className="text-lime-400 mx-auto" /> : <span className="text-gray-400">✗</span>}
                      </td>
                      <td className="p-6 text-center text-2xl">
                        {row.others ? <CheckCircle size={40} className="text-gray-400 mx-auto" /> : <span className="text-gray-400">✗</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deep Dive Features */}
          <div className="mb-32">
            <h2 className="text-7xl md:text-8xl font-black text-black mb-16 text-center">Feature Deep Dives</h2>
            
            <div className="space-y-20">
              {[
                {
                  title: 'Smart Scheduling Algorithm',
                  description: 'Our proprietary AI learns from your group\'s preferences and finds optimal times that work for everyone.',
                  features: ['Learns from past plans', 'Considers time zones', 'Avoids repeat conflicts', 'Suggests best times'],
                  image: '/src/5.jpg'
                },
                {
                  title: 'Intelligent Polling System',
                  description: 'Make fair group decisions with our advanced polling system that ensures every voice is heard.',
                  features: ['Weighted voting', 'Runoff elections', 'Preference ranking', 'Anonymous options'],
                  image: '/src/6.jpg'
                },
                {
                  title: 'Activity Discovery Engine',
                  description: 'Explore personalized activity recommendations based on your interests and group preferences.',
                  features: ['Location-based search', 'Rating & reviews', 'Budget filtering', 'Group preferences'],
                  image: '/src/7.jpg'
                }
              ].map((feature, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <h3 className="text-6xl md:text-7xl font-black text-black mb-6">{feature.title}</h3>
                    <p className="text-2xl text-gray-700 leading-relaxed mb-8">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {feature.features.map((feat, j) => (
                        <div key={j} className="flex gap-3 items-start">
                          <Zap size={32} className="text-lime-400 flex-shrink-0 mt-1" />
                          <span className="text-xl font-bold text-gray-700">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`rounded-3xl overflow-hidden shadow-2xl border-4 border-black h-96 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Features */}
          <div className="mb-32">
            <h2 className="text-7xl md:text-8xl font-black text-black mb-16 text-center">Advanced Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Cloud size={48} />, title: 'Cloud Sync', desc: 'Automatic sync across all your devices in real-time' },
                { icon: <Lock size={48} />, title: 'Privacy Control', desc: 'Granular privacy settings for each group' },
                { icon: <Bell size={48} />, title: 'Smart Notifications', desc: 'Get notified only when it matters' },
                { icon: <Lightbulb size={48} />, title: 'Suggestions', desc: 'AI suggests activities you\'ll love' },
                { icon: <Users size={48} />, title: 'Group Analytics', desc: 'See insights about your group dynamics' },
                { icon: <Zap size={48} />, title: 'Quick Actions', desc: 'One-click actions for common tasks' }
              ].map((item, i) => (
                <div key={i} className="p-8 border-4 border-black rounded-3xl hover:shadow-2xl transition">
                  <div className="text-lime-400 mb-4">{item.icon}</div>
                  <h3 className="text-3xl font-black text-black mb-3">{item.title}</h3>
                  <p className="text-lg text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-black text-white p-16 rounded-3xl border-4 border-lime-400">
            <h2 className="text-7xl md:text-8xl font-black mb-12 text-center">Why Choose WeekendPlanning?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: '10,000+ Active Users', description: 'Join a thriving community planning their perfect weekends' },
                { title: '99.9% Uptime', description: 'Reliable service you can count on every weekend' },
                { title: 'Free Forever', description: 'Core features available to all users at no cost' },
                { title: 'Mobile First', description: 'Optimized for iOS and Android devices' },
                { title: 'Real-Time Updates', description: 'See changes instantly as your friends respond' },
                { title: 'World Class Support', description: 'Get help from our dedicated support team' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <CheckCircle size={56} className="text-lime-400 flex-shrink-0 mt-2" />
                  <div>
                    <h3 className="text-3xl font-black mb-2">{item.title}</h3>
                    <p className="text-xl text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-black mb-8">Experience the Difference</h2>
          <p className="text-2xl md:text-3xl mb-12 leading-relaxed">Start planning better weekends today</p>
          <button onClick={() => navigate('/login')} className="inline-flex items-center gap-4 px-12 py-6 bg-lime-400 text-black font-black text-2xl rounded-full hover:bg-yellow-400 transition transform hover:scale-105">
            Get Started Now <ArrowRight size={32} />
          </button>
        </div>
      </section>
    </div>
  )
}
