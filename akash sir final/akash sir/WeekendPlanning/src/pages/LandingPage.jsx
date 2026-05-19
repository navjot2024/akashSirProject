import { ArrowRight, Facebook, Linkedin, Twitter, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useState, useEffect } from 'react'

export default function LandingPage() {
  const navigate = useNavigate()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedBlogCategory, setSelectedBlogCategory] = useState('All')

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Adventure Enthusiast',
      location: 'New York, USA',
      quote: 'WeekendPlanning made organizing group trips so easy. No more endless texts!',
      avatar: '👨‍💼'
    },
    {
      name: 'Sophia Chen',
      role: 'Social Butterfly',
      location: 'San Francisco, USA',
      quote: 'Love the polling feature! Deciding where to eat as a group is now quick and fair.',
      avatar: '👩‍💻'
    },
    {
      name: 'Marcus Webb',
      role: 'Sports Fan',
      location: 'Los Angeles, USA',
      quote: 'The scheduling algorithm is genius. Finds times that work for everyone instantly!',
      avatar: '👨‍🎤'
    },
    {
      name: 'Emma Roberts',
      role: 'Creative Artist',
      location: 'Austin, USA',
      quote: 'The social networking helps me connect with like-minded people. Highly recommend!',
      avatar: '👩‍🎨'
    },
    {
      name: 'David Wilson',
      role: 'Weekend Warrior',
      location: 'Seattle, USA',
      quote: 'Best app for coordinating with friends. Saves so much time and stress.',
      avatar: '🧑‍💼'
    },
    {
      name: 'Lisa Anderson',
      role: 'Travel Blogger',
      location: 'Miami, USA',
      quote: 'Perfect for planning group getaways. My friends love it as much as I do!',
      avatar: '👩‍✈️'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  // Auto-rotate slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">WeekendPlanning</div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <a href="/" className="text-white font-semibold hover:text-yellow-400 transition text-lg">HOME</a>
            <a href="/about" className="text-white font-semibold hover:text-yellow-400 transition text-lg">ABOUT</a>
            <a href="/resources" className="text-white font-semibold hover:text-yellow-400 transition text-lg">RESOURCES</a>
            <a href="/features" className="text-white font-semibold hover:text-yellow-400 transition text-lg">FEATURES</a>
            <a href="/blog" className="text-white font-semibold hover:text-yellow-400 transition text-lg">BLOG</a>
            <a href="/contact" className="text-white font-semibold hover:text-yellow-400 transition text-lg">CONTACT</a>
          </div>

          {/* Sign Up Button */}
          <button onClick={() => navigate('/login')} className="px-8 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section 
        className="relative pt-48 pb-32 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: `url('/src/weekendbaknd.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          minHeight: '700px'
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Main Tagline - White Card */}
          <div className="mb-16 bg-white px-16 py-12 rounded-3xl inline-block shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-black text-black leading-tight whitespace-normal">
              PLAN WEEKENDS<br />WITHOUT CHAOS
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <button onClick={() => navigate('/login')} className="px-12 py-5 bg-white text-black rounded-full font-black text-2xl hover:bg-gray-100 transition shadow-xl hover:shadow-2xl border-2 border-white">
              PLAN YOUR WEEKEND
            </button>
            <button onClick={() => navigate('/login')} className="px-12 py-5 bg-white text-black rounded-full font-black text-2xl hover:bg-gray-100 transition shadow-xl hover:shadow-2xl border-2 border-white">
              EXPLORE FEATURES
            </button>
          </div>
        </div>
      </section>

      {/* Green Testimonial Bar Section */}
      <section className="py-12 px-6 bg-lime-400">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-8">
          <div className="w-24 h-24 rounded-full bg-gray-400 flex-shrink-0 border-4 border-black overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-5xl">👩‍💼</div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-black text-black mb-2">
              "WeekendPlanning has been a great partner for us...and has been there every step of the way."
            </p>
            <p className="text-lg font-bold text-gray-800">
              ~ Lisa Anderson, Travel Blogger - Miami, USA
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section with Background Image */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div 
            className="rounded-3xl shadow-2xl relative overflow-hidden flex items-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(239, 68, 68, 0.65) 0%, rgba(220, 38, 38, 0.35) 50%, rgba(220, 38, 38, 0.15) 100%), url('/src/1.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'scroll',
              minHeight: '400px'
            }}
          >
            {/* Content Side */}
            <div className="w-full md:w-1/2 p-12 md:p-16 text-white">
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight">
                GAIN CLARITY ON YOUR TEAM'S PLANNING NEEDS IN JUST MINUTES.
              </h2>
              <p className="text-lg md:text-xl mb-10 font-light leading-relaxed text-white">
                Reflect, assess, and begin planning the next steps in creating strategic, personalized plans for your group.
              </p>
              <button onClick={() => navigate('/login')} className="px-10 py-4 bg-white text-red-600 rounded-full font-black text-xl hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
                ↓ DOWNLOAD
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-lime-400">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-black mb-6 text-center text-black leading-tight">Weekend Planning is a Circular Process!</h2>
          <p className="text-3xl text-center mb-20 font-bold text-black">Smart Coordination With Your Friends</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                title: 'Smart Scheduling', 
                desc: 'Find common free times with intelligent algorithms that analyze everyone\'s availability.',
                image: '/src/5.jpg'
              },
              { 
                title: 'Activities Discovery', 
                desc: 'Explore thousands of activities tailored to your group\'s interests and preferences.',
                image: '/src/6.jpg'
              },
              { 
                title: 'Group Polling', 
                desc: 'Make democratic decisions with transparent voting and real-time results.',
                image: '/src/7.jpg'
              },
              { 
                title: 'Social Network', 
                desc: 'Connect with like-minded people and build lasting friendships.',
                image: '/src/8.jpg'
              }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border-4 border-black shadow-xl hover:shadow-2xl transition overflow-hidden flex flex-col">
                {/* Image on Top */}
                <div className="w-full h-48 overflow-hidden bg-gray-200">
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                </div>
                {/* Content Below */}
                <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black mb-4 text-black">{f.title}</h3>
                    <p className="text-lg md:text-2xl text-gray-700 font-semibold leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-black mb-20 text-center text-black">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Create Group', desc: 'Start by creating a group with your friends' },
              { num: '2', title: 'Share Calendar', desc: 'Share your weekend availability' },
              { num: '3', title: 'Find Activities', desc: 'Discover fun activities together' },
              { num: '4', title: 'Plan & Vote', desc: 'Vote on activities and finalize plans' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-black text-white rounded-full font-black text-5xl mb-6 border-4 border-lime-400">
                  {step.num}
                </div>
                <h3 className="text-3xl font-bold mb-3 text-black">{step.title}</h3>
                <p className="text-xl text-gray-700 font-semibold">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features With Images Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-bold mb-20 text-center text-gray-900">Why Choose WeekendPlanning?</h2>
          
          {/* Feature 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
            <div>
              <h3 className="text-6xl md:text-7xl font-bold mb-8 text-gray-900">Smart Scheduling</h3>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                Our intelligent scheduling system finds the best time for your entire group. Advanced algorithms analyze availability patterns instantly.
              </p>
              <ul className="space-y-6">
                <li className="text-xl text-gray-700 font-medium">
                  Analyze everyone's availability
                </li>
                <li className="text-xl text-gray-700 font-medium">
                  Find optimal meeting times
                </li>
                <li className="text-xl text-gray-700 font-medium">
                  Get instant recommendations
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-12">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={[
                  { day: 'Mon', availability: 40 },
                  { day: 'Tue', availability: 30 },
                  { day: 'Wed', availability: 65 },
                  { day: 'Thu', availability: 55 },
                  { day: 'Fri', availability: 80 },
                  { day: 'Sat', availability: 90 },
                  { day: 'Sun', availability: 75 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                  <Line type="monotone" dataKey="availability" stroke="#4f46e5" strokeWidth={3} dot={{ fill: '#4f46e5', r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-gray-600 mt-6 font-medium">Availability Analysis Chart</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 order-2 md:order-1">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={[
                  { category: 'Sports', count: 240 },
                  { category: 'Dining', count: 380 },
                  { category: 'Movies', count: 200 },
                  { category: 'Adventure', count: 290 },
                  { category: 'Culture', count: 200 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="category" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
                  <Bar dataKey="count" fill="#06b6d4" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-gray-600 mt-6 font-medium">Popular Activities by Category</p>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-6xl md:text-7xl font-bold mb-8 text-gray-900">Activity Discovery</h3>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                Explore thousands of activities tailored to your group's interests. From adventure sports to fine dining, find exactly what suits everyone.
              </p>
              <ul className="space-y-6">
                <li className="text-xl text-gray-700 font-medium">
                  Search by category or location
                </li>
                <li className="text-xl text-gray-700 font-medium">
                  Read real user reviews and ratings
                </li>
                <li className="text-xl text-gray-700 font-medium">
                  Save favorites for later
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-6xl md:text-7xl font-bold mb-8 text-gray-900">Group Decisions</h3>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                Make democratic decisions with our polling system. Everyone's voice is heard, and results are transparent and instant.
              </p>
              <ul className="space-y-6">
                <li className="text-xl text-gray-700 font-medium">
                  Create unlimited polls
                </li>
                <li className="text-xl text-gray-700 font-medium">
                  Real-time voting results
                </li>
                <li className="text-xl text-gray-700 font-medium">
                  See who voted for what
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12 flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Beach Trip', value: 45 },
                      { name: 'Mountain', value: 30 },
                      { name: 'City Tour', value: 25 }
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    <Cell fill="#4f46e5" />
                    <Cell fill="#06b6d4" />
                    <Cell fill="#ec4899" />
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Slogan Section */}
      <section 
        className="py-40 px-6 bg-black text-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.4) 100%), url('/src/9.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-9xl md:text-10xl font-black mb-8 text-white leading-tight">
            PLAN WEEKENDS
          </h2>
          <h3 className="text-8xl md:text-9xl font-black text-lime-400 leading-tight">
            NOT STRESS
          </h3>
          <p className="text-3xl md:text-4xl text-white font-bold mt-12 max-w-4xl mx-auto leading-relaxed">
            Stop juggling texts, calls, and conflicting schedules. WeekendPlanning brings everyone together with smart coordination and instant decisions.
          </p>
        </div>
      </section>

      {/* Testimonials Auto-Slider Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-lime-400 to-lime-300">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="mb-20">
            <div className="relative flex justify-center mb-12">
              {/* Semi Circle Background */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full md:w-2/3 h-56 bg-black rounded-b-full opacity-100"></div>
              
              {/* Heading Text */}
              <h2 className="relative z-10 text-6xl md:text-7xl font-black text-white text-center leading-tight drop-shadow-lg px-8 py-10">
                What Users Say
              </h2>
            </div>
            
            <div className="h-1 w-32 bg-black mx-auto mb-8 rounded-full"></div>
            <p className="text-3xl md:text-4xl text-center font-bold text-black max-w-4xl mx-auto leading-relaxed">
              Join thousands of happy users planning better weekends
            </p>
          </div>
          
          {/* Slider Container */}
          <div className="relative">
            {/* Testimonials Carousel - Auto Rotating */}
            <div className="overflow-hidden rounded-3xl">
              <div className="flex transition-transform duration-700 ease-out" 
                   style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {[
                  {
                    name: 'Alex Johnson',
                    role: 'Adventure Enthusiast',
                    location: 'New York, USA',
                    quote: 'WeekendPlanning made organizing group trips so easy. No more endless texts!',
                    image: '/src/21.jpg'
                  },
                  {
                    name: 'Sophia Chen',
                    role: 'Social Butterfly',
                    location: 'San Francisco, USA',
                    quote: 'Love the polling feature! Deciding where to eat as a group is now quick and fair.',
                    image: '/src/22.jpg'
                  },
                  {
                    name: 'Marcus Webb',
                    role: 'Sports Fan',
                    location: 'Los Angeles, USA',
                    quote: 'The scheduling algorithm is genius. Finds times that work for everyone instantly!',
                    image: '/src/23.jpg'
                  },
                  {
                    name: 'Emma Roberts',
                    role: 'Creative Artist',
                    location: 'Austin, USA',
                    quote: 'The social networking helps me connect with like-minded people. Highly recommend!',
                    image: '/src/24.jpg'
                  },
                  {
                    name: 'David Wilson',
                    role: 'Weekend Warrior',
                    location: 'Seattle, USA',
                    quote: 'Best app for coordinating with friends. Saves so much time and stress.',
                    image: '/src/25.jpg'
                  },
                  {
                    name: 'Lisa Anderson',
                    role: 'Travel Blogger',
                    location: 'Miami, USA',
                    quote: 'Perfect for planning group getaways. My friends love it as much as I do!',
                    image: '/src/26.jpg'
                  }
                ].map((testimonial, i) => (
                  <div key={i} className="min-w-full px-4 md:px-8">
                    <div className="bg-white rounded-3xl shadow-2xl border-4 border-black overflow-hidden h-96">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-full">
                        {/* Image Side */}
                        <div className="col-span-1 overflow-hidden bg-gray-100">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Content Side */}
                        <div className="col-span-2 p-10 md:p-14 flex flex-col justify-between">
                          {/* User Info - Top */}
                          <div>
                            <h4 className="font-black text-2xl md:text-3xl text-black mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-lg md:text-xl text-gray-800 font-bold mb-1">
                              {testimonial.role}
                            </p>
                            <p className="text-base md:text-lg text-gray-600 font-bold mb-6">
                              {testimonial.location}
                            </p>
                          </div>
                          
                          {/* Quote */}
                          <p className="text-xl md:text-2xl text-black font-semibold leading-snug">
                            "{testimonial.quote} It has transformed how our group coordinates and communicates."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 bg-black hover:bg-gray-800 text-white rounded-full p-4 md:p-6 transition transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 bg-black hover:bg-gray-800 text-white rounded-full p-4 md:p-6 transition transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={32} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-12">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial 
                      ? 'bg-black w-12 h-4' 
                      : 'bg-gray-400 w-4 h-4 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-black mb-12 text-center text-black">New Planning Ideas</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['All', 'Smart Scheduling', 'Group Activities', 'Decision Making', 'Social Connection', 'Weekend Planning', 'Team Coordination', 'Fun Ideas'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedBlogCategory(category)}
                className={`px-6 py-3 rounded-lg font-bold text-lg transition border-2 ${
                  selectedBlogCategory === category
                    ? 'bg-lime-400 text-black border-lime-400'
                    : 'bg-white text-black border-gray-400 hover:border-lime-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                image: '/src/3.jpg',
                title: 'THE BIGGEST MISUNDERSTANDING ABOUT SMART SCHEDULING',
                category: 'Smart Scheduling',
                author: 'Chad Ostrowski'
              },
              {
                image: '/src/4.jpg',
                title: 'CREATING A FEAR-FREE GROUP PLANNING EXPERIENCE',
                subtitle: '8 STRATEGIES TO EMPOWER YOUR FRIENDS',
                category: 'Decision Making',
                author: 'Chad Ostrowski'
              },
              {
                image: '/src/5.jpg',
                title: 'NOT EVERYTHING NEEDS TO BE ALIGNED BUT THESE THINGS DO',
                category: 'Weekend Planning',
                author: 'Chad Ostrowski'
              },
              {
                image: '/src/6.jpg',
                title: 'SUSTAINED SILENT PLANNING (SSP)',
                subtitle: 'A CLEAR, RESEARCH-DRIVEN GUIDE FOR FRIENDS',
                category: 'Team Coordination',
                author: 'Suznne Rasmussen'
              },
              {
                image: '/src/7.jpg',
                title: 'WHAT INSTRUCTIONAL ALIGNMENT REALLY REQUIRES',
                category: 'Social Connection',
                author: 'Chad Ostrowski'
              },
              {
                image: '/src/8.jpg',
                title: 'GUIDING FRIENDS TOWARD EFFECTIVE RESEARCH-BASED PRACTICES',
                category: 'Fun Ideas',
                author: 'Suznne Rasmussen'
              },
              {
                image: '/src/9.jpg',
                title: 'WHAT INSTRUCTIONAL COHERENCE ACTUALLY LOOKS LIKE IN THE WEEKEND',
                category: 'Group Activities',
                author: 'Chad Ostrowski'
              },
              {
                image: '/src/10.jpg',
                title: 'THE THING MOST PEOPLE GET WRONG ABOUT THE GROUP METHOD',
                category: 'Decision Making',
                author: 'Chad Ostrowski'
              },
              {
                image: '/src/11.jpg',
                title: 'WHAT FRIENDS EXPERIENCE WHEN PLANNING TOGETHER',
                category: 'Social Connection',
                author: 'Chad Ostrowski'
              }
            ]
              .filter((blog) => selectedBlogCategory === 'All' || blog.category === selectedBlogCategory)
              .map((blog, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer group">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                    {blog.title}
                  </h3>
                  {blog.subtitle && (
                    <p className="text-lg font-semibold text-lime-300 mb-2">
                      {blog.subtitle}
                    </p>
                  )}
                  <p className="text-sm text-gray-200">by {blog.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="px-12 py-4 bg-white text-black border-2 border-black rounded-lg font-black text-xl hover:bg-black hover:text-white transition">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-8xl md:text-9xl font-black mb-6 text-black leading-tight">Frequently Asked Questions</h2>
            <p className="text-2xl text-gray-700 font-bold">Everything you need to know about WeekendPlanning</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                question: 'How do I create a group?',
                answer: 'Creating a group is simple! Just sign up, click "Create Group", add your friends emails, and you\'re ready to start planning.',
                icon: '👥'
              },
              {
                question: 'Is WeekendPlanning free?',
                answer: 'Yes! WeekendPlanning is completely free to use. We offer all basic features at no cost. Premium features coming soon.',
                icon: '💰'
              },
              {
                question: 'Can I use it on mobile?',
                answer: 'Absolutely! WeekendPlanning works on all devices - mobile, tablet, and desktop. We\'re optimized for all screen sizes.',
                icon: '📱'
              },
              {
                question: 'How does the scheduling algorithm work?',
                answer: 'Our algorithm analyzes everyone\'s availability and uses a greedy optimization approach to find the best times that work for most people.',
                icon: '⚙️'
              },
              {
                question: 'Can I invite people who don\'t have the app?',
                answer: 'Yes! You can send invitation links to anyone. They can join without needing to download an app.',
                icon: '🔗'
              },
              {
                question: 'Is my data safe?',
                answer: 'We take privacy seriously. Your data is encrypted and stored securely. We never sell your information.',
                icon: '🔒'
              }
            ].map((faq, i) => (
              <div key={i} className={`group bg-white p-8 border-4 border-black rounded-3xl hover:shadow-2xl hover:border-lime-400 transition-all duration-300 cursor-pointer min-h-80 flex flex-col ${i === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="text-5xl mb-6 flex-shrink-0">{faq.icon}</div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-black text-black mb-3 group-hover:text-lime-400 transition">
                    {faq.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 font-semibold leading-relaxed flex-grow">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section 
        className="py-24 px-6 bg-black text-black relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url('/src/aaa.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-7xl md:text-8xl font-black mb-16 text-black">Featured In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['TechCrunch', 'Forbes', 'Product Hunt', 'The Verge'].map((publication, i) => (
              <div key={i} className="py-8 border-2 border-black rounded-2xl bg-white bg-opacity-90">
                <p className="text-3xl font-black text-black">{publication}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-black">
              <img src="/src/11.jpg" alt="team meeting" className="w-full h-full object-cover" />
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Heading with Styled Text */}
              <div className="mb-8">
                <p className="text-3xl md:text-4xl font-black text-lime-400 mb-6" style={{
                  textStroke: '2px #CCFF00',
                  WebkitTextStroke: '2px #CCFF00',
                  textFillColor: 'transparent',
                  WebkitTextFillColor: 'transparent'
                }}>
                  THE SUPPORT YOU NEED
                </p>
                
                <div className="mb-6">
                  <h2 className="text-5xl md:text-6xl font-black text-black leading-tight mb-2">
                    ADMINISTRATOR
                  </h2>
                  <h2 className="text-6xl md:text-7xl font-black leading-tight" style={{
                    textStroke: '3px black',
                    WebkitTextStroke: '3px black',
                    textFillColor: 'transparent',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    MASTERMIND
                  </h2>
                </div>
                
                <p className="text-xl text-lime-400 font-black mt-3">WITH THE WEEKENDPLANNING TEAM</p>
              </div>

              {/* CTA Button */}
              <button onClick={() => navigate('/login')} className="px-10 py-4 bg-lime-400 text-black rounded-full font-black text-2xl hover:bg-lime-500 transition shadow-lg mb-12 border-4 border-black">
                JOIN FOR FREE
              </button>

              {/* Benefits List */}
              <div className="space-y-5">
                {[
                  'LIVE MEETINGS EVERY MONTH',
                  'PRIVATE FACEBOOK GROUP',
                  'CURATED CONTENT & RESOURCES',
                  'ACCOUNTABILITY & SUPPORT',
                  'FREE FOR SCHOOL ADMINISTRATORS'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black">
                      <span className="text-black font-black text-lg">✓</span>
                    </div>
                    <p className="text-lg md:text-xl font-black text-black uppercase">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-lime-400 text-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-black mb-8">Ready to Plan Perfect Weekends?</h2>
          <p className="text-2xl mb-12 font-bold leading-relaxed">
            Join thousands of friends planning better weekends together without the chaos.
          </p>
          <button onClick={() => navigate('/login')} className="px-12 py-5 bg-black text-lime-400 rounded-full font-black text-2xl hover:bg-gray-900 transition shadow-xl">
            GET STARTED NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 border-t-4 border-lime-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-black text-2xl mb-6 text-lime-400">WeekendPlanning</h4>
              <p className="text-gray-300 text-lg font-semibold">Plan perfect weekends with your friends, effortlessly.</p>
            </div>
            <div>
              <h4 className="font-black mb-6 text-white text-xl">Product</h4>
              <ul className="text-gray-300 space-y-3">
                <li><a href="#" className="hover:text-lime-400 text-lg font-semibold">Features</a></li>
                <li><a href="#" className="hover:text-lime-400 text-lg font-semibold">Pricing</a></li>
                <li><a href="#" className="hover:text-lime-400 text-lg font-semibold">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-6 text-white text-xl">Company</h4>
              <ul className="text-gray-300 space-y-3">
                <li><a href="#" className="hover:text-lime-400 text-lg font-semibold">About</a></li>
                <li><a href="#" className="hover:text-lime-400 text-lg font-semibold">Blog</a></li>
                <li><a href="#" className="hover:text-lime-400 text-lg font-semibold">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-6 text-white text-xl">Follow Us</h4>
              <div className="flex gap-6">
                <a href="#" className="text-gray-300 hover:text-lime-400"><Facebook size={28} /></a>
                <a href="#" className="text-gray-300 hover:text-lime-400"><Linkedin size={28} /></a>
                <a href="#" className="text-gray-300 hover:text-lime-400"><Twitter size={28} /></a>
                <a href="#" className="text-gray-300 hover:text-lime-400"><Mail size={28} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-12 text-center text-gray-400 text-lg">
            <p className="font-semibold">© 2024 WeekendPlanning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
