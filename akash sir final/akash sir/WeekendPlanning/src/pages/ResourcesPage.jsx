import { ArrowRight, Book, Video, Headphones, FileText, Zap, Users, Download, Layers, BarChart3, Smartphone, Globe, MessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ResourcesPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate('/')}>WeekendPlanning</div>
          
          <div className="hidden md:flex items-center gap-12">
            <a href="/" className="text-white font-semibold hover:text-yellow-400 transition text-lg">HOME</a>
            <a href="/about" className="text-white font-semibold hover:text-yellow-400 transition text-lg">ABOUT</a>
            <a href="/resources" className="text-yellow-400 font-semibold text-lg">RESOURCES</a>
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
          backgroundImage: `url('/src/5.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '700px',
          backgroundColor: '#f0f0f0'
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="mb-16 bg-white px-16 py-12 rounded-3xl inline-block shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-black text-black">
              Resources & Guides
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-white font-bold max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Learn everything you need to master weekend planning
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-40 px-3 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-7xl md:text-8xl font-black text-black mb-20 text-center">Learning Hub</h2>
          
          {/* Documentation - Cards with Image Background and Text Overlay */}
          <div className="mb-32">
            <h3 className="text-6xl md:text-7xl font-black text-black mb-16 text-center">Documentation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Getting Started', description: 'Set up your account and join your first group in 5 minutes', image: '/src/1.jpg' },
                { title: 'Creating Groups', description: 'Learn how to create and manage your planning groups', image: '/src/2.jpg' },
                { title: 'Scheduling Features', description: 'Master the AI-powered scheduling algorithm', image: '/src/3.jpg' },
                { title: 'Polling & Voting', description: 'Make decisions the fair and fun way', image: '/src/4.jpg' },
                { title: 'Activity Discovery', description: 'Find the perfect activities for your group', image: '/src/5.jpg' },
                { title: 'Mobile App Guide', description: 'Get the most out of WeekendPlanning on mobile', image: '/src/6.jpg' }
              ].map((doc, i) => (
                <div 
                  key={i} 
                  className="relative h-96 rounded-3xl overflow-hidden border-4 border-black cursor-pointer group shadow-lg"
                  style={{
                    backgroundImage: `url('${doc.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div></div>
                    <div>
                      <h4 className="text-3xl md:text-4xl font-black text-white mb-3">{doc.title}</h4>
                      <p className="text-lg text-gray-100 leading-relaxed">{doc.description}</p>
                    </div>
                  </div>
                  
                  {/* Hover effect with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-lime-400/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Tutorials - Enhanced */}
          <div className="mb-32">
            <h3 className="text-6xl md:text-7xl font-black text-black mb-16 text-center">Video Tutorials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'How to Schedule Group Meetings', duration: '5:42' },
                { title: 'Advanced Polling Techniques', duration: '8:15' },
                { title: 'Managing Large Groups', duration: '6:30' },
                { title: 'Mobile App Tips & Tricks', duration: '7:45' }
              ].map((video, i) => (
                <div key={i} className="relative group rounded-3xl overflow-hidden border-4 border-black h-96 cursor-pointer shadow-xl">
                  <img src={`/src/${21 + i}.jpg`} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full border-4 border-lime-400 flex items-center justify-center mb-4">
                        <Video size={48} className="text-lime-400" />
                      </div>
                      <h4 className="text-2xl font-black text-white mb-2">{video.title}</h4>
                      <p className="text-xl text-lime-400">{video.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Resources - Circles */}
          <div className="mb-32">
            <h3 className="text-6xl md:text-7xl font-black text-black mb-16 text-center">Support Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Headphones size={64} />,
                  title: 'Live Support',
                  description: 'Chat with our support team 24/7',
                  link: 'Start Chat'
                },
                {
                  icon: <Users size={64} />,
                  title: 'Community Forum',
                  description: 'Get help from other WeekendPlanning users',
                  link: 'Visit Forum'
                },
                {
                  icon: <FileText size={64} />,
                  title: 'FAQ',
                  description: 'Find answers to common questions',
                  link: 'Read FAQ'
                },
                {
                  icon: <MessageSquare size={64} />,
                  title: 'Feedback',
                  description: 'Share your ideas and suggestions',
                  link: 'Send Feedback'
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center justify-center w-full aspect-square rounded-full bg-black border-4 border-black hover:shadow-2xl hover:shadow-white/50 transition transform hover:scale-105 cursor-pointer p-8"
                >
                  <div className="mb-6 text-white">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-black mb-3 text-white text-center">{item.title}</h4>
                  <p className="text-base font-semibold mb-6 text-gray-200 text-center leading-snug">{item.description}</p>
                  <button className="text-white font-black text-sm hover:text-lime-400 transition">
                    {item.link} →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices - Timeline Style */}
          <div 
            className="text-white p-16 rounded-3xl border-4 border-lime-400 mb-32 relative overflow-hidden"
            style={{
              backgroundImage: `url('/src/7.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10">
              <h2 className="text-7xl md:text-8xl font-black mb-16 text-center">Best Practices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { title: 'Plan Ahead', description: 'Start planning at least 2-3 weeks in advance for best results', number: '01' },
                  { title: 'Invite Early', description: 'Get everyone in the group as soon as you have an idea', number: '02' },
                  { title: 'Be Flexible', description: 'Allow enough options to find times everyone can make', number: '03' },
                  { title: 'Use Polls', description: 'Let everyone vote rather than deciding unilaterally', number: '04' },
                  { title: 'Stay Updated', description: 'Check notifications regularly for group updates', number: '05' },
                  { title: 'Share Activities', description: 'Suggest diverse activities to appeal to everyone', number: '06' }
                ].map((practice, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="text-6xl font-black text-lime-400 group-hover:text-yellow-300 transition">{practice.number}</div>
                    <div>
                      <h3 className="text-3xl font-black mb-2 group-hover:text-lime-400 transition">{practice.title}</h3>
                      <p className="text-xl text-gray-200">{practice.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced Tutorials - Feature Grid with Numbers */}
          <div className="mb-32">
            <h3 className="text-6xl md:text-7xl font-black text-black mb-16">🚀 Advanced Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Custom Group Rules',
                  description: 'Set up automated rules for your group like voting thresholds and quorum requirements',
                  number: '01',
                  bg: 'bg-gradient-to-br from-blue-50 to-blue-100'
                },
                {
                  title: 'Analytics & Insights',
                  description: 'Track group activity, understand preferences, and improve planning over time',
                  number: '02',
                  bg: 'bg-gradient-to-br from-purple-50 to-purple-100'
                },
                {
                  title: 'Integration API',
                  description: 'Connect WeekendPlanning with your favorite apps like Google Calendar and Slack',
                  number: '03',
                  bg: 'bg-gradient-to-br from-pink-50 to-pink-100'
                },
                {
                  title: 'Advanced Scheduling',
                  description: 'Use complex scheduling rules like blackout dates and recurring meetings',
                  number: '04',
                  bg: 'bg-gradient-to-br from-green-50 to-green-100'
                },
                {
                  title: 'Activity Marketplace',
                  description: 'Discover and book activities directly through our partner ecosystem',
                  number: '05',
                  bg: 'bg-gradient-to-br from-orange-50 to-orange-100'
                },
                {
                  title: 'Group Permissions',
                  description: 'Fine-grained control over who can do what in your group',
                  number: '06',
                  bg: 'bg-gradient-to-br from-red-50 to-red-100'
                }
              ].map((item, i) => (
                <div key={i} className={`${item.bg} p-8 border-4 border-black rounded-3xl hover:shadow-2xl transition transform hover:scale-105 relative`}>
                  <div className="text-6xl font-black text-black opacity-10 absolute top-4 right-6">{item.number}</div>
                  <div className="text-lime-400 mb-4">
                    <Layers size={48} />
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-black mb-3">{item.title}</h4>
                  <p className="text-xl text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integration & Tools - Scrolling Carousel with Logos */}
          <div className="mb-32">
            <h3 className="text-6xl md:text-7xl font-black text-black mb-16 text-center">Connected Integrations</h3>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
              <div className="flex gap-12 pb-4" style={{
                animation: 'scroll 120s linear infinite'
              }}>
                {[
                  { name: 'Google Calendar', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="10" width="80" height="80" rx="10" fill="#F25022" opacity="0.1" stroke="#F25022" strokeWidth="2"/>
                      <rect x="20" y="20" width="15" height="15" fill="#F25022"/>
                      <rect x="40" y="20" width="15" height="15" fill="#7FBA00"/>
                      <rect x="60" y="20" width="15" height="15" fill="#00A4EF"/>
                      <path d="M 25 45 L 25 75 L 50 75 L 50 45 Z" fill="#F25022" opacity="0.6"/>
                    </svg>
                  ) },
                  { name: 'Slack', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="40" stroke="#E01E5A" strokeWidth="2"/>
                      <circle cx="35" cy="35" r="8" fill="#E01E5A"/>
                      <circle cx="65" cy="35" r="8" fill="#E01E5A" opacity="0.6"/>
                      <circle cx="35" cy="65" r="8" fill="#E01E5A" opacity="0.6"/>
                      <circle cx="65" cy="65" r="8" fill="#E01E5A"/>
                    </svg>
                  ) },
                  { name: 'Microsoft Teams', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="15" width="25" height="25" fill="#5B5FC7"/>
                      <rect x="45" y="15" width="25" height="25" fill="#00A4EF"/>
                      <rect x="15" y="45" width="25" height="25" fill="#37B34A"/>
                      <rect x="45" y="45" width="25" height="25" fill="#FFB900"/>
                    </svg>
                  ) },
                  { name: 'Discord', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="15" width="70" height="70" rx="15" fill="#5865F2"/>
                      <circle cx="35" cy="45" r="8" fill="white"/>
                      <circle cx="65" cy="45" r="8" fill="white"/>
                      <path d="M 40 60 Q 50 65 60 60" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    </svg>
                  ) },
                  { name: 'Zoom', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="15" width="70" height="70" rx="10" fill="#0B5CFF"/>
                      <circle cx="35" cy="40" r="12" fill="white"/>
                      <circle cx="65" cy="40" r="12" fill="white"/>
                      <rect x="30" y="60" width="40" height="15" rx="5" fill="white"/>
                    </svg>
                  ) },
                  { name: 'Outlook', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="15" width="70" height="70" rx="10" fill="#0078D4"/>
                      <rect x="25" y="30" width="50" height="35" fill="white" opacity="0.9"/>
                      <circle cx="45" cy="50" r="8" fill="#0078D4"/>
                    </svg>
                  ) },
                  { name: 'Apple Calendar', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="20" width="70" height="65" rx="8" fill="#FF3B30" opacity="0.1" stroke="#FF3B30" strokeWidth="2"/>
                      <rect x="28" y="15" width="8" height="15" fill="#FF3B30"/>
                      <rect x="64" y="15" width="8" height="15" fill="#FF3B30"/>
                      <text x="50" y="60" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#FF3B30">1</text>
                    </svg>
                  ) },
                  { name: 'Telegram', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="40" fill="#0088cc"/>
                      <path d="M 35 50 L 50 60 L 65 50" stroke="white" strokeWidth="3" fill="none"/>
                      <path d="M 40 45 L 50 35 L 60 45" stroke="white" strokeWidth="3" fill="none"/>
                    </svg>
                  ) },
                  { name: 'WhatsApp', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="40" fill="#25D366"/>
                      <path d="M 35 50 Q 35 65 50 70 Q 65 65 65 50 Q 65 35 50 35 Q 35 35 35 50" fill="white" opacity="0.9"/>
                    </svg>
                  ) },
                  { name: 'Facebook', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="15" width="70" height="70" rx="10" fill="#1877F2"/>
                      <rect x="40" y="30" width="8" height="40" fill="white"/>
                      <rect x="30" y="45" width="28" height="8" fill="white"/>
                    </svg>
                  ) },
                  { name: 'Instagram', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="15" width="70" height="70" rx="15" fill="url(#grad)"/>
                      <circle cx="50" cy="50" r="18" fill="none" stroke="white" strokeWidth="2"/>
                      <circle cx="50" cy="50" r="5" fill="white"/>
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#405DE6"/>
                          <stop offset="50%" stopColor="#5B51D8"/>
                          <stop offset="100%" stopColor="#833AB4"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  ) },
                  { name: 'Stripe', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15" y="15" width="70" height="70" rx="10" fill="#005EB8"/>
                      <path d="M 30 40 Q 40 35 50 40 Q 60 35 70 40" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M 30 55 Q 40 50 50 55 Q 60 50 70 55" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M 30 70 Q 40 65 50 70 Q 60 65 70 70" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  ) },
                  // Duplicate for seamless loop
                  { name: 'Google Calendar', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="10" width="80" height="80" rx="10" fill="#F25022" opacity="0.1" stroke="#F25022" strokeWidth="2"/>
                      <rect x="20" y="20" width="15" height="15" fill="#F25022"/>
                      <rect x="40" y="20" width="15" height="15" fill="#7FBA00"/>
                      <rect x="60" y="20" width="15" height="15" fill="#00A4EF"/>
                      <path d="M 25 45 L 25 75 L 50 75 L 50 45 Z" fill="#F25022" opacity="0.6"/>
                    </svg>
                  ) },
                  { name: 'Slack', logo: (
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="40" stroke="#E01E5A" strokeWidth="2"/>
                      <circle cx="35" cy="35" r="8" fill="#E01E5A"/>
                      <circle cx="65" cy="35" r="8" fill="#E01E5A" opacity="0.6"/>
                      <circle cx="35" cy="65" r="8" fill="#E01E5A" opacity="0.6"/>
                      <circle cx="65" cy="65" r="8" fill="#E01E5A"/>
                    </svg>
                  ) }
                ].map((tool, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center gap-5 p-10 rounded-3xl hover:shadow-2xl transition border-4 border-black bg-white flex-shrink-0"
                    style={{
                      minWidth: '240px'
                    }}
                  >
                    <div className="flex items-center justify-center w-28 h-28 rounded-xl bg-gray-50">
                      {tool.logo}
                    </div>
                    <p className="text-2xl font-black text-black text-center">
                      {tool.name}
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

          {/* Quick Start Guides */}
          <div 
            className="mb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
            style={{
              backgroundImage: `url('/src/9.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'scroll'
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 p-16">
              <h3 className="text-6xl md:text-7xl font-black text-white mb-12 text-center drop-shadow-lg">Quick Start Guides</h3>
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Download size={48} />,
                  title: '📱 Download & Setup',
                  steps: ['Download the app', 'Create an account', 'Set up your profile', 'Join or create a group']
                },
                {
                  icon: <Users size={48} />,
                  title: '👥 Invite Friends',
                  steps: ['Click invite button', 'Share group code or link', 'Friends accept invite', 'Start planning!']
                },
                {
                  icon: <BarChart3 size={48} />,
                  title: '📊 Create Your First Poll',
                  steps: ['Click new poll', 'Add poll options', 'Set deadline', 'Share with group']
                },
                {
                  icon: <MessageSquare size={48} />,
                  title: '💬 Communicate',
                  steps: ['Use group chat', 'React to messages', 'Pin important info', 'Stay synced']
                }
              ].map((guide, i) => (
                <div key={i} className="bg-black text-white p-12 rounded-3xl border-4 border-lime-400">
                  <div className="text-lime-400 mb-4">{guide.icon}</div>
                  <h4 className="text-3xl font-black mb-6">{guide.title}</h4>
                  <ol className="space-y-3">
                    {guide.steps.map((step, j) => (
                      <li key={j} className="text-lg font-bold flex items-start gap-4">
                        <span className="text-lime-400 font-black text-2xl flex-shrink-0">{j + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="mb-32">
            <h3 className="text-6xl md:text-7xl font-black text-black mb-12 text-center">Troubleshooting Guide</h3>
            <div className="space-y-6">
              {[
                {
                  issue: 'App crashes on startup',
                  solution: 'Clear the app cache and reinstall the latest version from your app store'
                },
                {
                  issue: 'Notifications not working',
                  solution: 'Check app permissions in your device settings and ensure notifications are enabled'
                },
                {
                  issue: 'Calendar sync not working',
                  solution: 'Reconnect your calendar in settings and grant necessary permissions'
                },
                {
                  issue: 'Invites not received',
                  solution: 'Check spam folder and ensure correct email/phone number in your profile'
                },
                {
                  issue: 'Poll results showing wrong',
                  solution: 'Refresh the page and clear browser cache if using web version'
                },
                {
                  issue: 'Can\'t upload profile picture',
                  solution: 'Ensure file size is under 5MB and format is JPG/PNG'
                }
              ].map((item, i) => (
                <div key={i} className="p-8 border-4 border-black rounded-3xl hover:bg-gray-50 transition">
                  <h4 className="text-3xl font-black text-black mb-4">❓ {item.issue}</h4>
                  <p className="text-xl text-gray-700">✓ {item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-black text-white p-16 rounded-3xl border-4 border-lime-400 text-center">
            <h3 className="text-5xl md:text-6xl font-black mb-6">Still Need Help?</h3>
            <p className="text-2xl mb-8">Our support team is ready to assist you 24/7</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-lime-400 text-black font-black text-xl rounded-full hover:bg-yellow-400 transition">
                📧 Email Support
              </button>
              <button className="px-10 py-4 bg-lime-400 text-black font-black text-xl rounded-full hover:bg-yellow-400 transition">
                💬 Live Chat
              </button>
              <button className="px-10 py-4 bg-lime-400 text-black font-black text-xl rounded-full hover:bg-yellow-400 transition">
                📞 Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-black mb-8">Ready to Get Started?</h2>
          <p className="text-2xl md:text-3xl mb-12 leading-relaxed">Join our learning community and master weekend planning</p>
          <button onClick={() => navigate('/login')} className="inline-flex items-center gap-4 px-12 py-6 bg-lime-400 text-black font-black text-2xl rounded-full hover:bg-yellow-400 transition transform hover:scale-105">
            Get Started Now <ArrowRight size={32} />
          </button>
        </div>
      </section>
    </div>
  )
}
