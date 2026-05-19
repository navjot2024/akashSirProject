import { ArrowRight, Users, Target, Zap, Heart, TrendingUp, Globe, Award, Lightbulb } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate('/')}>WeekendPlanning</div>
          
          <div className="hidden md:flex items-center gap-12">
            <a href="/" className="text-white font-semibold hover:text-yellow-400 transition text-lg">HOME</a>
            <a href="/about" className="text-yellow-400 font-semibold text-lg">ABOUT</a>
            <a href="/resources" className="text-white font-semibold hover:text-yellow-400 transition text-lg">RESOURCES</a>
            <a href="/features" className="text-white font-semibold hover:text-yellow-400 transition text-lg">FEATURES</a>
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
        className="relative pt-48 pb-32 px-3 text-center overflow-hidden"
        style={{
          backgroundImage: `url('/src/11.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          minHeight: '700px'
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="mb-16 bg-white px-16 py-12 rounded-3xl inline-block shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-black text-black">
              About WeekendPlanning
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-white font-bold max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            We're on a mission to eliminate weekend chaos and bring friends together
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-40 px-3 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-7xl md:text-8xl font-black text-black mb-8 leading-tight">
                Our Story
              </h2>
              <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                WeekendPlanning was born from a simple frustration: coordinating weekend plans with friends shouldn't be this hard. 
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                What started as a small project to solve our own scheduling nightmares has evolved into a platform used by thousands of people who just want their weekends to be more fun and less stressful.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Today, we're committed to building the most intuitive platform for group planning, where decisions are made instantly, and everyone feels heard.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-black">
              <img src="/src/10.jpg" alt="team" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-32 -mx-3 px-3">
            <h2 className="text-7xl md:text-8xl font-black text-black mb-20 text-center leading-tight">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Users size={48} />,
                  title: 'Community First',
                  description: 'We believe in the power of bringing people together. Our platform brings friends closer and makes group coordination seamless and enjoyable.',
                  image: '/src/1.jpg'
                },
                {
                  icon: <Target size={48} />,
                  title: 'Smart Solutions',
                  description: 'Every feature is designed to save time and reduce friction. We focus on intelligent design that works intuitively for everyone.',
                  image: '/src/2.jpg'
                },
                {
                  icon: <Zap size={48} />,
                  title: 'Fast & Simple',
                  description: 'Complexity is the enemy. We keep things straightforward and user-friendly. Simple solutions for everyday problems.',
                  image: '/src/3.jpg'
                },
                {
                  icon: <Heart size={48} />,
                  title: 'Care About Users',
                  description: 'Your feedback shapes every decision we make. We listen, learn, and continuously improve based on your needs.',
                  image: '/src/4.jpg'
                }
              ].map((value, i) => (
                <div key={i} className="rounded-3xl overflow-hidden border-4 border-black hover:shadow-2xl transition flex flex-row bg-white min-h-96">
                  <div className="w-1/2 overflow-hidden">
                    <img src={value.image} alt={value.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-1/2 bg-black text-white p-8 flex flex-col justify-between">
                    <div className="mb-4 text-lime-400">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black mb-3">{value.title}</h3>
                      <p className="text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-40 px-3 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-7xl md:text-8xl font-black mb-20 text-center">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { year: '2021', title: 'Founded', description: 'Started as a side project to solve scheduling problems' },
              { year: '2022', title: '1,000 Users', description: 'Reached our first 1,000 active users milestone' },
              { year: '2023', title: 'Series A Funding', description: 'Raised $5M to scale and expand features' },
              { year: '2024', title: '10,000+ Users', description: 'Now serving thousands of weekend planners' }
            ].map((milestone, i) => (
              <div key={i} className="p-8 border-4 border-lime-400 rounded-3xl text-center hover:shadow-2xl transition">
                <p className="text-5xl font-black text-lime-400 mb-4">{milestone.year}</p>
                <h3 className="text-3xl font-black mb-4">{milestone.title}</h3>
                <p className="text-lg leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section 
        className="py-40 px-3 relative"
        style={{
          backgroundImage: `url('/src/wwepln.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto relative z-10 px-4">
          <h2 className="text-7xl md:text-8xl font-black text-white mb-16 drop-shadow-lg">Why We Started WeekendPlanning</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-black h-96">
              <img src="/src/24.jpg" alt="team meeting" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-2xl text-white font-bold leading-relaxed mb-6 drop-shadow-lg">
                Every Friday, our founders would spend hours in group chats trying to coordinate weekend plans. Someone would suggest a time, others would complain, debates would happen, and nothing would get decided.
              </p>
              <p className="text-2xl text-white font-bold leading-relaxed mb-6 drop-shadow-lg">
                We realized we weren't alone. Thousands of friend groups were dealing with the same problem - chaos in planning, people feeling left out, and weekends that were more stressful than fun.
              </p>
              <p className="text-2xl text-white font-bold leading-relaxed mb-6 drop-shadow-lg">
                That's when we decided to build something different. A tool that brings friends together, makes decisions instantly, and turns weekend planning from a chore into something exciting.
              </p>
              <p className="text-2xl text-lime-400 font-black drop-shadow-lg">
                Now, we're changing how people plan weekends, one group at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-40 px-3 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-7xl md:text-8xl font-black text-black mb-20 text-center">Our Company Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb size={48} />,
                title: 'Innovation First',
                description: 'We constantly question the status quo and seek better solutions'
              },
              {
                icon: <Globe size={48} />,
                title: 'Global Mindset',
                description: 'We think globally and act locally to serve communities worldwide'
              },
              {
                icon: <Award size={48} />,
                title: 'Excellence',
                description: 'We deliver high-quality features that users love'
              },
              {
                icon: <TrendingUp size={48} />,
                title: 'Growth',
                description: 'We invest in our team and encourage continuous learning'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border-4 border-black hover:shadow-2xl transition">
                <div className="text-lime-400 mb-4">{item.icon}</div>
                <h3 className="text-3xl font-black text-black mb-3">{item.title}</h3>
                <p className="text-lg text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-40 px-3 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-7xl md:text-8xl font-black mb-20 text-center">By The Numbers</h2>
          <div className="relative h-96">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 via-lime-400 to-transparent transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full items-center">
              {[
                { number: '10,000+', label: 'Active Users' },
                { number: '50,000+', label: 'Weekends Planned' },
                { number: '100,000+', label: 'Hours Saved' },
                { number: '95%', label: 'User Satisfaction' }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="relative flex flex-col items-center"
                  style={{
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  {/* Circle Node */}
                  <div className="w-48 h-48 rounded-full border-4 border-lime-400 bg-black flex items-center justify-center mb-8 hover:shadow-2xl hover:shadow-lime-400/50 transition-all cursor-pointer relative z-10">
                    <p className="text-5xl font-black text-lime-400 text-center">{stat.number}</p>
                  </div>
                  {/* Label Below */}
                  <p className="text-2xl font-black text-center text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </section>

      {/* Investors & Partners Section */}
      <section className="py-40 px-3 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-7xl md:text-8xl font-black text-black mb-16 text-center">Backed By The Best</h2>
          <div className="mb-20">
            <h3 className="text-5xl font-black text-black mb-12 text-center">Our Investors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Sequoia Capital', 'a16z Ventures', 'Y Combinator'].map((investor, i) => (
                <div key={i} className="p-12 border-4 border-black rounded-3xl text-center hover:shadow-2xl transition">
                  <p className="text-3xl font-black text-black">{investor}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-5xl font-black text-black mb-16 text-center">Strategic Partners</h3>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
              <div className="flex gap-10 pb-4" style={{
                animation: 'scroll 80s linear infinite'
              }}>
                {[
                  { 
                    name: 'Google', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#DADCE0" strokeWidth="2"/>
                        <path d="M 50 20 A 30 30 0 0 1 75 30 A 30 30 0 0 1 80 55" stroke="#4285F4" strokeWidth="5" fill="none" strokeLinecap="round"/>
                        <circle cx="35" cy="60" r="8" fill="#EA4335"/>
                        <circle cx="50" cy="70" r="8" fill="#FBBC04"/>
                        <circle cx="65" cy="60" r="8" fill="#34A853"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Microsoft', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="8" width="8" height="8" fill="#F25022"/>
                        <rect x="18" y="8" width="8" height="8" fill="#7FBA00"/>
                        <rect x="8" y="18" width="8" height="8" fill="#00A4EF"/>
                        <rect x="18" y="18" width="8" height="8" fill="#FFB900"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Slack', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="16" fill="#E01E5A"/>
                        <text x="24" y="30" fontSize="24" fontWeight="bold" textAnchor="middle" fill="white">S</text>
                      </svg>
                    )
                  },
                  { 
                    name: 'Zoom', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="8" fill="#0B5CFF"/>
                        <text x="24" y="32" fontSize="20" fontWeight="bold" textAnchor="middle" fill="white">Z</text>
                      </svg>
                    )
                  },
                  { 
                    name: 'Figma', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="14" r="6" fill="#F24E1E"/>
                        <circle cx="32" cy="14" r="6" fill="#A259FF"/>
                        <circle cx="32" cy="26" r="6" fill="#1ABCFE"/>
                        <circle cx="20" cy="26" r="6" fill="#0ACF83"/>
                        <circle cx="20" cy="34" r="6" fill="#F24E1E"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Notion', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="6" fill="black"/>
                        <text x="24" y="32" fontSize="24" fontWeight="bold" textAnchor="middle" fill="white">N</text>
                      </svg>
                    )
                  },
                  { 
                    name: 'Discord', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="8" fill="#5865F2"/>
                        <text x="24" y="32" fontSize="24" fontWeight="bold" textAnchor="middle" fill="white">D</text>
                      </svg>
                    )
                  },
                  { 
                    name: 'Stripe', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="6" fill="#005EB8"/>
                        <text x="24" y="32" fontSize="20" fontWeight="bold" textAnchor="middle" fill="white">S</text>
                      </svg>
                    )
                  },
                  { 
                    name: 'Google', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#DADCE0" strokeWidth="2"/>
                        <path d="M 50 20 A 30 30 0 0 1 75 30 A 30 30 0 0 1 80 55" stroke="#4285F4" strokeWidth="5" fill="none" strokeLinecap="round"/>
                        <circle cx="35" cy="60" r="8" fill="#EA4335"/>
                        <circle cx="50" cy="70" r="8" fill="#FBBC04"/>
                        <circle cx="65" cy="60" r="8" fill="#34A853"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Microsoft', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="8" width="8" height="8" fill="#F25022"/>
                        <rect x="18" y="8" width="8" height="8" fill="#7FBA00"/>
                        <rect x="8" y="18" width="8" height="8" fill="#00A4EF"/>
                        <rect x="18" y="18" width="8" height="8" fill="#FFB900"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Slack', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="16" fill="#E01E5A"/>
                        <text x="24" y="30" fontSize="24" fontWeight="bold" textAnchor="middle" fill="white">S</text>
                      </svg>
                    )
                  },
                  { 
                    name: 'Zoom', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="8" fill="#0B5CFF"/>
                        <text x="24" y="32" fontSize="20" fontWeight="bold" textAnchor="middle" fill="white">Z</text>
                      </svg>
                    )
                  },
                  { 
                    name: 'Figma', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="14" r="6" fill="#F24E1E"/>
                        <circle cx="32" cy="14" r="6" fill="#A259FF"/>
                        <circle cx="32" cy="26" r="6" fill="#1ABCFE"/>
                        <circle cx="20" cy="26" r="6" fill="#0ACF83"/>
                        <circle cx="20" cy="34" r="6" fill="#F24E1E"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Notion', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="6" fill="black"/>
                        <text x="24" y="32" fontSize="24" fontWeight="bold" textAnchor="middle" fill="white">N</text>
                      </svg>
                    )
                  },
                  { 
                    name: 'Discord', 
                    logo: (
                      <svg width="120" height="120" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="8" fill="#5865F2"/>
                        <text x="24" y="32" fontSize="24" fontWeight="bold" textAnchor="middle" fill="white">D</text>
                      </svg>
                    )
                  }
                ].map((partner, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center gap-5 p-10 rounded-2xl hover:shadow-2xl transition border-2 bg-white flex-shrink-0"
                    style={{
                      borderColor: '#e5e7eb',
                      minWidth: '220px'
                    }}
                  >
                    <div className="flex items-center justify-center w-32 h-32 rounded-xl bg-gray-50">
                      {partner.logo}
                    </div>
                    <p className="text-xl font-black text-black text-center">
                      {partner.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <style>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-50%));
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-40 px-3 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-7xl md:text-8xl font-black text-black mb-20 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {[
              { name: 'Alex Chen', role: 'Co-Founder & CEO', bio: 'Former Google PM with 10+ years in tech', image: '/src/21.jpg' },
              { name: 'Sarah Johnson', role: 'Co-Founder & CTO', bio: 'Stanford CS grad, expert in distributed systems', image: '/src/22.jpg' },
              { name: 'Marcus Williams', role: 'Head of Product', bio: 'Led product teams at Facebook, now shaping our vision', image: '/src/23.jpg' },
              { name: 'Emily Chen', role: 'VP of Design', bio: 'Award-winning designer focused on user experience', image: '/src/24.jpg' },
              { name: 'David Rodriguez', role: 'VP of Engineering', bio: 'Built scalable systems for 1M+ users', image: '/src/25.jpg' },
              { name: 'Lisa Thompson', role: 'VP of Marketing', bio: 'Growth expert who scaled 5 startups', image: '/src/26.jpg' }
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-black mb-6 h-80 object-cover">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-4xl font-black text-black mb-2">{member.name}</h3>
                <p className="text-2xl text-lime-400 font-bold mb-3">{member.role}</p>
                <p className="text-lg text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="py-40 px-3 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-7xl md:text-8xl font-black mb-20 text-center">Press & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '"The Best App for Group Planning"', source: 'Tech Crunch', date: 'March 2024' },
              { title: '"How WeekendPlanning is Changing Social Coordination"', source: 'Forbes', date: 'February 2024' },
              { title: '"Most Innovative SaaS Startup"', source: 'Product Hunt', date: 'January 2024' },
              { title: '"The Future of Group Coordination"', source: 'The Verge', date: 'December 2023' },
              { title: '"Top 10 Productivity Apps of 2024"', source: 'Business Insider', date: 'January 2024' },
              { title: '"How Friends Are Planning Weekends Better"', source: 'Wall Street Journal', date: 'November 2023' }
            ].map((press, i) => (
              <div key={i} className="p-8 border-4 border-lime-400 rounded-3xl hover:shadow-2xl transition">
                <p className="text-2xl font-black mb-4">{press.title}</p>
                <p className="text-lg text-lime-400 font-bold mb-2">{press.source}</p>
                <p className="text-gray-400">{press.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-40 px-3 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-7xl md:text-8xl font-black text-black mb-16 text-center">Our Vision for The Future</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-black h-96">
              <img src="/src/26.jpg" alt="future vision" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                We envision a world where coordinating with friends is effortless. No more endless group chats, no more conflicting schedules, no more stress.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                In the next 5 years, we're planning to:
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  'Expand to 100+ countries with localized experiences',
                  'Introduce AI-powered activity recommendations',
                  'Build native apps for all major platforms',
                  'Create a global community of weekend planners',
                  'Partner with thousands of local businesses'
                ].map((item, i) => (
                  <li key={i} className="text-2xl text-gray-700 flex items-start gap-4">
                    <span className="text-lime-400 font-black text-3xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-3 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-7xl md:text-8xl font-black mb-8">Ready to Transform Your Weekends?</h2>
          <p className="text-2xl md:text-3xl mb-12 leading-relaxed">Join thousands of people who've already ditched the chaos</p>
          <button onClick={() => navigate('/login')} className="inline-flex items-center gap-4 px-12 py-6 bg-lime-400 text-black font-black text-2xl rounded-full hover:bg-yellow-400 transition transform hover:scale-105">
            Get Started Now <ArrowRight size={32} />
          </button>
        </div>
      </section>
    </div>
  )
}
